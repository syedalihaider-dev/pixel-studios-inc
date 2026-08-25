import Link from "next/link";

// Add a new object here to publish another case study. The `slug` becomes
// /case-study/<slug>; all sections use the same reusable components.
export const caseStudies = [
  {
    slug: 'domuzeum-childrens-music-video-animation',
    seo: {
      title: "Case Study for DoMuzeum | Children's Music Video Animation",
      description: "Pixel Studios Inc. created a fully animated, beat-synced children's music video for DoMuzeum, pairing an original song with bright character-driven 2D animation. Every visual choice, from character design to pacing, was engineered around one goal: getting young viewers to hit replay.",
    },
    hero: {
      title: "Case Study for DoMuzeum | Children's Music Video Animation",
      description: "Pixel Studios Inc. created a fully animated, beat-synced children's music video for DoMuzeum, pairing an original song with bright character-driven 2D animation. Every visual choice, from character design to pacing, was engineered around one goal: getting young viewers to hit replay.",
      thumbnail: '/case-study/healthcare/banner-video-thumbnail.png',
      thumbnailAlt: 'N-Seam Saver animated commercial thumbnail',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      videoTitle: 'N-Seam Saver animated commercial',
    },
    details: [
      { title: 'Project Objective', description: "To produce a kids' music video that stops the scroll, holds attention through repeat viewings, and clears the trust bar parents set for children's content." },
      { title: 'Our Approach', description: <>We built a <Link href="/2d-animation-services">character-driven 2D animation</Link> mapped frame-by-frame to a beat map of the song, so every motion, cut, and motif lands on the music rather than around it.</> },
      { title: 'Target Audience', description: 'Children and the parents who gatekeep what they watch, across streaming and short-form platforms.' },
    ],
    highlight: {
      title: "Building a Music Video Kids Actually Rewatch",
      description: "Children's content lives or dies on the replay loop. DoMuzeum needed a video that could survive an audience with zero patience for a slow open and an unlimited appetite for repetition, once it earned their attention.",
      cta: { text: 'Motion Graphics', href: '#' },
      meta: [
        { label: 'CLIENT', value: 'DoMuzeum' },
        { label: 'INDUSTRY', value: 'Kids Entertainment / Education' },
        { label: 'REGION', value: 'Poland' },
        { label: 'WEBSITE', value: <Link className="text-white" href="http://domuzeum.pl" target="_blank">http://domuzeum.pl</Link> },
      ],
    },
    dealing: {
      image: '/case-study/healthcare/dealing-with-something-similar.png',
      imageAlt: 'Creative team discussing a similar project',
      title: "An Unforgiving Audience and an Inverted Production Pipeline",
      description: "Kids' media forgives nothing. Color, pacing, and character design have to stimulate without overstimulating; content has to clear parental scrutiny, and unlike a narrated explainer, a music video inverts the whole pipeline: the song is fixed law, and every frame has to serve it. Lip sync, dance cycles, and scene rhythm all needed mapping to the track before a single frame of animation began.",
      cta: { text: "Let's Talk", href: '#' },
    },
    productExplainer: {
      title: 'A Beat-Mapped Story Told Through Rounded, Musical Characters',
      description: "We broke the song into a beat map, tempo, phrase structure, chorus returns, and energy peaks, and used it as the skeleton of the storyboard, so scenes are built as musical units, not narrative ones. Character design leaned into a rounded, high-contrast, squash-and-stretch style that reads instantly on a phone screen and makes movement itself feel musical. Dance cycles locked to downbeats, lip sync was hand-checked against the vocal track, and sound design layered in small rewarding details for repeat viewers to discover.",
      ctas: [{ text: "Let's Talk", href: '#' }, { text: 'Call Now', href: '#', variant: 'outline' }],
      thumbnail: 'https://img.youtube.com/vi/wKoZ-JiEsug/maxresdefault.jpg',
      thumbnailAlt: 'Product explainer video thumbnail',
      videoUrl: 'https://www.youtube.com/embed/wKoZ-JiEsug',
      videoTitle: 'Product explainer video',
    },
    closing: {
      title: 'The Results',
      description: "The video did what children's content is supposed to do and rarely manages: it got replayed, and it earned trust from the adults who share it.",
      items: ["87% audience retention across the video's full runtime", "4,000+ subscriber growth on the channel following release", "Strong parent-driven sharing that extended reach past algorithmic recommendations"],
      ctas: [{ text: "Let's Talk", href: '#' }, { text: 'Call Now', href: '#', variant: 'outline' }],
      thumbnail: '/case-study/healthcare/cluttered-website-weak-brand-identity.png',
      thumbnailAlt: 'Website redesign video thumbnail',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
  },
];

export const getCaseStudy = (slug) => caseStudies.find((caseStudy) => caseStudy.slug === slug);
