"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Clear Visual Storytelling',
    description: "Amateur whiteboard animation looks like it was produced in a web browser. Professional whiteboard animation tells a visual story — where the sequence of drawings, the pacing of the voiceover, and the logical structure of the script work together as a unified communication system. That integration is the difference between content that informs and content that converts.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Higher Viewer Retention',
    description: "Professionally produced whiteboard animation holds more viewers for longer because every element of the production is optimized for sustained attention — script pacing, visual complexity calibration, voiceover energy, and transition rhythm. Viewer retention is not a metric that improves by accident.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Cost-Effective Video Production',
    description: "Whiteboard animation delivers a higher value-per-dollar than most other animated formats because it does not require complex character rigs, environment design, or 3D rendering. The production investment goes into the two things that actually drive results: a well-built script and professional illustration. That is where we focus.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Stronger Brand Communication',
    description: "A whiteboard animation video with a consistent visual identity — custom illustrations, brand color accents, a voiceover that matches your brand tone — does not just communicate information. It communicates professionalism. Every video we produce is a brand asset, not just a content deliverable.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Better Learning Outcomes',
    description: "Training programs that use whiteboard animation consistently report higher assessment scores, higher completion rates, and lower re-training frequency than programs built on traditional presentation formats. We build our educational whiteboard animations around the learning science, not around what is easiest to produce.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Create Engaging Customer Experiences',
    description: "Real estate visualization and consumer product showcases give buyers a richer product experience than static pages allow, directly feeding purchase confidence.",
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
          <h2 className={styles.mainHeading}>Benefits of Professional <span>Whiteboard Animation</span></h2>
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