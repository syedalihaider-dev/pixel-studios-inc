"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Higher Audience Retention',
    description: "Content edited to hold attention at specific drop-off points outperforms unoptimized footage on every platform metric: watch time, completion rate, and algorithmic distribution. The edit is where retention is built.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Better Brand Storytelling',
    description: "The edit is where the story is constructed. A professional video editing team assembles raw material into a narrative sequence that carries the brand message from the hook to the call to action without losing the viewer at the transitions.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Increased Engagement',
    description: "Well-edited video generates higher engagement across every platform because it respects the viewer's time. Tight cuts, clean audio, and purposeful graphic integration produce content audiences finish watching and choose to interact with.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Improved Conversion Rates',
    description: "Video edited with a conversion objective in mind performs measurably better on landing pages and in paid campaigns. Pacing, graphic placement, and call-to-action timing all influence whether a viewer acts or exits.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Consistent Brand Presentation',
    description: "Professional video editing services apply consistent color grading, audio treatment, and graphic standards across every piece of content a brand publishes, building recognition and signaling production investment at every audience touchpoint.",
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
          <p className="subtitle">WHAT MAKES US</p>
          <h2 className={styles.mainHeading}>Benefits of Professional <span>Video Editing</span></h2>
          <p className={styles.headerDesc}>
            What professional video editing services produce for a brand's content performance that template or amateur editing cannot replicate.
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