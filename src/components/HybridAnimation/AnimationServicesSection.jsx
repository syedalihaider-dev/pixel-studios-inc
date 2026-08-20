"use client";
import React, { useState } from 'react';
import styles from '../Common/CooperationModelsSection.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const CooperationModelsSection = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const cards = [
        {
            id: 1,
            icon: "/game-development/outstaffing.png",
            title: "Experienced Animation Artists",
            text:
                "Our animation artists bring experience in traditional frame-by-frame animation techniques along with modern digital workflows. They understand the craftsmanship required to create expressive movement, detailed performances, and visually distinctive animation that goes beyond standard rig-based production methods."
        },
        {
            id: 2,
            icon: "/game-development/dedicated-team.png",
            title: "Expertise Across Traditional and Digital Techniques",
            text:
                "We work across both traditional and digital cel animation approaches, selecting the right production method based on the project's visual style, creative requirements, timeline, and budget. This flexibility allows every animation project to achieve the intended artistic quality without being limited to a single workflow."
        },
        {
            id: 3,
            icon: "/game-development/managed-outsourcing.png",
            title: "Custom Animation Workflows",
            text:
                "Every hybrid and cel animation project receives a customized production workflow built around the specific combination of techniques the project requires. Instead of following a fixed production template, our process adapts to the creative vision, animation style, and technical requirements of each unique project."
        },
        {
            id: 4,
            icon: "/game-development/managed-outsourcing.png",
            title: "High-End Visual Production",
            text:
                "We apply professional production standards to hybrid and cel animation projects, ensuring every frame maintains visual consistency, artistic quality, and production-level detail. From initial concept development to final compositing, every stage is handled with attention to broadcast-quality results."
        },
        {
            id: 5,
            icon: "/game-development/managed-outsourcing.png",
            title: "Detail-Oriented Animation Process",
            text:
                "Because hybrid and cel animation relies heavily on artistic craftsmanship, every stage receives detailed review and refinement. Frame-level evaluation, timing adjustments, visual consistency checks, and animation polishing ensure the final production achieves the intended creative impact."
        },
        {
            id: 6,
            icon: "/game-development/managed-outsourcing.png",
            title: "Collaborative Creative Development",
            text:
                "We work closely with creators, brands, and production teams throughout the animation process to develop a final result that matches their vision. Through continuous creative collaboration, feedback cycles, and artistic alignment, we ensure the animation reflects the unique goals of each project."
        }
    ];

    return (
        <section className={styles.cooperationModelsSection}>
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-12 col-lg-12">
                        <p className="subtitle">WHY CHOOSE US</p>

                        <h2 className={styles.mainHeading}>
                            Why Choose Our Hybrid and Cel Animation Studio?
                        </h2>

                        <p className={styles.topParagraph}>
                            Our hybrid and cel animation studio combines experienced animation artists, traditional and digital production expertise, customized workflows, and high-end visual production standards to create distinctive animated experiences. From detailed frame-by-frame craftsmanship to collaborative creative development, every project is handled with the artistic attention and technical precision required for premium hybrid and cel animation.
                        </p>
                    </div>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    onSwiper={setSwiperRef}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 15 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 }
                    }}
                    className={styles.swiperContainer}
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id} className={styles.swiperSlide}>
                            <div className={styles.modelCard}>
                                <div className={styles.iconWrapper}>
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        width={61}
                                        height={61}
                                    />
                                </div>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={`${styles.cardParagraph} scroll_block`}>
                                    {card.text}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom Circle Navigation Buttons */}
                <div className={styles.navigationWrapper}>
                    <button
                        type="button"
                        className={styles.navBtn}
                        onClick={() => swiperRef?.slidePrev()}
                        aria-label="Previous Slide"
                    >
                        <ArrowLeft size={22} className={styles.navIcon} />
                    </button>
                    <button
                        type="button"
                        className={styles.navBtn}
                        onClick={() => swiperRef?.slideNext()}
                        aria-label="Next Slide"
                    >
                        <ArrowRight size={22} className={styles.navIcon} />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default CooperationModelsSection;
