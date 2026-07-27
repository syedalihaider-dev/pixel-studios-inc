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
      title: "Instructional Design Expertise",
      text: "We approach educational video production as an instructional design problem first and a production problem second. The structure of the learning experience is as important as the quality of the video that delivers it."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Learning-Focused Storytelling",
      text: "Narrative and story structure are applied to educational content in a way that serves comprehension rather than entertainment. The two can coexist. Most educational video production does not attempt it."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Custom Educational Content",
      text: "Every educational video is produced for the specific learning objective, the specific audience, and the specific context in which it will be used. Template training videos applied regardless of fit are the reason most training programs report high completion and low behavior change."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "High-Quality Production Standards",
      text: "Broadcast-quality production on educational content. The learner's willingness to engage with training is partly determined by the signal the production quality sends about whether the organization values their time."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Scalable Learning Solutions",
      text: "From a single compliance training video to a full corporate learning library, we scale production capacity to the organization's content development needs."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Collaborative Development Process",
      text: "Subject matter expert collaboration is built into every stage of the production. The content accuracy review is not a final-stage checkbox. It is a production stage."
    },
    {
      id: 7,
      icon: "/game-development/managed-outsourcing.png",
      title: "Reliable Delivery Timelines",
      text: "Educational video production deadlines are real deadlines. Course launches, onboarding cycles, and compliance training windows do not move because the video is late."
    },
    {
      id: 8,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Project Support",
      text: "One project manager from brief to LMS integration. One point of contact is responsible for every stage of the production."
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
              Why Choose Our Educational Video Production Company?
            </h2>

            <p className={styles.topParagraph}>
              We combine instructional design, educational storytelling, subject matter collaboration, and broadcast-quality production to create learning videos that improve understanding, engagement, and measurable training outcomes.
            </p>
          </div>
        </div>

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