"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Factors That Influence Cost',
    description: "Script complexity, visual style, number of characters, scene count, voiceover requirements, and production timeline all affect cost. We provide itemized quotes based on your actual brief, not a generic package rate.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Video Length',
    description: "A 30-second animated explainer video and a 90-second production are not the same investment. Longer videos require more script, more visual assets, more animation time, and more revision cycles. Most effective explainer videos run 60 to 90 seconds.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Animation Style',
    description: "2D explainer animation with simple character design costs less than fully rigged character animation or photorealistic 3D explainer production. The right style is the one the audience and the distribution context require.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Voiceover Requirements',
    description: "Professional voiceover from our talent roster is included in standard animated explainer video creation service packages. Custom casting, accents, and multilingual versions affect cost and are priced transparently.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Production Complexity',
    description: "Number of unique scene environments, illustration density, motion graphic complexity, and custom character library requirements all feed into the final cost. We itemize every production element so the quote is traceable.",
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
          <h2 className={styles.mainHeading}><span>Animated Explainer Video</span> Pricing</h2>
          <p className={styles.headerDesc}>
            The cost of animated explainer video production is driven by four core variables. Here is what each one means for your budget.
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