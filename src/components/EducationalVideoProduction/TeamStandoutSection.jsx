"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: "Employee Onboarding",
    description:
      "Video onboarding content that delivers the same quality of first-week experience to every new hire, regardless of their manager's communication style or availability.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Workforce Training",
    description:
      "Ongoing workforce training content for skills development, role transitions, and the continuous learning that organizations competing in fast-moving markets actually require.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Compliance and Safety Training",
    description:
      "Compliance and safety training video production that regulators accept and employees actually watch. The two requirements are not automatically in conflict.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Customer Education",
    description:
      "Customer education video content that reduces churn by ensuring customers understand the product deeply enough to get the value they paid for.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Product Knowledge Training",
    description:
      "Product knowledge training for sales teams, customer service teams, and channel partners who represent the product without having built it.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Academic Learning",
    description:
      "Curriculum-aligned academic video content that supplements instruction, supports learners who missed a concept in class, and provides the alternative explanation that a different learning style requires.",
    icon: "/icons/experienced.png"
  },
  {
    id: 7,
    title: "Online Course Development",
    description:
      "Online course video production for content creators, consultants, and educators building digital course libraries on platforms including Teachable, Thinkific, and proprietary LMS environments.",
    icon: "/icons/experienced.png"
  },
  {
    id: 8,
    title: "Internal Knowledge Sharing",
    description:
      "Internal knowledge transfer video content that captures institutional knowledge from subject matter experts and makes it accessible across the organization without requiring the expert to be present.",
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
          <p className="subtitle">HOW ORGANIZATIONS USE</p>

          <h2 className={styles.mainHeading}>
            How Organizations Use <span>Educational Video Production Services?</span>
          </h2>

          <p className={styles.headerDesc}>
            Educational video production supports onboarding, workforce training, compliance, customer education, academic learning, and knowledge sharing by delivering engaging content tailored to every learning objective.
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
                          ></div>
                        )}
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