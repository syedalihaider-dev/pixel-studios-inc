"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from '../Common/HowWeWorkSection.module.css';

const accordionData = [
    {
        id: 1,
        title: "Factors That Influence Pricing",
        content:
            "Character rig complexity, animation style (realistic vs. stylized), number of animations, cinematic vs. real-time delivery, and engine integration scope."
    },
    {
        id: 2,
        title: "Animation Complexity",
        content:
            "A simple idle cycle costs less than a complex combat sequence with multiple states and transitions."
    },
    {
        id: 3,
        title: "Character Count",
        content:
            "Single hero character animation and large NPC library production are priced differently. Volume packages apply."
    },
    {
        id: 4,
        title: "Animation Duration",
        content:
            "Longer cinematic animations require more production time than short real-time cycles. Duration is scoped in the brief."
    },
    {
        id: 5,
        title: "Rigging Requirements",
        content:
            "An animation that requires a rig to be built or corrected adds to the production scope."
    },
    {
        id: 6,
        title: "Engine Integration Needs",
        content:
            "State machine setup, blend tree configuration, and Animation Montage integration are available as additional scope items."
    }
];

const HowWeWorkSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.howWeWorkSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <motion.div
                            className={styles.leftContent}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className={styles.heading}>
                                Cost of Game Animation Services
                            </h2>

                            <p className={styles.description}>
                                Game animation cost is determined by complexity, character count, animation duration, and engine integration requirements.
                            </p>

                            <div className={styles.buttonsWrapper}>
                                <CTAButton type="button" text="Let's Talk" />
                                <CTAButton
                                    type="link"
                                    href="tel:+1-443-487-0213"
                                    text="Call Now"
                                    variant="outline"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-6">
                        <div className={styles.accordionList}>
                            {accordionData.map((item, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <motion.div
                                        key={item.id}
                                        className={styles.accordionItem}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            delay: index * 0.1
                                        }}
                                        viewport={{ once: true, margin: "-50px" }}
                                    >
                                        <button
                                            className={styles.accordionHeader}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <h3 className={styles.accordionTitle}>{item.title}</h3>
                                            <span className={styles.accordionIcon}>
                                                {isOpen ? "−" : "+"}
                                            </span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{
                                                        duration: 0.4,
                                                        ease: "easeInOut"
                                                    }}
                                                    className={styles.accordionContentWrapper}
                                                >
                                                    <div className={styles.accordionContent}>
                                                        {item.content}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkSection;