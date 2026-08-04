"use client";
import React from 'react';
import styles from './CostSection.module.css';
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
                            <p className="subtitle">Why Choose Us</p>
                            <h2 className={styles.title}>Why Choose Pixel Studios for Game Trailer Production?</h2>
                            <p className={styles.description}>
                                Because we start with the brief that most trailer studios skip. Who is the viewer, and what does the trailer need to change about what they think, feel, or plan to do? That question has a specific answer for every game and every moment in its commercial lifecycle. The trailer that answers it correctly generates wishlists, purchases, and the organic sharing that no media budget can replicate. The trailer that does not answer it correctly is an expensive video that documents the features of a game the viewer has already decided not to buy.
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
                            <iframe
                                src="https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
                        We have produced trailers for games that went on to be funded on Kickstarter, launched on Steam, approved for publisher deals, and featured on platform storefronts. Every trailer was delivered before its deadline. Every client received the format they needed for their submission or launch date. We track that record because trailer production is a deadline business, and studios that miss deadlines in this context miss launches.
                    </p>
                    <div className={styles.divider}></div>
                </motion.div>
            </div>
        </section>
    );
};

export default CostSection;
