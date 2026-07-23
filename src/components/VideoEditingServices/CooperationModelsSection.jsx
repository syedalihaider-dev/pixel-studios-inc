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
      title: "Experienced Whiteboard Animators",
      text: "Every whiteboard animation at Pixels Studios is produced by a team that has spent years specifically in the whiteboard format — not generalist animators who rotate between styles depending on the brief. Whiteboard animation has its own visual grammar, its own pacing logic, and its own approach to information sequencing. That expertise is not interchangeable with 2D character animation or motion graphics experience."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Professional Scriptwriters",
      text: "The script is where most whiteboard animation projects succeed or fail. Ours are written by specialists who understand both the persuasive structure required for marketing content and the learning design principles required for training and education content. We do not outsource scripts to junior copywriters and hand them to the animation team. The writer is part of the production team from brief to delivery."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Custom Illustrations",
      text: "Every visual element in a Pixels Studios whiteboard animation is drawn for your project. We do not use template packs or stock icon libraries. Custom illustration means your video has a visual identity that is specific to your brand and your message — and it means the illustrations actually explain what they are supposed to explain, rather than approximating it."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "High-Quality Voiceovers",
      text: "Professional voiceover is included in every project. We select talent based on your audience, your brand tone, and the energy the script requires — not whoever is available or cheapest on the roster."
    },
    {
      id: 5,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround Times",
      text: "Standard whiteboard animation projects run three to five weeks from brief sign-off to final delivery. Expedited timelines are available for qualifying projects. We do not extend timelines without cause and do not pad schedules to manage client expectations down."
    },
    {
      id: 6,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Project Management",
      text: "Every Pixels Studios project has a dedicated project manager who owns the timeline, owns the communication, and owns the outcome. You will not be passed between departments or left waiting for status updates. One point of contact, start to finish."
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
            <p className="subtitle">Why Choose Our</p>
            <h2 className={styles.mainHeading}>Whiteboard Animation Company?</h2>
            <p className={styles.topParagraph}>
              Choosing the right whiteboard animation company determines whether your video gets watched, understood, and acted on — or archived. Here is what makes Pixels Studios the whiteboard animation studio brands and organizations return to.
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
