"use client";
import React from 'react';
import styles from './PressReleaseCards.module.css';
import { motion } from 'framer-motion';

const cardsData = [
  {
    id: 1,
    type: 'solid',
    bgColor: 'bgPurple',
    subheading: 'ANNOUNCEMENT',
    heading: 'Accenture launches Accenture Edge to help mid-market companies harness AI and reinvent how they operate',
    image: null,
  },
  {
    id: 2,
    type: 'bottom-image',
    bgColor: 'bgWhite',
    subheading: 'PERSPECTIVE',
    heading: 'AI agents are rewriting the platform playbook',
    image: '/press-release/ai-agents-are-rewriting.png',
  },
  {
    id: 3,
    type: 'full-image',
    bgColor: 'bgImage',
    subheading: 'RESEARCH REPORT',
    heading: 'The reinvention imperative in the chemical industry',
    image: '/press-release/reinventing-chemical.png',
  },
  {
    id: 4,
    type: 'full-image',
    bgColor: 'bgImage',
    subheading: 'RESEARCH REPORT',
    heading: 'AI agents are changing how consumers choose',
    image: '/press-release/how-consumer-choose.png',
  },
  {
    id: 5,
    type: 'full-image',
    bgColor: 'bgImage',
    subheading: 'RESEARCH REPORT',
    heading: 'Why today’s cyber talent model is broken—and how to fix it',
    image: '/press-release/cyber-talent-model.png',
  },
  {
    id: 6,
    type: 'full-image',
    bgColor: 'bgImage',
    subheading: 'RESEARCH REPORT',
    heading: 'Reinventing for Human + AI Engineering',
    image: '/press-release/reinventing-for-human-ai.png',
  },
  {
    id: 7,
    type: 'full-image',
    bgColor: 'bgImage',
    subheading: 'RESEARCH REPORT',
    heading: 'Turning the supply chain talent shortage into strength',
    image: '/press-release/turning-the-supply-chain.png',
  },
  {
    id: 8,
    type: 'bottom-image',
    bgColor: 'bgWhite',
    subheading: 'CASE STUDY',
    heading: 'From Philipstown’s streets to screens worldwide',
    image: '/press-release/from-phillipstown-street.png',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function PressReleaseCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cardsData.map((card) => (
            <motion.div key={card.id} className="col-lg-3 col-md-6 mb-4" variants={cardVariants}>
              <div className={`${styles.cardInner} ${styles[card.bgColor]}`}>
                
                {/* Background Full Image */}
                {card.type === 'full-image' && (
                  <>
                    <div 
                      className={styles.fullImgBg} 
                      style={{ backgroundImage: `url(${card.image})` }}
                    ></div>
                    <div className={styles.fullImgOverlay}></div>
                  </>
                )}

                {/* Bottom Image */}
                {card.type === 'bottom-image' && card.image && (
                  <img src={card.image} alt={card.heading} className={styles.bottomImg} />
                )}

                {/* Top Content (Heading & Subheading) */}
                <div className={styles.contentTop}>
                  <div className={styles.subHeading}>{card.subheading}</div>
                  <div className={styles.heading}>{card.heading}</div>
                </div>

                {/* Hover Content (Right Paragraph) */}
                <div className={`${styles.hoverContent} scroll_block`}>
                  <p>
                    Explore deep insights and learn how to adapt and thrive in an ever-evolving digital landscape with cutting-edge strategies.
                  </p>
                </div>

                {/* Hover Button (Bottom CTA) */}
                <div className={styles.hoverButton}>
                  <a href="#" className={styles.ctaBtn}>Read More</a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
