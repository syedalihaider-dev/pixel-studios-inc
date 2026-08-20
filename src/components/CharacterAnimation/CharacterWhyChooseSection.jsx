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
            title: "Experienced Character Animators",
            text: "Our character animators have experience creating production-ready animation for shipped games, commercial advertising campaigns, entertainment projects, and cinematic content. We understand the technical and creative requirements behind believable character performance, from movement quality and timing to emotional expression and storytelling through animation."
        },
        {
            id: 2,
            icon: "/game-development/dedicated-team.png",
            title: "Custom Animation Solutions",
            text: "Every character animation project has different requirements, visual styles, audiences, and technical specifications. We do not apply a standard animation approach to every project. Our team develops custom animation solutions based on the character design, project goals, platform requirements, and the specific performance needed from each character."
        },
        {
            id: 3,
            icon: "/game-development/managed-outsourcing.png",
            title: "Industry-Specific Expertise",
            text: "Character animation for games, marketing, entertainment, and cinematic productions requires different creative approaches and technical workflows. Our team understands these differences and applies the right animation process for each industry, whether creating interactive game characters, brand mascots, or high-quality cinematic performances."
        },
        {
            id: 4,
            icon: "/game-development/managed-outsourcing.png",
            title: "Scalable Production Teams",
            text: "From a single character animation requirement to complete character animation libraries for large-scale productions, our teams scale according to project volume and complexity. We provide flexible production support for individual assets, ongoing animation requirements, and large character-based projects without compromising quality."
        },
        {
            id: 5,
            icon: "/game-development/managed-outsourcing.png",
            title: "Fast Turnaround Times",
            text: "Our optimized character animation workflow allows most animation cycles to be completed within three to seven business days after receiving approved rigs, references, and production requirements. Clear communication, structured reviews, and efficient production pipelines help maintain speed while delivering polished animation results."
        },
        {
            id: 6,
            icon: "/game-development/managed-outsourcing.png",
            title: "Flexible Project Models",
            text: "We offer flexible engagement models based on your production needs, including individual animation delivery, sprint-based workflows, and long-term animation partnerships. Whether you need support for a single character, ongoing content production, or a dedicated animation pipeline, our approach adapts to your requirements."
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
                            Why Choose Pixel Studios for Character Animation Services?
                        </h2>

                        <p className={styles.topParagraph}>
                            Pixel Studios combines experienced character animators, industry-specific expertise, scalable production capabilities, and flexible workflows to deliver high-quality character animation solutions. From game characters and cinematic performances to marketing and entertainment content, we create animations that bring characters to life with precision, personality, and purpose.
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
