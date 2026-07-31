"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Opening Title Animation',
    description: "Opening title animation that establishes tone before the content begins. Used for films, branded video series, YouTube channels, and corporate video content that needs a consistent opening identity.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Animated Title Sequences',
    description: "Full animated title sequences combining typography, motion graphics, and visual effects. Used for film openings, series intros, and branded content that needs a memorable, repeatable opening identity.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Motion Graphics Titles',
    description: "Motion graphics titles for corporate video, marketing content, and broadcast production. Clean, brand-consistent title treatments that integrate with the visual identity established elsewhere in the production.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Intro Animation Services',
    description: "Video intro animation for YouTube channels, podcasts, and branded content series. Short, high-impact intro animation services that establish brand recognition in the first three seconds of every video.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Outro Animation Services',
    description: "Outro animation services that close content with the same production quality as the opening. Calls to action, subscribe prompts, and brand sign-offs are integrated into a cohesive closing sequence.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Kinetic Typography Animation',
    description: "Text-led kinetic typography animation where words carry the motion and emphasis. Effective for quote-driven trailers, brand statement videos, and title sequences where the message is the visual.",
    icon: '/icons/experienced.png'
  },
  {
    id: 7,
    title: 'Broadcast Graphics and Film Titles',
    description: "Broadcast title animation and film title sequence design produced to broadcast delivery specifications. Frame rate, resolution, and color space requirements are handled to professional broadcast standards.",
    icon: '/icons/experienced.png'
  },
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
          <p className="subtitle">WHAT MAKES</p>
          <h2 className={styles.mainHeading}>Title Sequence Animation and <span>Motion Graphics Services</span></h2>
          <p className={styles.headerDesc}>
            A title sequence is the first thing an audience sees and the first signal of production quality they receive. Our title sequence animation services cover every format a brand, film, or broadcast production needs.
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-6">
            <div className={styles.featuresListContainer} ref={containerRef}>
              <div className={styles.progressTrack}>
                <motion.div className={styles.progressFill} style={{ height: lineHeight }} />
              </div>
              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                  >
                    <div className={styles.featureIcon}>
                      <div className={styles.featureIconImageWrapper}>
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={64}
                          height={64}
                          style={{ objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        {!feature.icon && <div style={{ width: 64, height: 64, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '8px' }}></div>}
                      </div>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                    </div>
                    <p className={styles.featureDesc}>{feature.description}</p>
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
                <iframe
                  src="https://player.vimeo.com/video/1200540933?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
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