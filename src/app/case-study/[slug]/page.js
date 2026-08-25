import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy } from '@/data/caseStudies';
import HealthcareBanner from '@/components/CaseStudy/Healthcare/HealthcareBanner';
import HealthcareDetails from '@/components/CaseStudy/Healthcare/HealthcareDetails';
import HealthcareHighlight from '@/components/CaseStudy/Healthcare/HealthcareHighlight';
import HealthcareDealing from '@/components/CaseStudy/Healthcare/HealthcareDealing';
import HealthcareProductExplainer from '@/components/CaseStudy/Healthcare/HealthcareProductExplainer';
import HealthcareCluttered from '@/components/CaseStudy/Healthcare/HealthcareCluttered';
import GetQuoteSection from '@/components/Common/GetQuoteSection';

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) return {};

  return {
    title: caseStudy.seo.title,
    description: caseStudy.seo.description,
    robots: { index: false, follow: false },
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  return (
    <main style={{ backgroundColor: '#19042D', minHeight: '100vh', overflow: 'hidden' }}>
      <HealthcareBanner content={caseStudy.hero} />
      <HealthcareDetails details={caseStudy.details} />
      <HealthcareHighlight content={caseStudy.highlight} />
      <HealthcareDealing content={caseStudy.dealing} />
      <HealthcareProductExplainer content={caseStudy.productExplainer} />
      <HealthcareCluttered content={caseStudy.closing} />
      <GetQuoteSection />
    </main>
  );
}
