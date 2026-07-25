"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Industrial and Engineering Expertise',
    description: "Our team includes artists experienced in reading CAD models and engineering drawings, not just generalist animators applying motion after the fact without technical context.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Accurate Technical Visualization',
    description: "Every industrial animation is checked against the source engineering data, whether that originates from SolidWorks, AutoCAD, or Autodesk Inventor files.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Custom Animation Solutions',
    description: "Every project starts from your specific equipment, process, and audience rather than a generic industrial animation template retrofitted to fit.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'High-End Visual Quality',
    description: "Broadcast-quality rendering and lighting are applied to every industrial animation regardless of the technical complexity underneath the finished surface.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Dedicated Project Management',
    description: "One project manager coordinates between your engineering teams and our production team throughout the entire project lifecycle.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Reliable Delivery Timelines',
    description: "Documented production schedules keep technically complex industrial animation projects on track without sacrificing accuracy for speed at the final stage.",
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
          <p className="subtitle">HOW WE WORK</p>
          <h2 className={styles.mainHeading}>Why Businesses Choose Our Industrial <span>Animation</span> Company?</h2>
          <p className={styles.headerDesc}>
            We combine engineering literacy with high-end visualization tools to create industrial animations that communicate clearly, validate technically, and engage audiences.
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