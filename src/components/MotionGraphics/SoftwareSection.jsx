"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Adobe After Effects',
    description: "Our primary tool for motion graphics animation services: compositing, kinetic typography, 2D motion design, and visual effects across all productions.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Adobe Illustrator',
    description: "Vector asset creation and brand system development for motion graphics that require scalable, brand-accurate visual elements.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Adobe Premiere Pro',
    description: "Final assembly, color grading, audio mixing, and platform-specific export for productions with live-action elements or multi-format delivery requirements.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Cinema 4D',
    description: "3D motion graphics services, dimensional product visualization, and 3D typography for productions that require depth beyond 2D composition.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Blender',
    description: "Open-pipeline 3D production for stylized motion graphics, architectural elements, and complex animation sequences where flexibility matters.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Figma and UI Motion Design Tools',
    description: "Interface-accurate UI animation produced from the actual design files, so every on-screen element is reproduced at pixel precision.",
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
          <p className="subtitle">Technology & Tools</p>
          <h2 className={styles.mainHeading}><span>Motion Graphics</span> Software and Technologies</h2>
          <p className={styles.headerDesc}>
            The tools, software, and technical capabilities a motion design team uses directly determine the quality of the final product. These are the technologies that enable high-performance, studio-level motion graphics production.
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
                  src="https://player.vimeo.com/video/1201854810?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
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