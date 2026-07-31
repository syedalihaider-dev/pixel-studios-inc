"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.css';
import CTAButton from '../Common/CTAButton';
import PlayButton from '../Common/PlayButton';
import gsap from 'gsap';

const slides = [
  {
    title: "Professional 2D Animation Services in the USA",
    description: "Why do most brands walk away from their 2D animation investment with a video their marketing team likes and their sales team never uses? Because most 2D animation studios are hired to produce something visually competent, and visual competence is not the same as commercial usefulness."
  },
  {
    title: "Award-Winning Digital Agency For Global Brands",
    description: "We craft digital experiences that engage audiences, elevate brands, and drive meaningful growth through innovative design and strategy."
  },
  {
    title: "Transform Your Vision Into Stunning Reality",
    description: "Partner with industry experts to bring your ideas to life. From concept to launch, we deliver excellence at every step of the journey."
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
        src="https://dl.dropboxusercontent.com/scl/fo/d7f5pmdtiote831w4ravn/APr1MwnvxgJidhjKrvVy3t8/2D_01.mp4?dl=1&rlkey=k073vgd1ke8at52isx6ywoibw"
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
                    <h1 className={styles.heading}>{slide.title}</h1>
                    <p className={styles.description}>{slide.description}</p>
                  </div>
                ))}
              </div>

              <div className={`mt-5 ${styles.actionRow} banner-reveal`}>
                <CTAButton type="link" text="Learn More" href="/services" />
                <CTAButton type="popup" variant="outline" text="Let's Talk" />
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
