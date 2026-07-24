"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Simplify Complex Messages',
    description: "Animation sequences, timing, and visual emphasis guide the viewer through a complex idea in the order it needs to land, without requiring prior knowledge of the subject. Text cannot do that. Static images cannot do that. Motion graphics can.Amateur whiteboard animation looks like it was produced in a web browser. Professional whiteboard animation tells a visual story — where the sequence of drawings, the pacing of the voiceover, and the logical structure of the script work together as a unified communication system. That integration is the difference between content that informs and content that converts.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Increase Audience Engagement',
    description: "Animated content holds attention at significantly higher rates than static formats on every digital platform. That extra dwell time is the difference between a message received and one scrolled past without registering.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Improve Brand Recall',
    description: "Motion combined with audio creates memory encoding that text alone cannot produce. Consistent motion graphic design builds a visual identity that the audience recognizes across platforms without needing to see the logo first.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Boost Marketing Campaign Performance',
    description: "Motion graphics video production services consistently outperform static ad formats in click-through rate, engagement, and cost per acquisition. The performance differential compounds when the creative quality is high, and the strategy behind it is sound.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Drive Higher Conversion Rates',
    description: "Landing pages with a motion graphics explainer video convert at higher rates than static pages. Motion answers the objections a prospect has before they go looking elsewhere, which keeps them moving toward the conversion point.",
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
          <p className="subtitle">WHAT MAKES</p>
          <h2 className={styles.mainHeading}>Why Businesses Invest in <span>Motion Graphics?</span></h2>
          <p className={styles.headerDesc}>
            The gap between a whiteboard animation video that gets watched and one that gets results comes down to production quality. These are the advantages that professional production delivers over template-based or in-house alternatives.
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
                <video
                  src="/videos/home.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
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