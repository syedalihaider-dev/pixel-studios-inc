"use client";
import React, { useState } from 'react';
import styles from './WhyInvestSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CTAButton from '../Common/CTAButton';

const accordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Character Analysis and Planning",
    content:
      "Every successful animation begins with understanding the character before any movement is created. We establish physical proportions, personality traits, rig quality, animation style references, performance objectives, and all production requirements before the first pose is created. This planning stage ensures the animation reflects both the technical requirements of the project and the intended emotional performance of the character throughout every scene.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Storyboarding and Pose Development",
    content:
      "Complex animation sequences are visualized through storyboards and key pose exploration before full production begins. We define the major storytelling beats, camera relationships, and performance poses that communicate the character's intent. By approving these foundations early, we reduce unnecessary revisions later while ensuring every movement supports the narrative and visual direction established for the project.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Rigging Preparation",
    content:
      "Before production starts, every rig undergoes a detailed assessment to confirm it is suitable for animation. Controller functionality, deformation quality, facial systems, constraints, and technical limitations are carefully reviewed. Any issues are corrected before animation begins, preventing production delays and ensuring the rig performs consistently throughout every sequence.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Animation Blocking",
    content:
      "Blocking establishes the core creative performance of the animation. Primary poses, timing, spacing, and scene rhythm are built during this phase, allowing the team to focus on storytelling before refining movement. Every creative decision that defines the final performance is made here, with later production stages dedicated to enhancing and polishing those approved animation choices.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Refinement and Polish",
    content:
      "Once the blocking has been approved, we refine spline curves, improve timing, adjust spacing, and introduce secondary motion that gives the character believable weight and personality. Fine details such as overlapping action, follow-through, balance, and subtle body mechanics are carefully polished to transform technically correct animation into a convincing character performance.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Facial Animation and Lip Sync",
    content:
      "After body animation is finalized, facial performance and dialogue synchronization are added. Blend shape animation, eye movement, facial expressions, and phoneme-accurate lip sync are carefully crafted to match recorded dialogue while preserving emotional authenticity. Every facial movement is refined manually to achieve performances that feel expressive, natural, and believable.",
  },
  {
    id: 7,
    icon: "/animation.png",
    title: "Quality Assurance",
    content:
      "Every animation passes through a comprehensive internal quality review before delivery. Performance consistency, technical accuracy, timing, rig stability, visual continuity, and compliance with the approved creative brief are carefully evaluated. Any issues are resolved before client delivery to ensure the final animation meets both artistic and production-quality standards.",
  },
  {
    id: 8,
    icon: "/animation.png",
    title: "Final Delivery",
    content:
      "Completed animation files are delivered in every format agreed upon during project kickoff. Source files, production assets, and integration documentation are included where required, allowing developers, editors, or production teams to implement the animations efficiently while maintaining compatibility with the intended workflow and target platform.",
  }
];

const WhyInvestSection = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className={styles.workflowSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="subtitle">HOW WE WORK</p>

              <h2 className={styles.mainTitle}>
                Our Character Animation <br />Production Process
              </h2>

              <p className={styles.subText}>
                Every character animation project follows a structured production workflow that prioritizes planning, technical preparation, creative performance, and quality assurance. From character analysis and storyboard development to animation blocking, facial performance, refinement, and final delivery, each stage is designed to ensure the finished animation performs naturally, integrates seamlessly into production pipelines, and meets the visual quality standards established at the beginning of the project.
              </p>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className={styles.accordionList}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {accordionData.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.accordionItem} ${activeId === item.id ? styles.active : ''}`}
                >
                  <div
                    className={styles.accordionHeader}
                    onClick={() => setActiveId(item.id === activeId ? null : item.id)}
                  >
                    <div className={styles.headerLeft}>
                      <div className={styles.iconCircle}>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={108}
                          height={108}
                          className={styles.accIcon}
                        />
                      </div>
                      <h3 className={styles.accTitle}>{item.title}</h3>
                    </div>

                    <div className={styles.chevronWrapper}>
                      {activeId === item.id ? (
                        <ChevronUp size={24} className={styles.chevron} />
                      ) : (
                        <ChevronDown size={24} className={styles.chevron} />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={styles.accordionBodyWrapper}
                      >
                        <div className={styles.accordionBody}>
                          <p className={`${styles.accContent} scroll_block`}>
                            {item.content}
                          </p>

                          <div className={styles.btnWrapper}>
                            <CTAButton text="Learn More" href="#" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;