"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ServicesSection.module.css';
import CTAButton from '../Common/CTAButton';

const sliderItems = [
  {
    id: 1,
    title: "2D Animated Explainer Videos",
    description: "How long does it take your sales team to explain what your product does in a first call? A well-built 2D explainer video animation solves that permanently. We write scripts around the viewer's decision-making process, not your product feature list. Our animated explainer videos hold attention from the first frame to the call to action because every visual beat was designed with that goal in mind. Clients report improved landing page conversion rates and faster sales cycles after a custom 2D animated video goes live.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "2D Whiteboard Animations",
    description: "Whiteboard animation has outlasted every video marketing trend for one reason: clarity never goes out of style. The format removes visual noise and puts the viewer's full attention on the concept being explained. Our whiteboard animation productions combine professional voiceover, clean illustration, and carefully paced narration built for training, compliance communication, and sales enablement content that has to work without a facilitator present.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 3,
    title: "2D Logo Animations",
    description: "A static logo on a video intro signals that the production was not quite finished. An animated logo intro signals the opposite and builds brand recall across every video your company publishes. We produce 2D logo animations in multiple output formats for video intros, website headers, presentation slides, and digital advertising, from short stings for social media to longer branded sequences for company films.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 4,
    title: "2D Cel Animation",
    description: "Frame-by-frame character movement, expressive gesture, and a handcrafted quality that no fully digital style can replicate. Our cel animation team works across visual styles from clean commercial-grade character animation to more art-forward approaches for brands whose identity demands something genuinely distinct from the polished digital aesthetic dominating the category.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 5,
    title: "2D Social Media Animations",
    description: "Social media is a different communication problem from every other format. The first frame must earn the second. Our social media animation team builds short-form content from the ground up for TikTok, Instagram Reels, LinkedIn, and YouTube Shorts: vertical formats, on-screen text that works without audio, and visual hooks built to interrupt scroll behavior in the opening frame.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 6,
    title: "Promotional 2D Animated Videos",
    description: "A promotional video that produces no response is an expensive placeholder. Every promotional 2D animated video we produce has a conversion objective embedded in the creative from the first script draft. Urgency that feels earned, specific value communication, and a call to action that follows naturally from the argument the video just made.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  },
  {
    id: 7,
    title: "Animated Explainer Videos for Complex Products",
    description: "Some products are genuinely hard to explain, and the difficulty is not a marketing problem. Animation solves it better than any other format. We have built animated explainer videos for SaaS platforms, medical devices, financial instruments, and industrial equipment: making the invisible visible and the complex understandable without talking down to the viewer or skipping the technical substance that makes the product credible.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" // You can replace this with a different Vimeo ID
  }
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ServicesSection = () => {
  const [page, setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = page[0];
  const direction = page[1];

  const paginate = (newDirection) => {
    let nextIndex = activeIndex + newDirection;
    if (nextIndex < 0) nextIndex = sliderItems.length - 1;
    if (nextIndex >= sliderItems.length) nextIndex = 0;
    setPage([nextIndex, newDirection]);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered]);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const videoVariants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 }
  };

  return (
    <section className={styles.servicesSection}>
      <div className="container">

        <motion.div
          className={styles.headingWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="subtitle">OUR SERVICES</h6>
          <h2 className={styles.title}>
            WHAT WE ARE OFFERING IN 2D ANIMATION SERVICES?
          </h2>
          <p className={styles.description}>
            Our 2D animation company covers every production format a brand or marketing team needs. All work is produced entirely in-house by our dedicated animators, scriptwriters, character designers, and sound specialists.
          </p>
        </motion.div>

        <div className={`row ${styles.contentRow}`}>
          <div className="col-lg-6 col-md-12">
            <div
              className={styles.sliderContainer}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={styles.paginationWrapper}>
                {sliderItems.map((_, idx) => (
                  <div
                    key={idx}
                    className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                    onClick={() => setPage([idx, idx > activeIndex ? 1 : -1])}
                  />
                ))}
              </div>

              <div className={styles.slideContentWrapper}>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.y, velocity.y);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className={styles.slideContent}
                  >
                    <h3 className={styles.slideTitle}>{sliderItems[activeIndex].title}</h3>
                    <p className={`${styles.slideDesc} scroll_block`}>{sliderItems[activeIndex].description}</p>

                    <div className={styles.btnWrapper}>
                      <CTAButton text="Learn More" href="#" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className={styles.videoWrapper}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={videoVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6 }}
                  className={styles.videoInner}
                >

                  <iframe
                    src={sliderItems[activeIndex].videoSrc}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className={styles.videoIframe}
                  ></iframe>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
