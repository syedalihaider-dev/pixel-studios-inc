"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: "Factors Affecting Project Cost",
    description:
      "Reconstruction complexity, number of expert review cycles, animation length, and production timeline.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Complexity of the Case",
    description:
      "A single-vehicle accident reconstruction costs less than a multi-party commercial vehicle collision with conflicting expert opinions.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Level of Detail Required",
    description:
      "A demonstrative showing general event sequence costs less than forensic animation with frame-accurate vehicle dynamics and sight line analysis precisely matched to engineering survey data.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Animation Length",
    description:
      "A 90-second reconstruction costs less than a five-minute medical malpractice animation covering surgical procedure, injury mechanism, and long-term consequence.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Expert Witness Collaboration",
    description:
      "Multi-expert review cycles with revision requirements at each review add to the production timeline and cost.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Delivery Timeline",
    description:
      "Standard production runs four to eight weeks. Expedited production for cases approaching trial is available.",
    icon: "/icons/experienced.png"
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
          <p className="subtitle">PRICING</p>

          <h2 className={styles.mainHeading}>
            Cost of <span>Legal Graphics Animation Services</span>
          </h2>

          <p className={styles.headerDesc}>
            Every legal graphics and animation project is quoted based on the evidence,
            complexity, and production requirements of the case. The following factors
            have the greatest impact on project scope, timeline, and overall cost.
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