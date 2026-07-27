"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
    {
        id: 1,
        title: "1 Concept and Scripting",
        content:
            "The idea and the argument. Written by humans who understand the audience. This step does not get faster with AI because it was never the slow step. It was always the step that determined whether the rest mattered."
    },
    {
        id: 2,
        title: "2 AI Integration",
        content:
            "AI tools are applied to the production stages where they genuinely accelerate without compromising. Visual generation, asset variation, style exploration, and motion reference. The tool earns its place in the pipeline by doing the mechanical work faster."
    },
    {
        id: 3,
        title: "3 Manual Refinement",
        content:
            "Every AI output is reviewed and refined by an animator with the creative direction and the brand standard in front of them. The AI provides the draft. The animator produces the final. That distinction is what separates our output from unmanaged AI production."
    },
    {
        id: 4,
        title: "4 Delivery and Feedback",
        content:
            "Structured delivery with documented feedback cycles. The same revision process as traditional production, applied to AI-assisted output. Faster to produce does not mean faster to approve. The quality bar is the same."
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
                                Our 4-Step AI Animation Process
                            </h2>

                            <p className={styles.description}>
                                Every AI animation project follows a streamlined four-step workflow that combines strategic thinking, AI-assisted production, and expert human oversight. The process is designed to maximize speed without compromising creative quality, brand consistency, or professional standards.
                            </p>
                            <div className={styles.buttonsWrapper}>
                                <CTAButton type="button" text="Let's Talk" />
                                <CTAButton type="link" href="tel:+1-443-487-0213" text="Call Now" variant="outline" />
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
                                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                    >
                                        <button
                                            className={styles.accordionHeader}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <h3 className={styles.accordionTitle}>{item.title}</h3>
                                            <span className={styles.accordionIcon}>
                                                {isOpen ? '−' : '+'}
                                            </span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
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
