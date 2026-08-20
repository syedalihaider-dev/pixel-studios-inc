"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from '../Common/HowWeWorkSection.module.css';

const accordionData = [
    {
        id: 1,
        title: "1 Factors Affecting Animation Costs",
        content:
            "Character animation pricing depends on multiple production factors, including character rig quality, animation style, number of required animations, facial animation requirements, and final delivery format. Every project is evaluated based on its technical requirements, creative scope, and production complexity before determining the final cost."
    },
    {
        id: 2,
        title: "2 Animation Complexity",
        content:
            "The complexity of the animation directly affects production time and cost. A simple character walk cycle requires fewer animation states and refinement passes compared to an advanced combat sequence with multiple movements, reactions, transitions, and gameplay variations. Complexity is defined during the project discovery phase."
    },
    {
        id: 3,
        title: "3 Character Count",
        content:
            "The number of characters included in an animation project impacts the overall production scope. A single-character animation project requires a different workflow compared to multi-character productions involving interactions, multiple rigs, and coordinated performances. Volume-based efficiencies are applied for larger character animation requirements."
    },
    {
        id: 4,
        title: "4 Animation Length",
        content:
            "Animation duration plays an important role in determining production effort and cost. Short real-time animation cycles require less development time compared to longer cinematic performance sequences involving detailed acting, storytelling, and extended character movements. Final duration requirements are scoped during project discovery."
    },
    {
        id: 5,
        title: "5 Rigging Requirements",
        content:
            "Projects that require character rig creation, rig corrections, or additional technical preparation involve additional production work. A properly prepared rig ensures better animation quality, smoother movement, and efficient production. Any rigging requirements are reviewed and included during the initial project evaluation."
    },
    {
        id: 6,
        title: "6 Production Timeline",
        content:
            "Standard production timelines are applied to most character animation projects based on complexity, scope, and approval cycles. Rush delivery options are available for urgent requirements and are priced transparently according to the additional resources and scheduling requirements needed to meet accelerated deadlines."
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
                                Cost of Character Animation Services
                            </h2>

                            <p className={styles.description}>
                                Character animation cost is determined by animation complexity, character count, duration, rigging requirements, and production timeline. Each project is evaluated individually to understand the creative and technical requirements involved before defining the appropriate production scope and investment.
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