"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Experienced 3D Artists',
    description: "Our professional 3D artists have built assets across gaming, product, and architectural categories for years, with portfolios that demonstrate range rather than a single specialty.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Custom Modeling Solutions',
    description: "Every 3D modeling project starts from your brief and your technical requirements, never a template asset retrofitted to fit your specification.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Industry-Specific Expertise',
    description: "Our 3D modeling experts understand the technical standards specific to gaming, healthcare, and manufacturing clients alike, reducing the learning curve on every new brief.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Scalable Production Capacity',
    description: "From a single hero asset to a full enterprise 3D modeling services library, we scale our team to your project volume without compromising turnaround.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Fast Turnaround Times',
    description: "Most 3D modeling projects are completed in one to three weeks, depending on asset complexity and scope, with rush options available for tighter deadlines.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Transparent Communication',
    description: "A dedicated project manager and a documented production schedule keep every 3D modeling project on track with no surprises at delivery.",
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
          <h2 className={styles.mainHeading}>Why Choose Our Expert <span>3D Modeling</span> Company?</h2>
          <p className={styles.headerDesc}>
            The right 3D modeling company preserves your creative intent while solving technical challenges like file size, naming conventions, and engine-ready topology. From there the models are polished, validated, and packaged so your team can drop them straight into the pipeline without friction.
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