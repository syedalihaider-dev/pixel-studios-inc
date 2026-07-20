"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import PlayButton from './PlayButton';
import CTAButton from './CTAButton';

const Banner = ({
  slides = [],
  bgVideo,
  bgImage,
  centered = false,
  showTrustBadges = false,
  showPlayButton = false,
  actions = []
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideDuration = 5; // seconds
  const slidesRef = useRef([]);
  const progressRefs = useRef([]);
  const isSlider = slides.length > 1;

  useEffect(() => {
    // Initial entrance animation
    const tl = gsap.timeline();
    tl.fromTo('.banner-reveal',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    if (!isSlider) {
      if (slidesRef.current[0]) {
        gsap.set(slidesRef.current[0], { opacity: 1, visibility: 'visible', position: 'relative' });
      }
      return;
    }

    let ctx = gsap.context(() => {
      // Reset progress bars
      gsap.set(progressRefs.current, { height: '0%' });

      const animateSlide = (index) => {
        const nextIndex = (index + 1) % slides.length;

        // Ensure previous slides are filled
        for (let i = 0; i < index; i++) {
          gsap.set(progressRefs.current[i], { height: '100%' });
        }

        // Current slide progress
        gsap.to(progressRefs.current[index], {
          height: '100%',
          duration: slideDuration,
          ease: 'none',
          onComplete: () => {
            if (index === slides.length - 1) {
              // Reset all for the next loop
              gsap.set(progressRefs.current, { height: '0%' });
            }
            gsap.to(slidesRef.current[index], {
              opacity: 0,
              y: -20,
              duration: 0.5,
              onComplete: () => setActiveSlide(nextIndex)
            });
          }
        });

        // Fade in current text
        gsap.fromTo(slidesRef.current[index],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );
      };

      animateSlide(activeSlide);
    });

    return () => ctx.revert();
  }, [activeSlide, isSlider, slides.length]);

  return (
    <section className={styles.bannerSection}>
      <div className={styles.overlay}></div>
      {bgVideo ? (
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgMedia}
        />
      ) : bgImage ? (
        <img src={bgImage} alt="Banner Background" className={styles.bgMedia} />
      ) : null}

      <div className="container position-relative h-100">
        <div className={`row h-100 align-items-center ${centered ? 'justify-content-center' : ''}`}>
          <div className={centered ? "col-lg-10" : "col-lg-11"}>
            <div className={`${styles.contentCol} ${centered ? styles.centered : ''} banner-reveal`}>

              <div className={styles.sliderContainer}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    ref={el => slidesRef.current[index] = el}
                    className={`${styles.slide} ${!isSlider || index === activeSlide ? styles.active : ''}`}
                    style={{ position: (!isSlider || index === activeSlide) ? 'relative' : 'absolute' }}
                  >
                    {index === 0 ? (
                      <h1 className={styles.heading}>{slide.title}</h1>
                    ) : (
                      <h2 className={styles.heading}>{slide.title}</h2>
                    )}
                    <p className={`${styles.description} scroll_block`}>
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {actions && actions.length > 0 && (
                <div className={`${styles.actionRow} ${centered ? 'justify-content-center mt-5' : ''} banner-reveal`}>
                  {actions.map((action, idx) => (
                    <CTAButton
                      key={idx}
                      type={action.type || 'link'}
                      text={action.text}
                      href={action.href}
                      variant={action.variant}
                    />
                  ))}
                </div>
              )}

              {showTrustBadges && (
                <div className={`${styles.trustBadges} banner-reveal`}>
                  <Image
                    src="/trust-badges.png"
                    width={536}
                    height={62}
                    alt="Trust Badges"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isSlider && (
        <div className={styles.progressContainer}>
          {showPlayButton && (
            <div className="mb-5 pb-5">
              <PlayButton text="SHOW REEL" />
            </div>
          )}

          {slides.map((_, index) => (
            <div key={index} className={styles.progressSegment}>
              <div
                ref={el => progressRefs.current[index] = el}
                className={styles.progressFill}
              ></div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Banner;
