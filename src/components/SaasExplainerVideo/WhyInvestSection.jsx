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
    title: "Discovery",
    content:
      "We review your product, audience, and business goals, including a walkthrough of your actual platform with your team, to understand how users interact with the software and where animation will create the biggest impact. Whether the objective is increasing trial signups, improving onboarding, supporting sales, or explaining a complex workflow, we define the right video strategy before production begins so every scene has a clear purpose.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "Our team develops a script and creative concept around the exact action you want viewers to take. Instead of listing features, we build a story that demonstrates the problem, introduces your product naturally, and highlights the workflows, integrations, and benefits that matter most to your audience, whether they are decision-makers, end users, or enterprise buyers.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene, transition, interface interaction, and camera movement is mapped and approved before animation begins. This ensures the messaging flows naturally, the pacing keeps viewers engaged, and every product feature appears in the right sequence without creating unnecessary revisions later in production.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "We recreate your interface, brand assets, illustrations, icons, typography, and visual language to match your actual product as closely as possible. Every UI element is designed for consistency across current and future videos, making it easier to update animations as your software evolves without rebuilding everything from scratch.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Our animators bring the approved storyboard to life with polished motion, interface interactions, transitions, and visual effects that keep viewers focused on your product rather than distracting design. Throughout production, we refine every sequence through structured feedback rounds until the video communicates clearly, feels natural, and supports your conversion goals.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "After final approval, we deliver your SaaS animation in every format your business needs, including homepage embeds, landing pages, sales presentations, onboarding flows, social media campaigns, product launches, and paid advertising. Every export is optimized for its destination, so your team receives ready-to-publish assets without additional editing or formatting.",
  },
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
                Our SaaS <br />Animation Process
              </h2>

              <p className={styles.subText}>
                Your product changes fast, so our process is built for speed without sacrificing quality or control. Early approvals, reusable UI assets, and structured review milestones keep production efficient while making future updates simple. Here is how we turn your software into a video that supports marketing, sales, onboarding, and product adoption.
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
                    onClick={() =>
                      setActiveId(item.id === activeId ? null : item.id)
                    }
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
                        animate={{ height: "auto", opacity: 1 }}
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