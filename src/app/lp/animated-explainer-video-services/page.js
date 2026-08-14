import AnimatedExplainerVideosLPClient from "./AnimatedExplainerVideosLPClient";

export const metadata = {
  title: "Animated Explainer Video Services for Businesses | Pixel Studios Inc.",
  description:
    "Pixel Studios creates custom animated explainer videos that simplify complex ideas, engage audiences, and help businesses drive more conversions. Get a quote.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <>
      <link
        id="lp-m-style"
        rel="stylesheet"
        href="/animated-explainer-videos/assets/css/m-style.css"
      />
      <link
        id="lp-style"
        rel="stylesheet"
        href="/animated-explainer-videos/assets/css/style.css"
      />
      <link
        id="lp-additional"
        rel="stylesheet"
        href="/animated-explainer-videos/assets/css/lp-additional.css"
      />
      <AnimatedExplainerVideosLPClient />
    </>
  );
}
