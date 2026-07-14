"use client";
import React, { useEffect } from 'react';
import styles from './Banner.module.css';
import CTAButton from '../Common/CTAButton';
import PlayButton from '../Common/PlayButton';
import gsap from 'gsap';

const Banner = () => {
  useEffect(() => {
    // Initial entrance animation
    const tl = gsap.timeline();
    tl.fromTo('.banner-reveal',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

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
              <h1 className={styles.heading}>Locations We Serve</h1>
              <p className={styles.description}>
                We are a team of passionate storytellers and visual artists dedicated to bringing ideas to life. With years of experience in the animation industry, we combine creativity, technology, and strategic thinking to deliver exceptional results for our clients across various locations.
              </p>

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
      </div>
    </section>
  );
};

export default Banner;
