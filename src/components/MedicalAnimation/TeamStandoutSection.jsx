"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Medical and Scientific Expertise',
    description: "Our studio for medical animation works with scientific advisors and your internal medical teams rather than relying on animators interpreting clinical content alone.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Accurate Healthcare Visualizations',
    description: "Every medical animation is reviewed against primary scientific literature and client-provided clinical data before final production.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Custom-Tailored Animation Solutions',
    description: "Every 3D medical animation is built from your specific molecule, device, or procedure rather than a modified generic model.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Regulatory-Conscious Production',
    description: "Our production process is structured to produce content that meets the evidentiary and accuracy standards of regulatory communication and promotional review.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Dedicated Project Management',
    description: "One project manager coordinates between your medical, regulatory, and marketing teams throughout every medical animation production.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Reliable Delivery Timelines',
    description: "Documented production schedules built around your medical review cycles so milestones align with internal approval timelines.",
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
          <h2 className={styles.mainHeading}>Why Healthcare Brands Trust Our Medical <span>Animation</span> Company?</h2>
          <p className={styles.headerDesc}>
            Most medical animation studios deliver a visual asset. We deliver clinical clarity. Our production process integrates rigorous scientific review cycles and collaborative oversight to ensure every frame meets the highest standards of scientific accuracy and regulatory compliance.
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
                  src="https://player.vimeo.com/video/1201854908?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
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