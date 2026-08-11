"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Product Marketing Campaigns',
    description: "3D marketing animation gives campaigns a visual asset that performs across every channel simultaneously, from paid social to email to the product page itself.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Product Launch Presentations',
    description: "Product animation for sales presentations gives launch teams a consistent, polished asset for every pitch instead of relying on a slide deck and a verbal description.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'eCommerce Product Showcases',
    description: "Product animation for eCommerce increases buyer confidence and reduces the ambiguity that drives returns, particularly for products with moving parts or assembly steps.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Trade Show and Exhibition Displays',
    description: "Product animation for trade shows gives booth visitors a compelling reason to stop and engage rather than walking past another static display.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Sales Presentations',
    description: "Product animation for sales teams replaces static decks with content that actually holds a prospect's attention through a full demo conversation.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Customer Education and Training',
    description: "Product training animation reduces support burden by answering common usage questions visually before a customer ever opens a support ticket.",
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
          <h2 className={styles.mainHeading}>How Businesses Leverage <span>3D Product Animation</span> Services?</h2>
          <p className={styles.headerDesc}>
            3D product animation is used across the entire product lifecycle — from early R&D concepts and marketing mockups to launch campaigns and post-sale support. Businesses that invest in 3D animation typically see faster comprehension, clearer communication, and stronger engagement than they achieve through static imagery or text-only specifications.
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
                  src="https://player.vimeo.com/video/1201624680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
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