import Link from "next/link";

/**
 * Converts markdown-style links inside a plain string into Next.js <Link> elements.
 *
 * Usage (in any page data file):
 *   "We build [explainer videos](/animated-explainer-video) that convert."
 *
 * Returns the original string unchanged if it contains no links.
 */
export default function parseLinks(text) {
  if (typeof text !== "string") return text;

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    // Push the plain text before this match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Push the <Link> element
    parts.push(
      <Link key={key++} href={match[2]}>
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }

  // If no links were found, return the original string as-is
  if (parts.length === 0) return text;

  // Push any remaining text after the last match
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
