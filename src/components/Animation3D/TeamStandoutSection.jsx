"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Visualize Products Before Production',
    description: "Show investors and buyers exactly how a product looks and works before manufacturing begins. 3D product visualization removes risk from early-stage sales conversations.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Simplify Complex Concepts',
    description: "Scientific visualization, technical animation, and machinery visualization make the invisible visible. If text cannot explain it, 3D animation usually can.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Improve Marketing Performance',
    description: "3D marketing videos and CGI animation services consistently outperform static creative in click-through rate, engagement, and conversion across paid and organic channels.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Strengthen Sales Presentations',
    description: "Platform demonstrations built in 3D give sales teams a shared visual reference that reduces ambiguity and objection volume in technical conversations.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Support Technical Communication',
    description: "Engineering teams and technical buyers respond to accuracy. Our 3D animation production services produce technically precise content that survives expert review.",
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
          <h2 className={styles.mainHeading}>What <span>3D Animation</span> Can Help You Achieve?</h2>
          <p className={styles.headerDesc}>
            The right 3D animation services for businesses close the gap between what your audience understands and what they need to understand to act.
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
                  src="https://player.vimeo.com/video/1065180132?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
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