"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Startups and Emerging Brands',
    description: "First-impression logo animation that gives a new brand the visual credibility of an established one before the track record exists to do it independently.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'SaaS and Technology Companies',
    description: "Clean, professional 2D logo animation and after effects logo animation for SaaS brands producing product videos, onboarding content, and marketing campaigns at scale.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'E-Commerce Businesses',
    description: "Animated logo services for e-commerce brands producing high volumes of product and social media video content. Logo animation that builds recognition across a content calendar.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Corporate Brands',
    description: "Enterprise-grade logo animation for corporate brands needing a consistent animated identity across global communications and branded content at scale.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Media and Entertainment',
    description: "Cinematic logo reveals and broadcast-spec logo animation for media companies and entertainment brands whose audience recognizes production quality immediately.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Agencies and Marketing Teams',
    description: "Logo animation services for creative agencies producing branded video content for multiple clients. White-label production available on qualifying projects.",
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
          <h2 className={styles.mainHeading}><span>Logo Animation</span> Solutions for Every Business</h2>
          <p className={styles.headerDesc}>
            A startup and an enterprise brand have different logo animation needs. Here is how our logo animation services are applied across every business type.
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
                  src="https://player.vimeo.com/video/1201854809?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
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