"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
  {
    name: "Learning Content Complexity",
    intro:
      "A single-concept microlearning video costs less than a multi-module compliance training series. The instructional design investment scales with the complexity of the learning objective.",
    points: [
      "Instructional design requirements increase as learning objectives become more complex.",
      "Multi-module training programs require greater planning and production effort.",
      "Production scope is determined by educational outcomes rather than video length alone."
    ]
  },
  {
    name: "Video Length",
    intro:
      "Longer training videos require more scripting, more animation production, and more voiceover time. Most effective microlearning videos run three to five minutes. Module-level e-learning videos run eight to fifteen minutes.",
    points: [
      "Short microlearning videos typically run between three and five minutes.",
      "E-learning modules generally range from eight to fifteen minutes.",
      "Longer videos require additional scripting, editing, narration, and production resources."
    ]
  },
  {
    name: "Animation and Visual Style",
    intro:
      "Animated educational videos cost more than screen recording tutorials. The appropriate format is determined by the learning objective, not the production budget.",
    points: [
      "Animation requires additional design and production time.",
      "Screen recording tutorials provide a more cost-effective option for software training.",
      "Visual style should always support the intended learning outcome."
    ]
  },
  {
    name: "Instructional Design Requirements",
    intro:
      "Projects requiring learning needs analysis, curriculum design, and assessment development alongside video production cost more than projects where the learning structure already exists.",
    points: [
      "Learning needs analysis adds strategic planning to the project.",
      "Curriculum and assessment development increase instructional scope.",
      "Existing course structures reduce overall production complexity."
    ]
  },
  {
    name: "Voiceover and Localization",
    intro:
      "Professional voiceover, music, and translation for multilingual training content are standard service components priced transparently at the quote stage.",
    points: [
      "Professional narration improves learning effectiveness.",
      "Localization supports multilingual learners.",
      "Voiceover, music, and translation costs are included transparently in project quotes."
    ]
  },
  {
    name: "Interactive Learning Features",
    intro:
      "SCORM-compatible branching scenarios and decision-point video add production scope beyond standard linear video delivery.",
    points: [
      "Interactive scenarios increase learner engagement.",
      "SCORM compatibility supports LMS integration.",
      "Branching content requires additional scripting and development."
    ]
  },
  {
    name: "Production Timeline",
    intro:
      "Standard educational video productions are complete in four to six weeks. Rush delivery is available for training programs with fixed launch dates.",
    points: [
      "Typical production schedules range from four to six weeks.",
      "Rush delivery is available for urgent training launches.",
      "Timelines vary depending on project complexity and review cycles."
    ]
  }
];

export default function WonderingSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeData = industriesData[activeIndex];

  return (
    <section className={styles.wonderingSection}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="row"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-12 text-center">
            <p className="subtitle">PRICING</p>

            <h2 className={styles.mainTitle}>
              Educational Video Production Pricing and Cost Factors
            </h2>

            <p className={styles.description}>
              Educational video production cost is determined by content complexity, production format, and delivery requirements.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="col-lg-4 col-md-12">
            <div className={styles.industryList}>
              {industriesData.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.industryItem} ${index === activeIndex ? styles.active : ""
                    }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{item.name}</span>
                  <div className={styles.arrowIcon}>
                    <Image
                      src="/icons/arrow.png"
                      alt="Arrow"
                      width={38}
                      height={30}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <CTAButton text="Let's Talk" type="link" href="/contact-us" />
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className={styles.rightContent}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p className={styles.contentIntro}>{activeData.intro}</p>

                  <h3 className={styles.contentTitle}>Key Cost Factors</h3>

                  <div className={styles.bulletList}>
                    {activeData.points.map((point, idx) => (
                      <div key={idx} className={styles.bulletItem}>
                        <div className={styles.tickIcon}>
                          <Image
                            src="/icons/tick.png"
                            alt="Tick"
                            width={29}
                            height={29}
                          />
                        </div>
                        <p className={styles.bulletText}>{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}