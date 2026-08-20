"use client";
import React from 'react';
import styles from '../Common/CostSection.module.css';
import { motion } from 'framer-motion';

const CostSection = () => {
    return (
        <section className={styles.costSection}>
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* <p className="subtitle">TYPES OF CASES WE SUPPORT</p> */}
                            <h2 className={styles.title}>Types of Cases We Support</h2>
                            <p className={styles.description}>
                                Motor vehicle accidents, trucking accidents, motorcycle accidents, medical malpractice, wrongful death, product defect litigation, construction accidents, workplace injury claims, insurance disputes, and criminal defense cases.
                            </p>
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div
                            className={styles.videoWrapper}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <iframe loading="lazy"
                                src="https://player.vimeo.com/video/1065180132?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className={styles.videoIframe}
                            ></iframe>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className={styles.bottomContent}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.divider}></div>
                    <p className={styles.bottomText}>
                        Each case type has specific animation requirements that determine the production approach. We brief each matter separately.
                    </p>
                    <div className={styles.divider}></div>
                </motion.div>
            </div>
        </section>
    );
};

export default CostSection;
