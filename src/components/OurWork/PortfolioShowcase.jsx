"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import Image from "next/image";
import { PlayCircle, X } from "lucide-react";
import CTAButton from "@/components/Common/CTAButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import styles from "./PortfolioShowcase.module.css";

const tabs = [
  "VIEW ALL", "2D", "3D", "BRAND", "BLOCKCHAIN & NFT",
  "COMMERCIAL", "CHARACTER", "EXPLAINER", "FRAME-BY-FRAME",
  "FEATURED", "GAMING", "PROMOTIONAL", "SAAS", "TECH"
];

const portfolioItems = [
  { id: 1, image: "/porfolio/01.png", title: "Pure Moringa", category: "2D", type: "Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 2, image: "/porfolio/02.png", title: "Organic Product Animation", category: "3D", type: "Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 3, image: "/porfolio/03.png", title: "Brand Identity", category: "BRAND", type: "Product Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 4, image: "/porfolio/04.png", title: "Organic Product Animation", category: "COMMERCIAL", type: "Product Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 5, image: "/porfolio/05.png", title: "Organic Product Animation", category: "CHARACTER", type: "Product Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 6, image: "/porfolio/06.png", title: "Organic Product Animation", category: "EXPLAINER", type: "Product Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 7, image: "/porfolio/07.png", title: "Organic Product Animation", category: "FEATURED", type: "Product Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 8, image: "/porfolio/08.png", title: "Organic Product Animation", category: "GAMING", type: "Product Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 9, image: "/porfolio/09.png", title: "Organic Product Animation", category: "PROMOTIONAL", type: "Product Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 10, image: "/porfolio/10.png", title: "Organic Product Animation", category: "SAAS", type: "Product Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 11, image: "/porfolio/11.png", title: "Organic Product Animation", category: "TECH", type: "Product Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 12, image: "/porfolio/12.png", title: "Blockchain Project", category: "BLOCKCHAIN & NFT", type: "Animation", videoUrl: "https://player.vimeo.com/video/146022717" },
  { id: 13, image: "/porfolio/13.png", title: "Frame by Frame", category: "FRAME-BY-FRAME", type: "Animation", videoUrl: "https://player.vimeo.com/video/146022717" }
];

const ITEMS_PER_PAGE = 6;

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState("VIEW ALL");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Filter items based on active tab
  const filteredItems = useMemo(() => {
    if (activeTab === "VIEW ALL") return portfolioItems;
    return portfolioItems.filter(item => item.category === activeTab);
  }, [activeTab]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMoreItems = visibleCount < filteredItems.length;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const openPopup = (item) => {
    setCurrentVideo(item);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => setCurrentVideo(null), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closePopup();
    };
    if (isPopupOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPopupOpen]);

  return (
    <section className={styles.portfolioShowcase}>
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OUR LATEST PROJECTS
        </motion.h2>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.tabsContainer}
        >
          <button
            className={`${styles.swiperNavButton} ${styles.swiperPrev} swiper-button-prev-custom`}
            disabled={isBeginning}
          >
            <Image src="/icons/slider-arrow.png" alt="Prev" width={10} height={15} />
          </button>

          <Swiper
            modules={[Navigation, FreeMode]}
            slidesPerView="auto"
            spaceBetween={15}
            freeMode={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className={styles.swiperWrapper}
          >
            {tabs.map((tab, index) => {
              const currentPill = hoveredTab || activeTab;
              const hasPill = currentPill === tab;

              return (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <motion.button
                    onClick={() => handleTabChange(tab)}
                    onMouseEnter={() => setHoveredTab(tab)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={`${styles.tab} ${hasPill ? styles.activeText : ""}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {hasPill && (
                      <motion.div
                        layoutId="activeTabBackground"
                        className={styles.activePill}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={styles.tabText}>{tab}</span>
                    <Image
                      src="/button-arrow.png"
                      alt="Icon"
                      width={24}
                      height={24}
                      className={`${styles.tabIcon} ${hasPill ? styles.activeTabIcon : ""}`}
                    />
                  </motion.button>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button
            className={`${styles.swiperNavButton} ${styles.swiperNext} swiper-button-next-custom`}
            disabled={isEnd}
          >
            <Image src="/icons/slider-arrow.png" alt="Next" width={10} height={15} />
          </button>
        </motion.div>

        {/* Grid Section */}
        <motion.div layout className={`row ${styles.grid}`}>
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.8 }}
                className="col-12 col-md-6 col-xl-4"
              >
                <div className={styles.cardWrapper} onClick={() => openPopup(item)}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.videoPreview}
                  />
                  <div className={styles.cardOverlay}>
                    <motion.div
                      className={styles.playBtn}
                      whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(203, 9, 164, 0.8)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PlayCircle size={32} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <AnimatePresence>
          {hasMoreItems && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className={styles.loadMoreWrapper}
            >
              <CTAButton
                type="button"
                text="Load More"
                onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Popup Section */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.popupOverlay}
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={styles.popupContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={closePopup}>
                <X size={24} />
              </button>
              <iframe
                src={`${currentVideo?.videoUrl}?autoplay=1&color=CB09A4&title=0&byline=0&portrait=0`}
                className={styles.popupIframe}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Portfolio Video"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
