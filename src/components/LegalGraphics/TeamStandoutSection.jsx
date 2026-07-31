"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: "Explain Complex Events Clearly",
    description:
      "A 30-second accident reconstruction animation communicates spatial relationships, vehicle speeds, and event timing with a precision that twenty minutes of expert testimony cannot match in a juror's mental model.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Strengthen Expert Testimony",
    description:
      "The expert explains the analysis. The animation shows what it looks like in the specific facts of the case. How do legal animations support expert witnesses? By providing the visual reference the expert can speak to directly rather than describing abstractly.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Improve Jury Understanding",
    description:
      "Jurors evaluate cases on what they understand. Legal animation increases the depth of understanding, which improves the quality of the verdict.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Visualize Technical Evidence",
    description:
      "Engineering analysis, biomechanical opinion, and medical testimony exist in precise but abstract forms. Animation makes the abstraction concrete at the level of visual understanding.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Present Timelines and Sequences Accurately",
    description:
      "Trial presentation graphics allow attorneys to present precise event timelines with correct spatial and temporal relationships that verbal testimony approximates.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Increase Engagement During Trial Presentations",
    description:
      "Jurors pay attention to animation. The visual format sustains engagement through complex technical testimony that verbal description alone cannot hold.",
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
          <p className="subtitle">WHY USE</p>

          <h2 className={styles.mainHeading}>
            Why Do Attorneys Use <span>Legal Animation in Court?</span>
          </h2>

          <p className={styles.headerDesc}>
            Legal animation transforms complex evidence into clear visual narratives that judges and juries can understand. It strengthens courtroom presentations by making technical, medical, and engineering concepts easier to follow while preserving factual accuracy.
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
                  src="https://player.vimeo.com/video/1065200259?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
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