/**
 * Refactoring Script v2
 * 
 * Strategy:
 * - For WRAPPER components (FaqSection, StatsSection, GreatVideosSection):
 *   They already import from Common. Extract their const data + JSX props.
 * - For HARDCODED components (CostSection, WhyInvestSection, HowWeWorkSection, 
 *   CooperationModelsSection, WonderingSection):
 *   They have hardcoded JSX. Extract const data arrays + inline text values.
 * 
 * Instead of injecting extracted text as string props (which breaks with special chars),
 * we'll create a proper data object for each page.
 */
const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, 'src', 'app');
const srcComponentsDir = path.join(__dirname, 'src', 'components');

// Components that are typically already wrappers around Common/Global versions
const WRAPPER_COMPONENTS = ['FaqSection', 'StatsSection', 'GreatVideosSection'];

// Components that have hardcoded JSX and need content extraction
const HARDCODED_COMPONENTS = ['CostSection', 'WhyInvestSection', 'HowWeWorkSection', 'CooperationModelsSection', 'WonderingSection'];

const ALL_TARGET = [...WRAPPER_COMPONENTS, ...HARDCODED_COMPONENTS];

const results = {
  pagesUpdated: [],
  componentsProcessed: new Set(),
  errors: []
};

/**
 * Extract the body of a wrapper component.
 * These components import GlobalXxxSection from Common and pass props.
 * We need to extract:
 *   1. All top-level const declarations (data arrays, title JSX, text strings)
 *   2. The props passed to the Global component in JSX
 */
function processWrapperComponent(content, componentName) {
  // Extract all const declarations before the component function
  const componentFuncRegex = /(?:const|function)\s+\w+\s*=?\s*\(?/;
  const funcMatch = content.search(componentFuncRegex);
  
  // Find all top-level const declarations
  const constDecls = [];
  const constRegex = /^const\s+(\w+)\s*=\s*([\s\S]*?);$/gm;
  let m;
  while ((m = constRegex.exec(content)) !== null) {
    const varName = m[1];
    // Skip the component function itself and imports
    if (varName === componentName || varName === 'metadata') continue;
    constDecls.push({ name: varName, fullDecl: m[0] });
  }
  
  // Extract JSX props from the Global component usage
  // e.g., <GlobalFaqSection heading="..." faqs={faqs} />
  const jsxPropsRegex = /\b(\w+)=(\{[^}]+\}|"[^"]*")/g;
  const globalCompRegex = new RegExp(`<Global${componentName}([\\s\\S]*?)\\/>`, 's');
  const globalMatch = content.match(globalCompRegex);
  
  let propsMap = {};
  if (globalMatch) {
    const propsStr = globalMatch[1];
    let pm;
    while ((pm = jsxPropsRegex.exec(propsStr)) !== null) {
      propsMap[pm[1]] = pm[2];
    }
  }
  
  // Also handle inline const inside the component function
  // e.g., const title = (<>...</>); const text = "...";
  // SAFE EXTRACTION: only extract from the very specific variables we expect
  const expectedVars = ['title', 'text'];
  for (const expVar of expectedVars) {
    const varRegex = new RegExp(`const\\s+${expVar}\\s*=\\s*([\\s\\S]*?);`, 'g');
    let ic;
    while ((ic = varRegex.exec(content)) !== null) {
      // Unconditionally extract them so they are added to page.jsx
      constDecls.push({ name: expVar, fullDecl: ic[0].trim() });
    }
  }
  
  return { constDecls, propsMap };
}

/**
 * Extract data from a hardcoded component.
 * These components render full JSX with hardcoded content.
 * We extract:
 *   1. All const arrays (accordionData, cards, industriesData, statsData)
 *   2. Inline text values (subtitle, title, description, videoSrc, bottomText)
 */
function processHardcodedComponent(content, componentName) {
  const constDecls = [];
  const propsMap = {};
  
  // Extract top-level const arrays/objects
  // Match const varName = [ ... ]; (multiline)
  const arrayConstRegex = /const\s+(\w+)\s*=\s*\[[\s\S]*?\];/g;
  let m;
  while ((m = arrayConstRegex.exec(content)) !== null) {
    constDecls.push({ name: m[1], fullDecl: m[0] });
  }
  
  if (componentName === 'CostSection') {
    // Extract subtitle from <p className="subtitle">TEXT</p>
    const subtitleMatch = content.match(/<p className="subtitle">([\s\S]*?)<\/p>/);
    if (subtitleMatch) propsMap.subtitle = `"${subtitleMatch[1].trim()}"`;
    
    // Extract title from <h2 className={styles.title}>TEXT</h2>
    const titleMatch = content.match(/<h2 className=\{styles\.title\}>([\s\S]*?)<\/h2>/);
    if (titleMatch) {
      const titleContent = titleMatch[1].trim();
      // Check if it contains JSX (like <br />)
      if (titleContent.includes('<')) {
        propsMap.title = `{<>${titleContent}</>}`;
      } else {
        propsMap.title = `"${titleContent}"`;
      }
    }
    
    // Extract description
    const descMatch = content.match(/<p className=\{styles\.description\}>\s*([\s\S]*?)\s*<\/p>/);
    if (descMatch) propsMap.description = `"${escapeJSXString(descMatch[1].trim())}"`;
    
    // Extract video src
    const videoMatch = content.match(/src="(https:\/\/player\.vimeo\.com[^"]+)"/);
    if (videoMatch) propsMap.videoSrc = `"${videoMatch[1]}"`;
    
    // Extract bottom text
    const bottomMatch = content.match(/<p className=\{styles\.bottomText\}>\s*([\s\S]*?)\s*<\/p>/);
    if (bottomMatch) propsMap.bottomText = `"${escapeJSXString(bottomMatch[1].trim())}"`;
  }
  
  else if (componentName === 'WhyInvestSection') {
    // Check for default props in function signature
    const propsMatch = content.match(/const\s+WhyInvestSection\s*=\s*\(\{([\s\S]*?)\}\)\s*=>/);
    if (propsMatch) {
      const propsStr = propsMatch[1];
      
      // Extract eyebrow/subtitle
      const eyebrowMatch = propsStr.match(/eyebrow\s*=\s*"([^"]+)"/);
      if (eyebrowMatch) propsMap.subtitle = `"${eyebrowMatch[1]}"`;
      
      // Extract heading/title - may be JSX
      const headingStrMatch = propsStr.match(/heading\s*=\s*"([^"]+)"/);
      const headingJsxMatch = propsStr.match(/heading\s*=\s*(<>[\s\S]*?<\/>)/);
      if (headingStrMatch) propsMap.title = `"${headingStrMatch[1]}"`;
      else if (headingJsxMatch) propsMap.title = `{${headingJsxMatch[1]}}`;
      
      // Extract description
      const descStrMatch = propsStr.match(/description\s*=\s*"([\s\S]*?)"/);
      if (descStrMatch) propsMap.description = `"${escapeJSXString(descStrMatch[1])}"`;
    } else {
      // Try inline JSX extraction
      const subtitleMatch = content.match(/<p className="subtitle">([\s\S]*?)<\/p>/);
      if (subtitleMatch) propsMap.subtitle = `"${subtitleMatch[1].trim()}"`;
      
      const titleMatch = content.match(/<h2 className=\{styles\.mainTitle\}>([\s\S]*?)<\/h2>/);
      if (titleMatch) {
        const tc = titleMatch[1].trim();
        if (tc.includes('<')) propsMap.title = `{<>${tc}</>}`;
        else propsMap.title = `"${tc}"`;
      }
      
      const descMatch = content.match(/<p className=\{styles\.subText\}>\s*([\s\S]*?)\s*<\/p>/);
      if (descMatch) propsMap.description = `"${escapeJSXString(descMatch[1].trim())}"`;
    }
    
    // Map data array name
    const dataArrayName = constDecls.find(d => d.name === 'accordionData' || d.name === 'items');
    if (dataArrayName) {
      if (dataArrayName.name === 'items') {
        dataArrayName.fullDecl = dataArrayName.fullDecl.replace('const items', 'const whyInvestAccordionData');
        dataArrayName.name = 'whyInvestAccordionData';
      } else {
        dataArrayName.fullDecl = dataArrayName.fullDecl.replace('const accordionData', 'const whyInvestAccordionData');
        dataArrayName.name = 'whyInvestAccordionData';
      }
      propsMap.accordionData = `{whyInvestAccordionData}`;
    }
  }
  
  else if (componentName === 'HowWeWorkSection') {
    // Extract heading
    const headingMatch = content.match(/<h2 className=\{styles\.heading\}>([\s\S]*?)<\/h2>/);
    if (headingMatch) {
      const hc = headingMatch[1].trim();
      if (hc.includes('<')) propsMap.heading = `{<>${hc}</>}`;
      else propsMap.heading = `"${hc}"`;
    }
    
    // Extract description
    const descMatch = content.match(/<p className=\{styles\.description\}>\s*([\s\S]*?)\s*<\/p>/);
    if (descMatch) propsMap.description = `"${escapeJSXString(descMatch[1].trim())}"`;
    
    // Map data array name
    const dataArrayName = constDecls.find(d => d.name === 'accordionData');
    if (dataArrayName) {
      dataArrayName.fullDecl = dataArrayName.fullDecl.replace('const accordionData', 'const howWeWorkAccordionData');
      dataArrayName.name = 'howWeWorkAccordionData';
      propsMap.accordionData = `{howWeWorkAccordionData}`;
    }
  }
  
  else if (componentName === 'CooperationModelsSection') {
    const subtitleMatch = content.match(/<p className="subtitle">([\s\S]*?)<\/p>/);
    if (subtitleMatch) propsMap.subtitle = `"${subtitleMatch[1].trim()}"`;
    
    const titleMatch = content.match(/<h2 className=\{styles\.mainHeading\}>([\s\S]*?)<\/h2>/);
    if (titleMatch) {
      const tc = titleMatch[1].trim();
      if (tc.includes('<')) propsMap.title = `{<>${tc}</>}`;
      else propsMap.title = `"${tc}"`;
    }
    
    const descMatch = content.match(/<p className=\{styles\.topParagraph\}>\s*([\s\S]*?)\s*<\/p>/);
    if (descMatch) propsMap.description = `"${escapeJSXString(descMatch[1].trim())}"`;
    
    const dataArrayName = constDecls.find(d => d.name === 'cards');
    if (dataArrayName) {
      dataArrayName.fullDecl = dataArrayName.fullDecl.replace('const cards', 'const cooperationModelsCards');
      dataArrayName.name = 'cooperationModelsCards';
      propsMap.cards = `{cooperationModelsCards}`;
    }
  }
  
  else if (componentName === 'WonderingSection') {
    const subtitleMatch = content.match(/<p className="subtitle">([\s\S]*?)<\/p>/);
    if (subtitleMatch) propsMap.subtitle = `"${subtitleMatch[1].trim()}"`;
    
    const titleMatch = content.match(/<h2 className=\{styles\.mainTitle\}>([\s\S]*?)<\/h2>/);
    if (titleMatch) {
      const tc = titleMatch[1].trim();
      if (tc.includes('<')) propsMap.title = `{<>${tc}</>}`;
      else propsMap.title = `"${tc}"`;
    }
    
    const descMatch = content.match(/<p className=\{styles\.description\}>\s*([\s\S]*?)\s*<\/p>/);
    if (descMatch) propsMap.description = `"${escapeJSXString(descMatch[1].trim())}"`;
    
    const dataArrayName = constDecls.find(d => d.name === 'industriesData');
    if (dataArrayName) {
      dataArrayName.fullDecl = dataArrayName.fullDecl.replace('const industriesData', 'const wonderingIndustriesData');
      dataArrayName.name = 'wonderingIndustriesData';
      propsMap.data = `{wonderingIndustriesData}`;
    }
  }
  
  else if (componentName === 'StatsSection') {
    const headingMatch = content.match(/<h2 className=\{styles\.heading\}>([\s\S]*?)<\/h2>/);
    if (headingMatch) {
      const hc = headingMatch[1].trim();
      if (hc.includes('<')) propsMap.heading = `{<>${hc}</>}`;
      else propsMap.heading = `"${hc}"`;
    }
    const dataArrayName = constDecls.find(d => d.name === 'statsData');
    if (dataArrayName) propsMap.statsData = `{statsData}`;
  }
  
  else if (componentName === 'FaqSection') {
    const headingMatch = content.match(/<h2 className=\{styles\.heading\}>([\s\S]*?)<\/h2>/);
    if (headingMatch) {
      const hc = headingMatch[1].trim();
      if (hc.includes('<')) propsMap.heading = `{<>${hc}</>}`;
      else propsMap.heading = `"${hc}"`;
    }
    const dataArrayName = constDecls.find(d => d.name === 'faqs');
    if (dataArrayName) propsMap.faqs = `{faqs}`;
  }
  
  else if (componentName === 'GreatVideosSection') {
    const titleMatch = content.match(/<h2 className=\{styles\.title\}>([\s\S]*?)<\/h2>/);
    if (titleMatch) {
      const hc = titleMatch[1].trim();
      if (hc.includes('<')) {
        constDecls.push({ name: 'title', fullDecl: `const title = (<>\n${hc}\n</>);` });
        propsMap.title = `{title}`;
      } else {
        propsMap.title = `"${hc}"`;
      }
    }
    const descMatch = content.match(/<p className=\{styles\.text\}>\s*([\s\S]*?)\s*<\/p>/);
    if (descMatch) {
      const hc = descMatch[1].trim();
      constDecls.push({ name: 'text', fullDecl: `const text = "${escapeJSXString(hc)}";` });
      propsMap.text = `{text}`;
    }
  }
  
  return { constDecls, propsMap };
}

function escapeJSXString(str) {
  // Don't double-escape already escaped characters
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function processPage(pagePath) {
  let content = fs.readFileSync(pagePath, 'utf8');
  let modified = false;
  let allConstDecls = [];
  let importReplacements = [];
  let tagReplacements = [];

  // Find all component imports from non-Common directories
  const importRegex = /import\s+(\w+)\s+from\s+["']@\/components\/(?!Common\/)(\w+)\/(\w+)["'];/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    const [fullImport, importName, componentDir, componentName] = match;
    
    if (!ALL_TARGET.includes(componentName)) continue;
    
    const compPath = path.join(srcComponentsDir, componentDir, `${componentName}.jsx`);
    if (!fs.existsSync(compPath)) {
      results.errors.push(`File not found: ${compPath} (referenced in ${pagePath})`);
      continue;
    }
    
    const compContent = fs.readFileSync(compPath, 'utf8');
    let extracted;
    
    // Check if the component is a wrapper by seeing if it imports the Common component
    const isWrapper = compContent.includes(`from '../Common/${componentName}'`) || 
                      compContent.includes(`from "../Common/${componentName}"`) ||
                      compContent.includes(`from '@/components/Common/${componentName}'`) ||
                      compContent.includes(`from "@/components/Common/${componentName}"`) ||
                      compContent.includes(`<Global${componentName}`);

    if (isWrapper) {
      extracted = processWrapperComponent(compContent, componentName);
    } else {
      extracted = processHardcodedComponent(compContent, componentName);
    }
    
    const { constDecls, propsMap } = extracted;
    
    // Collect const declarations
    allConstDecls.push(...constDecls);
    
    // Build new import
    importReplacements.push({
      old: fullImport,
      new: `import ${componentName} from "@/components/Common/${componentName}";`
    });
    
    // Build new JSX tag with props
    let propsStr = Object.entries(propsMap)
      .map(([key, val]) => `\n        ${key}=${val}`)
      .join('');
    
    tagReplacements.push({
      componentName,
      propsStr
    });
    
    results.componentsProcessed.add(`${componentDir}/${componentName}`);
    modified = true;
  }
  
  if (!modified) return;
  
  // Apply import replacements
  for (const rep of importReplacements) {
    content = content.replace(rep.old, rep.new);
  }
  
  // Apply tag replacements
  for (const rep of tagReplacements) {
    const { componentName, propsStr } = rep;
    
    // Replace self-closing tags: <ComponentName />
    const selfCloseRegex = new RegExp(`<${componentName}\\s*/>`, 'g');
    content = content.replace(selfCloseRegex, `<${componentName}${propsStr}\n      />`);
    
    // Replace tags with children: <ComponentName>...</ComponentName>  
    const openCloseRegex = new RegExp(`<${componentName}\\s*>[\\s\\S]*?<\\/${componentName}>`, 'g');
    content = content.replace(openCloseRegex, `<${componentName}${propsStr}\n      />`);
  }
  
  // Insert const declarations before the metadata export or component export
  if (allConstDecls.length > 0) {
    const declsText = '\n' + allConstDecls.map(d => d.fullDecl).join('\n\n') + '\n';
    
    // Insert before `export const metadata` or `export default function`
    const metadataMatch = content.match(/^export\s+const\s+metadata/m);
    const exportMatch = content.match(/^export\s+default\s+function/m);
    
    if (metadataMatch) {
      content = content.replace(/^export\s+const\s+metadata/m, declsText + '\nexport const metadata');
    } else if (exportMatch) {
      content = content.replace(/^export\s+default\s+function/m, declsText + '\nexport default function');
    }
  }
  
  fs.writeFileSync(pagePath, content, 'utf8');
  results.pagesUpdated.push(pagePath);
  console.log(`✓ Updated: ${path.relative(srcAppDir, pagePath)}`);
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.name === 'page.jsx') {
      try {
        processPage(fullPath);
      } catch (err) {
        results.errors.push(`Error processing ${fullPath}: ${err.message}`);
        console.error(`✗ Error: ${path.relative(srcAppDir, fullPath)}: ${err.message}`);
      }
    }
  }
}

console.log('=== Refactoring Script v2 ===\n');
walkDir(srcAppDir);

console.log('\n=== SUMMARY ===');
console.log(`Pages updated: ${results.pagesUpdated.length}`);
console.log(`Components processed: ${results.componentsProcessed.size}`);
console.log(`Errors: ${results.errors.length}`);

if (results.errors.length > 0) {
  console.log('\nErrors:');
  results.errors.forEach(e => console.log(`  - ${e}`));
}

console.log('\nComponent folders processed:');
[...results.componentsProcessed].sort().forEach(c => console.log(`  - ${c}`));

console.log('\nPages updated:');
results.pagesUpdated.forEach(p => console.log(`  - ${path.relative(path.join(__dirname, 'src', 'app'), p)}`));
