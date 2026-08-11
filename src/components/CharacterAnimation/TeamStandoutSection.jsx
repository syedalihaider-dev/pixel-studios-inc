"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: "Idle Animations",
    description:
      "Subtle ambient motion communicating a character is present and alive between active player inputs.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Walk Cycles",
    description:
      "Locomotion with weight, personality, and the gait specific to the character's physical build and emotional state.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Run Cycles",
    description:
      "High-energy movement with body lean and secondary motion that communicates speed and the urgency of the character's purpose.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Jump Animations",
    description:
      "Anticipation, airborne, and landing with squash and stretch calibrated to the character's physical weight.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Combat Animations",
    description:
      "Attack, defense, and impact animation with anticipation and recovery phases that communicate consequence and power.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Interaction Animations",
    description:
      "Character-environment interactions that feel physically connected to the geometry rather than approximated near it.",
    icon: "/icons/experienced.png"
  },
  {
    id: 7,
    title: "Performance Animations",
    description:
      "Expressive character performance for narrative, emotional, and comedic moments.",
    icon: "/icons/experienced.png"
  },
  {
    id: 8,
    title: "Facial Expressions",
    description:
      "Emotional state communication through facial motion, with the subtlety that makes an expression feel genuine.",
    icon: "/icons/experienced.png"
  },
  {
    id: 9,
    title: "Dialogue Animation",
    description:
      "Full-body character performance synchronized with recorded dialogue. The body communicates the character's emotional state. The mouth communicates the words.",
    icon: "/icons/experienced.png"
  },
  {
    id: 10,
    title: "Emotes and Reactions",
    description:
      "Short expressive animations for social contexts, games with player emotes, and characters that need to respond to events without dialogue.",
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
          <p className="subtitle">CHARACTER ANIMATION</p>

          <h2 className={styles.mainHeading}>
            Character Animation <span>Types We Create</span>
          </h2>

          <p className={styles.headerDesc}>
            Character animation covers every movement a character performs, from subtle idle poses to full cinematic performances. Each animation type serves a specific gameplay, storytelling, or interactive purpose.
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
                  src="https://player.vimeo.com/video/1201855044?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
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