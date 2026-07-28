"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
    {
        id: 1,
        title: "2D Character Rigging",
        description:
            "2D rigging for puppet animation in After Effects, Spine, and other 2D animation tools.",
        icon: "/icons/result-oriented.png"
    },
    {
        id: 2,
        title: "3D Character Rigging",
        description:
            "3D rigging for Unity, Unreal, and custom engine pipelines with documented bone naming conventions.",
        icon: "/icons/flexible.png"
    },
    {
        id: 3,
        title: "Facial Rig Setup",
        description:
            "Blend shape systems and facial rig configuration for dialogue and emotional performance animation.",
        icon: "/icons/transparent.png"
    },
    {
        id: 4,
        title: "Skeleton and Bone Systems",
        description:
            "Skeleton design and weight painting for animation rigs that deform correctly rather than creating vertex artifacts at joint locations.",
        icon: "/icons/experienced.png"
    },
    {
        id: 5,
        title: "Animation Optimization",
        description:
            "Animation optimization for performance-constrained platforms, including mobile and VR.",
        icon: "/icons/experienced.png"
    }
];

const TeamStandoutSection = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className={styles.standoutSection}>
            <div className="container">
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <p className="subtitle">RIGGING & ANIMATION</p>

                    <h2 className={styles.mainHeading}>
                        Character Rigging and <span>Animation Support</span>
                    </h2>

                    <p className={styles.headerDesc}>
                        Strong character animation begins with a reliable rig. We provide complete rigging and animation support, including 2D and 3D rig creation, facial rig setup, skeleton development, weight painting, and performance optimization to ensure characters move naturally across games, films, marketing content, and real-time engines.
                    </p>
                </motion.div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className={styles.featuresListContainer} ref={containerRef}>
                            <div className={styles.progressTrack}>
                                <motion.div
                                    className={styles.progressFill}
                                    style={{ height: lineHeight }}
                                />
                            </div>

                            <div className={styles.featuresList}>
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.id}
                                        className={styles.featureItem}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeOut",
                                            delay: index * 0.1
                                        }}
                                        viewport={{
                                            once: false,
                                            margin: "-20% 0px -20% 0px"
                                        }}
                                    >
                                        <div className={styles.featureIcon}>
                                            <div className={styles.featureIconImageWrapper}>
                                                <Image
                                                    src={feature.icon}
                                                    alt={feature.title}
                                                    width={64}
                                                    height={64}
                                                    style={{ objectFit: "contain" }}
                                                    onError={(e) => {
                                                        e.target.style.display = "none";
                                                    }}
                                                />
                                                {!feature.icon && (
                                                    <div
                                                        style={{
                                                            width: 64,
                                                            height: 64,
                                                            backgroundColor: "rgba(0,0,0,0.1)",
                                                            borderRadius: "8px"
                                                        }}
                                                    />
                                                )}
                                            </div>

                                            <h3 className={styles.featureTitle}>
                                                {feature.title}
                                            </h3>
                                        </div>

                                        <p className={styles.featureDesc}>
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={styles.stickyColumn}>
                            <motion.div
                                className={styles.videoWrapper}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <video
                                    src="/videos/home.webm"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamStandoutSection;