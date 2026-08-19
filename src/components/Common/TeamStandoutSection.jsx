"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const TeamStandoutSection = ({ subtitle, title, description, features, videoSrc }) => {
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
          <p className="subtitle">{subtitle}</p>
          <h2 className={styles.mainHeading}>{title}</h2>
          {description && (
            <p className={styles.headerDesc}>
              {description}
            </p>
          )}
        </motion.div>

        <div className="row">
          <div className="col-lg-6">
            <div className={styles.featuresListContainer} ref={containerRef}>
              <div className={styles.progressTrack}>
                <motion.div className={styles.progressFill} style={{ height: lineHeight }} />
              </div>
              <div className={styles.featuresList}>
                {features?.map((feature, index) => (
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
                        {feature.icon && (
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
                        )}
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
                {videoSrc ? (
                  <iframe loading="lazy"
                    src={videoSrc}
                    title="Pixel Studio Video"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <iframe loading="lazy"
                    src="https://player.vimeo.com/video/1201856415?dnt=1&autoplay=1&loop=1&muted=1&background=1"
                    title="Pixel Studio Video"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStandoutSection;
