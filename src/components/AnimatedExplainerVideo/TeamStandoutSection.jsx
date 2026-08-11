"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: '2D Explainer Animation',
    description: "The most widely used format in animated explainer video production. Clean character animation, flat design storytelling, and illustrated explainers that communicate clearly across every screen size and platform.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Motion Graphics Explainer Videos',
    description: "Text-driven, data-driven, and brand-system-driven animated content for brands that need visual consistency across a content library. Kinetic typography, animated infographics, and branded motion design.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Whiteboard Explainer Videos',
    description: "The illustrated hand-drawn format strips visual distraction and focuses the viewer entirely on the concept. Still one of the highest-completion-rate formats available for training and educational explainer content.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Character Animation Videos',
    description: "Expressive character-driven animated explainer videos for consumer brands, B2C campaigns, and educational content where the emotional connection between the character and viewer strengthens the message.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Infographic Animation',
    description: "Data and statistics are animated into content that people finish watching. Used in investor communications, annual reports, social media campaigns, and educational series where numbers need to be compelling, not just accurate.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Kinetic Typography Videos',
    description: "Text-led animated video services where the words themselves carry the motion and emphasis. Highly effective for quote-driven content, brand statement videos, and short-form social media animation.",
    icon: '/icons/experienced.png'
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
          <p className="subtitle">TYPES OF</p>
          <h2 className={styles.mainHeading}><span>Animated Explainer Video</span> Styles We Offer</h2>
          <p className={styles.headerDesc}>
            The right animation style is determined by the audience, the content, and the distribution context. Here is every style our animated explainer video production team works in.
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
                <iframe loading="lazy"
                  src="https://player.vimeo.com/video/1064477095?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
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