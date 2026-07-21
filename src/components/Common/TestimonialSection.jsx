"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./TestimonialSection.module.css";
import CTAButton from "./CTAButton";
import { ChevronLeft, ChevronRight, Play, Star, X } from "lucide-react";
import Link from 'next/link';

export default function TestimonialSection({
  heading = "Let’s Hear What Our Clients Are Saying",
  subText = "Our clients include some of the world’s most renowned brands, entrusting us with their animation needs to elevate their messages.",
  testimonials = [],
  variant = "default"
}) {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -445 : 445;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  const renderStars = () => (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );

  return (
    <section className={`${styles.testimonialSection} ${variant === 'gradient' ? styles.gradientBg : ''}`}>
      <div className="container">
        <motion.div
          className="row mb-5 align-items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="col-lg-6">
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.subText}>{subText}</p>
          </div>

          <div className="col-lg-6">
            <div className={styles.rightCol}>
              {variant === 'default' ? (
                <Image
                  src="/trust-badges.png"
                  width={536}
                  height={62}
                  alt="Trust Badges"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              ) : (
                <>
                  <Link href="#" className={styles.badge}>
                    <Image width={200} height={65} src="/google-logo.png" alt="Google" className={styles.badgeLogo} />
                    <div className={styles.ratingRow}>5.0/5.0 {renderStars()}</div>
                  </Link>
                  <Link href="#" className={styles.badge}>
                    <Image width={200} height={65} src="/clutch-logo.png" alt="Clutch" className={styles.badgeLogo} />
                    <div className={styles.ratingRow}>4.9/5.0 {renderStars()}</div>
                  </Link>
                  <Link href="#" className={styles.badge}>
                    <Image width={200} height={65} src="/trustpilot-logo.png" alt="Trustpilot" className={styles.badgeLogo} />
                    <div className={styles.ratingRow}>4.6/5.0 {renderStars()}</div>
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Slider Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div
            className={styles.sliderTrack}
            ref={sliderRef}
            onScroll={checkScroll}
          >
            {testimonials.map((item) => (
              <div key={item.id} className={styles.slideCard}>
                <Image
                  width={520}
                  height={344}
                  src={item.image}
                  alt={item.name}
                  className={styles.slideImg}
                />
                <div className={styles.slideOverlay}>
                  <div className={styles.clientInfo}>
                    <h3 className={styles.clientName}>{item.name}</h3>
                    <p className={styles.clientRole}>{item.role}</p>
                  </div>
                  <button
                    className={styles.playBtn}
                    onClick={() => setActiveVideo(item.video)}
                    aria-label="Play video"
                  >
                    <Play fill="currentColor" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controlsRow}>
            <button
              className={styles.arrow}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={styles.arrow}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className={styles.ctaRow}>
            <CTAButton text="GET STARTED" variant="filled" />
            <CTAButton text="Let's Talk" variant="outline" />
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className={styles.modalWrapper}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setActiveVideo(null)}
              >
                <X size={20} /> Close
              </button>
              <div className={styles.modalContent}>
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
