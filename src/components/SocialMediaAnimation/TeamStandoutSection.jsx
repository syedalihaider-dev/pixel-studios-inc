"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: 'Motion Graphics Animation',
    description: "Social media motion graphics for branded content, data visualization, and campaign announcements. Clean, brand-consistent motion design that performs across platforms without per-platform adaptation.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: '2D Animated Videos',
    description: "Character-driven and illustrated 2D animated social media content for brand storytelling, product promotion, and audience education. The most versatile format in social media video animation.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Product Promotion Animations',
    description: "Animated product promotion videos that showcase features, benefits, and offers in the format and duration each platform performs best with.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Brand Awareness Videos',
    description: "Brand animation services that build recognition and visual consistency across a brand's social presence. Animated brand content where the identity is recognizable before the logo appears.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Event Promotion Videos',
    description: "Animated social media videos for event announcements, countdowns, and post-event recaps built to generate registrations and attendance.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Explainer Animations for Social Media',
    description: "Short-form animated explainer content adapted for 30 to 60-second social media distribution. The explainer video logic applied to the social media format constraint.",
    icon: '/icons/flexible.png'
  },
  {
    id: 7,
    title: 'Animated Infographics',
    description: "Data and statistics animated into shareable social content. Animated infographics outperform static data graphics in shares and saves because motion holds attention long enough for the information to register.",
    icon: '/icons/flexible.png'
  },
  {
    id: 8,
    title: 'Kinetic Typography Videos',
    description: "Text-led animated social content where the words carry the motion and emphasis. Effective for quote content, brand statements, and animations that communicate without a voiceover.",
    icon: '/icons/flexible.png'
  },
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
          <p className="subtitle">Social Media Animation Services</p>
          <h2 className={styles.mainHeading}>Types of <span>Social Media Animations</span> We Create</h2>
          <p className={styles.headerDesc}>
            Our social media animation production covers every animated content type a brand needs for a complete social content calendar.
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