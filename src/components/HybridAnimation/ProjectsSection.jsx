"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyChooseSection.module.css';

const features = [
    {
        title: "Indie Game Development Teams",
        text: "Scalable animation production for indie studios that need professional output without full-time animation team overhead.",
        icon: "/industry/services-icon-01.png",
    },
    {
        title: "Mobile Game Studios",
        text: "Performance-efficient mobile game animation within the GPU and memory constraints of mobile platforms.",
        icon: "/industry/services-icon-05.png",
    },
    {
        title: "PC Game Developers",
        text: "Full-fidelity PC game animation at the quality level supported by PC hardware and the expectations of PC game audiences is supported.",
        icon: "/industry/services-icon-02.png",
    },
    {
        title: "Console Game Developers",
        text: "Console-certified animation deliverables within the memory and performance constraints of current-generation console hardware.",
        icon: "/industry/services-icon-06.png",
    },
    {
        title: "AAA Game Production Teams",
        text: "Large-scale animation production for AAA titles requires consistent quality across thousands of individual animation assets.",
        icon: "/industry/services-icon-03.png",
    },
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

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

export default function WhyChooseSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>
                        Game Animation for Indie Studios and AAA Projects
                    </h2>

                    <p className={styles.description}>
                        Game animation production scales to match the technical requirements, production pipelines, and performance expectations of indie studios, mobile developers, PC developers, console teams, and AAA game production environments.
                    </p>
                </motion.div>

                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} className="col-lg-6 col-md-12" variants={itemVariants}>
                            <div className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={108}
                                        height={108}
                                        className={styles.icon}
                                    />
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                                    <p className={styles.cardText}>{feature.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
