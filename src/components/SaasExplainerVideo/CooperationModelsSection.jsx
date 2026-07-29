"use client";
import React, { useState } from 'react';
import styles from './CooperationModelsSection.module.css';
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
      title: "Industry Experience",
      text: "A SaaS explainer video company trusted by startups, scale-ups, and enterprise software providers across industries. From project management and fintech platforms to healthcare, AI, HR, cybersecurity, and B2B SaaS products, we understand how different audiences evaluate software and build videos that explain complex workflows in language buyers actually understand. Every project is tailored to the stage of your business, whether you are launching your first product or expanding an established multi-product ecosystem."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every animation is created around your real product, interface, brand identity, and customer journey rather than relying on stock assets or generic SaaS templates. We recreate your UI, messaging, and workflows with precision so your video feels like a natural extension of your software. The result is an explainer that reflects your product accurately while remaining flexible enough to support future updates, feature launches, and additional marketing campaigns."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Software moves quickly, and your creative assets have to keep pace. Our production schedules are designed around launch dates, product releases, marketing campaigns, fundraising milestones, and customer onboarding initiatives. Structured approvals and efficient workflows help us deliver high-quality animation on schedule without sacrificing storytelling, visual polish, or technical accuracy."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "You work with one dedicated project manager from discovery through final delivery, ensuring clear communication at every stage. Product managers, designers, developers, marketers, founders, and sales teams remain aligned throughout production while feedback is organized into a streamlined review process. The result is a smoother collaboration, faster approvals, and a final video that supports every department with one consistent visual story."
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
            <p className="subtitle">WHY PIXEL STUDIOS</p>

            <h2 className={styles.mainHeading}>
              Why Choose Pixel Studios?
            </h2>

            <p className={styles.topParagraph}>
              The best explainer videos for SaaS look effortless, but behind every successful animation is a production process built around strategy, product knowledge, and clear communication. Templates can imitate motion, but they cannot explain your software, your workflows, or your competitive advantage. At Pixel Studios, every project is built around your actual product, giving your marketing, sales, and onboarding teams a video that continues delivering value long after launch. Here is why growing software companies choose our custom SaaS explainer video studio.
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