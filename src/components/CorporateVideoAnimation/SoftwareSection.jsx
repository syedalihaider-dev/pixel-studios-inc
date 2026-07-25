"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Trailer Length',
    description: "A 30-second teaser and a 2-minute full trailer require different amounts of script, asset production, and editing time. Most commercial trailers run 30 to 90 seconds.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Animation Complexity',
    description: "Trailers requiring custom 3D elements, character animation, or complex visual effects cost more than trailers built primarily from motion graphics and existing footage.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Motion Graphics Requirements',
    description: "Custom title sequence animation, kinetic typography, and branded motion graphics elements all add production scope beyond a straightforward edit.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Voiceover and Sound Design',
    description: "Professional voiceover casting, custom score composition or licensing, and full sound design all affect the final cost and the emotional impact of the trailer.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Production Timeline',
    description: "Standard trailer production runs two to four weeks. Rush timelines for launch-critical dates are available and priced honestly without absorbing the premium and delivering lower quality.",
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
          <h2 className={styles.mainHeading}>How Much Do <span>Trailer Animation</span> Services Cost?</h2>
          <p className={styles.headerDesc}>
            Trailer animation pricing is determined by five core variables.
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