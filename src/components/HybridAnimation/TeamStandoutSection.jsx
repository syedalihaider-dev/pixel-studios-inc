"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: "What Is Cel Animation?",
    description:
      "Cel animation is the technique of drawing each frame individually, traditionally on transparent celluloid sheets photographed in sequence. The term now applies broadly to any frame-by-frame drawn animation, traditional or digital, that produces the specific visual character of hand-drawn motion.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "What Is Hybrid Animation?",
    description:
      "Hybrid animation combines two or more animation techniques, most commonly 2D and 3D, within a single production. The combination is used deliberately: each technique applied to the elements it renders most effectively.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Traditional vs Digital Cel Animation",
    description:
      "Traditional cel animation is drawn and photographed on physical media. Digital cel animation replicates the same frame-by-frame drawing process in software. The visual result can be nearly indistinguishable. The production workflow and cost structure are different.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Combining 2D and 3D Animation Techniques",
    description:
      "Successful hybrid production requires a consistent visual language between the 2D and 3D elements so the combination reads as an intentional style rather than a visible technical seam.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Choosing the Right Animation Style for Your Project",
    description:
      "The technique is determined by the visual concept, the budget, and the production timeline, not by studio default. We recommend the approach that serves the specific creative brief.",
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
          <p className="subtitle">HYBRID & CEL ANIMATION</p>

          <h2 className={styles.mainHeading}>
            Understanding Hybrid and Cel Animation
          </h2>

          <p className={styles.headerDesc}>
            Hybrid and cel animation combine traditional artistic techniques with modern production workflows to create distinctive visual experiences. From hand-drawn frame-by-frame animation to carefully integrated 2D and 3D techniques, each approach is selected based on the creative direction, storytelling goals, and production requirements of the project.
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-6">
            <div className={styles.featuresListContainer} ref={containerRef}>
              <div className={styles.progressTrack}>
                <motion.div
                  className={styles.progressFill}
                  style={{ height: lineHeight }}
                />
              </div>

              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                    viewport={{
                      once: false,
                      margin: "-20% 0px -20% 0px"
                    }}
                  >
                    <div className={styles.featureIcon}>
                      <div className={styles.featureIconImageWrapper}>
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={64}
                          height={64}
                          style={{ objectFit: "contain" }}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        {!feature.icon && (
                          <div
                            style={{
                              width: 64,
                              height: 64,
                              backgroundColor: "rgba(0,0,0,0.1)",
                              borderRadius: "8px"
                            }}
                          />
                        )}
                      </div>

                      <h3 className={styles.featureTitle}>
                        {feature.title}
                      </h3>
                    </div>

                    <p className={styles.featureDesc}>
                      {feature.description}
                    </p>
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