"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
    {
        name: "Improved Audience Engagement",
        intro:
            "Audiences connect more deeply with characters that feel believable, expressive, and emotionally engaging. Professional character animation creates movements and performances that make viewers invest in the character's journey and experience.",
        points: [
            "Creates stronger emotional connections between audiences and characters.",
            "Expressive movement and performance increase viewer involvement.",
            "Helps characters feel memorable, relatable, and authentic across different platforms."
        ]
    },
    {
        name: "Better Storytelling",
        intro:
            "Character animation adds a visual storytelling layer that communicates emotions, personality, and narrative details beyond dialogue alone. Every movement, expression, and interaction helps deliver a stronger story experience.",
        points: [
            "Character performances communicate emotions and intentions clearly.",
            "Body language and facial expressions add depth to storytelling.",
            "Helps audiences understand character motivations and relationships."
        ]
    },
    {
        name: "Stronger Brand Recognition",
        intro:
            "A professionally animated character becomes a recognizable visual asset that audiences associate with a brand. Consistent character design and animation style help create long-term brand identity and recall.",
        points: [
            "Builds a recognizable character identity across marketing channels.",
            "Creates stronger connections between audiences and brand messaging.",
            "Allows brands to develop memorable characters used across multiple campaigns."
        ]
    },
    {
        name: "Enhanced Character Personality",
        intro:
            "Character design establishes appearance, but animation brings personality to life. Secondary movements, expressions, and performance choices define how audiences perceive the character.",
        points: [
            "Adds unique personality through movement and animation style.",
            "Uses facial expressions and body language to communicate emotions.",
            "Transforms designed characters into believable animated personalities."
        ]
    },
    {
        name: "Greater Viewer Retention",
        intro:
            "Engaging character animation keeps audiences focused by creating movement, emotion, and visual interest throughout the experience. Characters with strong performances encourage viewers to continue watching.",
        points: [
            "Maintains audience attention through expressive character performances.",
            "Creates memorable moments that increase content engagement.",
            "Improves completion rates for videos, campaigns, and interactive experiences."
        ]
    },
    {
        name: "Increased Production Quality",
        intro:
            "High-quality character animation is a visible indicator of professional production standards. Detailed movement, realistic timing, and polished performances elevate the overall quality of any animated project.",
        points: [
            "Professional animation creates a more polished final product.",
            "Advanced character performance improves audience perception.",
            "Quality animation helps productions stand out in competitive markets."
        ]
    }
];

export default function WonderingSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeData = industriesData[activeIndex];

    return (
        <section className={styles.wonderingSection}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <motion.div
                    className="row"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="col-12 text-center">
                        <p className="subtitle">CHARACTER ANIMATION BENEFITS</p>

                        <h2 className={styles.mainTitle}>
                            Why Professional <span>Character Animation</span> Matters?
                        </h2>

                        <p className={styles.description}>
                            Professional character animation creates stronger audience connections, improves storytelling, strengthens brand recognition, and transforms designed characters into memorable personalities through expressive movement and performance.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="row"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="col-lg-4 col-md-12">
                        <div className={styles.industryList}>
                            {industriesData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${styles.industryItem} ${index === activeIndex ? styles.active : ''}`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span>{item.name}</span>
                                    <div className={styles.arrowIcon}>
                                        <Image src="/icons/arrow.png" alt="Arrow" width={38} height={30} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.actions}>
                            <CTAButton text="Let's Talk" type="link" href="/contact-us" />
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-12">
                        <div className={styles.rightContent}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <p className={styles.contentIntro}>{activeData.intro}</p>

                                    <h3 className={styles.contentTitle}>Example of our work</h3>

                                    <div className={styles.bulletList}>
                                        {activeData.points.map((point, idx) => (
                                            <div key={idx} className={styles.bulletItem}>
                                                <div className={styles.tickIcon}>
                                                    <Image src="/icons/tick.png" alt="Tick" width={29} height={29} />
                                                </div>
                                                <p className={styles.bulletText}>{point}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
