"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from '../Common/HowWeWorkSection.module.css';

const accordionData = [
    {
        id: 1,
        title: "1 Animation Length",
        content:
            "Total animation runtime is one of the primary factors that determines project cost because hybrid and cel animation requires significant production time for every finished second of content. Longer animations require more drawings, revisions, compositing work, and overall production effort compared to shorter sequences."
    },
    {
        id: 2,
        title: "2 Frame Density and Complexity",
        content:
            "The level of frame detail, animation complexity, and movement requirements directly influence production scope. Higher frame rates, detailed character performances, complex effects animation, and intricate motion sequences require additional artistic hours to achieve the intended quality and handcrafted visual style."
    },
    {
        id: 3,
        title: "3 Character Design Requirements",
        content:
            "Original character design requirements add additional scope beyond animation production itself. Character development includes visual exploration, style creation, expression planning, and design refinement to ensure the character works effectively within the selected hybrid or cel animation technique."
    },
    {
        id: 4,
        title: "4 Background Artwork",
        content:
            "Custom background artwork created specifically for the animation style increases production requirements. Hand-produced environments, detailed locations, and visual elements designed to match the character animation's artistic direction require additional planning, illustration, and refinement."
    },
    {
        id: 5,
        title: "5 Hybrid Technique Integration",
        content:
            "Combining 2D and 3D animation techniques requires additional production work to maintain visual consistency between different elements. Compositing, style matching, lighting adjustments, and integration between techniques are carefully managed to ensure the final animation feels like one unified visual experience."
    },
    {
        id: 6,
        title: "6 Production Timeline",
        content:
            "Standard production timelines are priced according to the planned workflow and available resources. Compressed deadlines for frame-intensive hybrid and cel animation projects require additional artists, accelerated production schedules, and increased coordination, which are scoped and priced according to the project's specific requirements."
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
                                Hybrid and Cel Animation Pricing and Project Factors
                            </h2>

                            <p className={styles.description}>
                                Hybrid and cel animation is priced differently from standard rigged animation because frame-by-frame production requires significantly more artistic time and attention per second of finished content. Project pricing depends on multiple factors including animation length, frame complexity, character design requirements, background artwork, hybrid technique integration, and the production timeline required to achieve the final visual quality.
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