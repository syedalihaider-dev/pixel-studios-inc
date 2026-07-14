"use client";
import React from 'react';
import styles from './PressReleaseAwards.module.css';
import { motion } from 'framer-motion';
import CTAButton from '@/components/Common/CTAButton';

const awardsData = [
  {
    id: 1,
    heading: 'A Leader in Reinvention',
    para: 'Recognized for our continued dedication to innovation and transforming the digital landscape.',
    svg: (
      <svg viewBox="0 0 300 200" className={styles.boxSvg} xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 Q100,10 150,80 T300,50" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" className={styles.svgPath} />
        <path d="M50,200 Q80,100 180,120 T300,150" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" className={styles.svgPath} />
        <circle cx="200" cy="100" r="40" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" className={styles.svgPath} />
        <line x1="150" y1="0" x2="150" y2="200" stroke="rgba(255,255,255,0.4)" strokeWidth="1" className={styles.svgPath} />
      </svg>
    )
  },
  {
    id: 2,
    heading: 'A Great Place To Work®',
    para: 'Awarded for cultivating an inclusive, empowering, and flexible environment for all our employees.',
    svg: (
      <svg viewBox="0 0 300 200" className={styles.boxSvg} xmlns="http://www.w3.org/2000/svg">
        <path d="M-20,150 Q100,0 200,80 T320,50" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" className={styles.svgPath} />
        <path d="M100,200 L100,100 L300,100" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" className={styles.svgPath} />
        <path d="M0,100 C50,100 80,180 150,180" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" className={styles.svgPath} />
      </svg>
    )
  },
  {
    id: 3,
    heading: 'A Trusted Industry Leader',
    para: 'Consistently ranked among the top global organizations for our operational excellence and reliability.',
    svg: (
      <svg viewBox="0 0 300 200" className={styles.boxSvg} xmlns="http://www.w3.org/2000/svg">
        <path d="M0,100 Q150,50 200,150 T300,50" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" className={styles.svgPath} />
        <circle cx="250" cy="120" r="60" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" className={styles.svgPath} />
        <rect x="150" y="80" width="80" height="50" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" className={styles.svgPath} />
      </svg>
    )
  }
];

export default function PressReleaseAwards() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <h2 className={styles.mainHeading}>GLOBAL RECOGNITION<br/>AND AWARDS</h2>
        </motion.div>

        <motion.div 
          className="row mt-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {awardsData.map((award) => (
            <motion.div key={award.id} className="col-lg-4 col-md-6 mb-4" variants={itemVariants}>
              <div className={styles.awardBox}>
                
                <div className={styles.svgContainer}>
                  {award.svg}
                </div>

                <div className={styles.boxContent}>
                  <h3 className={styles.boxHeading}>{award.heading}</h3>
                  <div className={styles.hoverContent}>
                    <p className={`${styles.hoverPara} scroll_block`}>{award.para}</p>
                    <div className={styles.ctaWrapper}>
                      <CTAButton text="See related awards" href="#" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
