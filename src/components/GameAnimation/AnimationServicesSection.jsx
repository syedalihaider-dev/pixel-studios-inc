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
            title: "Experienced Game Animators",
            text: "Our animators have shipped animations in games. They understand what the engine does with the animation data they produce."
        },
        {
            id: 2,
            icon: "/game-development/dedicated-team.png",
            title: "Engine-Ready Deliverables",
            text: "Every animation is tested in the target engine before delivery. Not assumed to be compatible. Confirmed."
        },
        {
            id: 3,
            icon: "/game-development/managed-outsourcing.png",
            title: "Scalable Production Pipeline",
            text: "Single hero animations to full game animation libraries. The team and the pipeline scale to the production volume."
        },
        {
            id: 4,
            icon: "/game-development/managed-outsourcing.png",
            title: "Dedicated Animation Teams",
            text: "Dedicated animators are assigned to a project for consistent style and reduced briefing overhead across the production."
        },
        {
            id: 5,
            icon: "/game-development/managed-outsourcing.png",
            title: "Fast Turnaround Times",
            text: "Most single-character animation cycles complete in three to seven business days from approved rig and reference. Sprint delivery available."
        },
        {
            id: 6,
            icon: "/game-development/managed-outsourcing.png",
            title: "Flexible Engagement Models",
            text: "Per-animation delivery, sprint-based production, and long-term retainer models for live game content pipelines."
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
                        <p className="subtitle">WHY CHOOSE PIXEL STUDIOS</p>

                        <h2 className={styles.mainHeading}>
                            Why Choose Pixel Studios for Game Animation Services?
                        </h2>

                        <p className={styles.topParagraph}>
                            Our game animation services combine experienced animators, engine-ready deliverables, scalable production pipelines, dedicated animation teams, fast turnaround times, and flexible engagement models to deliver animation that integrates seamlessly into modern game development workflows while maintaining consistent production quality.
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
