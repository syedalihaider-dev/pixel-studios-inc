"use client";
import React from 'react';
import styles from './EnginesSection.module.css';
import { motion } from 'framer-motion';

const EnginesSection = () => {
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
          <div className="col-12 col-lg-10">
            <h4 className={styles.subHeading}>GAME ENGINES</h4>
            <h2 className={styles.mainHeading}>WE WORK WITH</h2>
            <p className={styles.topParagraph}>
              Our game development studio is engine-agnostic by design. We recommend the engine that fits the project, not the one our team finds most comfortable.
            </p>
          </div>
        </div>

        <div className="row">
          <motion.div 
            className="col-lg-6 mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.engineCard}>
              <div className={styles.cardHeader}>
                <img src="/game-development/unreal-engine.png" alt="Unreal Engine" width="73" height="83" className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Unreal Engine</h3>
              </div>
              <p className={`scroll_block ${styles.cardParagraph}`}>
                Unreal Engine is our choice for AAA-quality visuals, cinematic experiences, and projects requiring the highest fidelity rendering pipeline available. Our Unreal Engine game development company experience covers UE4 and UE5, Blueprint and C++ development, Nanite and Lumen, and the full Unreal production pipeline from asset import through platform certification.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.engineCard}>
              <div className={styles.cardHeader}>
                <img src="/game-development/unity.png" alt="Unity" width="80" height="83" className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Unity</h3>
              </div>
              <p className={`scroll_block ${styles.cardParagraph}`}>
                Unity is our recommendation for mobile game development services, cross-platform titles requiring rapid iteration, and projects where development teams need access to the widest possible asset ecosystem.
                <br /><br />
                Our Unity game development services cover Unity 2D and 3D, Unity DOTS, and Unity AR Foundation for mobile AR applications. We also work with Godot for indie projects and with proprietary engines where the client has an existing technical investment that development must extend.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnginesSection;
