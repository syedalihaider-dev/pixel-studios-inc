"use client";
import React from 'react';
import styles from './CooperationModelsSection.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';


const CooperationModelsSection = () => {
  const cards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Outstaffing",
      text: "Outstaffing gives you direct access to individual specialists, developers, artists, and animators who integrate into your existing team and work under your technical and creative direction. You get the capability without the overhead of permanent hiring, and you retain full control over production priorities and workflow. This model works best for studios with strong project management in place that need to extend specific skills for a defined period."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Dedicated Team",
      text: "A dedicated team is a self-managed, cross-functional group of developers, artists, QA engineers, and project managers that operates as an extension of your organization with consistent personnel and established velocity. The dedicated team model suits clients running ongoing game development or multiple titles simultaneously, where production continuity and team cohesion directly affect output quality."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Managed Outsourcing",
      text: "Managed outsourcing places full delivery accountability on our side. You brief us on scope, quality bar, and milestone dates. We staff the project, manage the production, and deliver to spec. This model is right for clients without internal game development capacity who need a game built to a professional standard without building a production management function from scratch."
    }
  ];

  return (
    <section className={styles.section}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-12">
            <h4 className={styles.subHeading}>OUR</h4>
            <h2 className={styles.mainHeading}>COOPERATION MODELS</h2>
            <p className={styles.topParagraph}>
              Game development partnerships look different depending on what a client needs. We offer three engagement models designed to fit different project situations, team structures, and budget approaches. Every model operates with the same production discipline and quality standards.
            </p>
          </div>
        </div>

        <div className="row">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="col-lg-4 mb-4 mb-lg-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <div className={styles.modelCard}>
                <div className={styles.iconWrapper}>
                  {/* User can place their actual 61x61 image or SVG here */}
                  <Image src={card.icon}
                    alt={card.title}
                    width={61}
                    height={61}
                  width={500} height={500} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={`scroll_block ${styles.cardParagraph}`}>
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CooperationModelsSection;
