"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: "Cinematic Reveal",
    description:
      "The first public appearance of a game. Usually animation-led or heavily VFX-supported. The job is to create a world and an emotional stake in it before the viewer knows what the gameplay is.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Gameplay Highlight",
    description:
      "Gameplay footage edited to the best session of the best player who ever played it, with sound design and score that make the mechanics feel as satisfying as the best moment of play.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Announcement Teaser",
    description:
      "15 to 30 seconds. The only job is to create a question that the viewer needs the answer to. Teasers that over-explain have already failed.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Story and Lore Trailers",
    description:
      "Narrative-focused trailers for games with a story the audience needs to care about before they evaluate the gameplay. Character, world, and stakes delivered without spoiling the resolution.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Launch Trailers",
    description:
      "Release-day content for the audience that has been watching since the announcement. The launch trailer confirms the promise the announcement made. It does not need to be introduced. It needs to close.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Mobile Game Trailers",
    description:
      "User acquisition-optimized video for app store pages, Meta campaigns, TikTok, and YouTube Shorts. Hook in the first two seconds. Conversion objective visible by the second five. Everything else is retention.",
    icon: "/icons/experienced.png"
  }
];

const TeamStandoutSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.standoutSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="subtitle">TRAILER TYPES</p>

          <h2 className={styles.mainHeading}>
            Use Cases and <span>Trailer Types We Cover</span>
          </h2>

          <p className={styles.headerDesc}>
            The trailer type is determined by the moment in the game's commercial lifecycle and the specific emotional job the trailer needs to do.
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-6">
            <div className={styles.featuresListContainer} ref={containerRef}>
              <div className={styles.progressTrack}>
                <motion.div
                  className={styles.progressFill}
                  style={{ height: lineHeight }}
                />
              </div>

              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                    viewport={{
                      once: false,
                      margin: "-20% 0px -20% 0px"
                    }}
                  >
                    <div className={styles.featureIcon}>
                      <div className={styles.featureIconImageWrapper}>
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={64}
                          height={64}
                          style={{ objectFit: "contain" }}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        {!feature.icon && (
                          <div
                            style={{
                              width: 64,
                              height: 64,
                              backgroundColor: "rgba(0,0,0,0.1)",
                              borderRadius: "8px"
                            }}
                          />
                        )}
                      </div>

                      <h3 className={styles.featureTitle}>
                        {feature.title}
                      </h3>
                    </div>

                    <p className={styles.featureDesc}>
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.stickyColumn}>
              <motion.div
                className={styles.videoWrapper}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <iframe loading="lazy"
                  src="https://player.vimeo.com/video/1200540905?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
                  title="Animated Explainer Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStandoutSection;