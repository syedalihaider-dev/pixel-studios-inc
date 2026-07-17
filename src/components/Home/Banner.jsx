"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.css';
import CTAButton from '../Common/CTAButton';
import Image from 'next/image';
import PlayButton from '../Common/PlayButton';
import gsap from 'gsap';

const slides = [
  {
    title: "Professional Video Animation Company - High Impact Animation Services",
    description: "Why do so many brands invest in animation and see almost no return? Because most animation studios are hired to make something that looks good, and looking good is not a business outcome. Your competitors have slick videos too. The ones winning with video are the ones whose content was built around what their audience actually needed to understand to take the next step. That is the gap Pixels Studios Inc. was built to close. Our premium animation services include 2D explainers, 3D immersive visualizations, whiteboard animations, and motion graphics designed to convert attention into action."
  },
  {
    title: "Your Go-To Animation Studio for Animation Services",
    description: "At Pixels Studios Inc., we operate differently. We ask what the video is supposed to accomplish before we touch the timeline. We build around your funnel, your audience's psychology, and the specific moment in the customer journey where the video will live. Our animation services run the full creative and production spectrum. Concept development, scriptwriting, character design, storyboarding, full animation, voiceover direction, sound design, and final delivery."
  },
  {
    title: "A Trusted Animation Company for 2D & 3D Animation Services That Fit Your Brand & Your Goals",
    description: "Don’t worry, Our team 2D & 3D animation services in the USA always begin with a genuine discovery process. We learn about your product, your audience, your brand voice, your market positioning, and precisely what you want a viewer to think, feel, or do after watching the video."
  }
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideDuration = 5; // seconds
  const slidesRef = useRef([]);
  const progressRefs = useRef([]);

  useEffect(() => {
    // Initial entrance animation
    const tl = gsap.timeline();
    tl.fromTo('.banner-reveal',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
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
  }, [activeSlide]);

  return (
    <section className={styles.bannerSection}>
      <div className={styles.overlay}></div>
      <video
        src="/videos/home.webm"
        autoPlay
        loop
        muted
        playsInline
        className={styles.bgImage}
      />

      <div className="container position-relative h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-11">
            <div className={`${styles.contentCol} banner-reveal`}>

              <div className={styles.sliderContainer}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    ref={el => slidesRef.current[index] = el}
                    className={`${styles.slide} ${index === activeSlide ? styles.active : ''}`}
                    style={{ position: index === activeSlide ? 'relative' : 'absolute' }}
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

              <div className={`mt-5 ${styles.actionRow} banner-reveal`}>
                <CTAButton type="link" text="Learn More" href="/services" />
                <CTAButton type="popup" variant="outline" text="Let's Talk" />
              </div>
              <div className="mt-5 banner-reveal">
                <Image
                  src="/trust-badges.png"
                  width={536}
                  height={62}
                  alt="Trust Badges"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.progressContainer}>
        <div className="mb-5 pb-5">
          <PlayButton text="SHOW REEL" />
        </div>

        {slides.map((_, index) => (
          <div key={index} className={styles.progressSegment}>
            <div
              ref={el => progressRefs.current[index] = el}
              className={styles.progressFill}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
