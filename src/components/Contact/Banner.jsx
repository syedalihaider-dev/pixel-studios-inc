"use client";
import React from 'react';
import styles from './Banner.module.css';
import CTAButton from '../Common/CTAButton';
import PlayButton from '../Common/PlayButton';

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.overlay}></div>
      <div className={styles.videoWrapper}>
        <iframe
          src="https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className={styles.bgImage}
        ></iframe>
      </div>

      <div className="container position-relative h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-11">
            <div className={`${styles.contentCol}`}>
              <div className={styles.staticContent}>
                <h1 className={styles.heading}>Let’s Bring Your Ideas to Life Together</h1>
                <p className={styles.description}>
                  Ready to start your next project? Whether you’re looking for a quote, curious about our services, or just want to chat about animation, we’d love to hear from you.
                </p>
              </div>

              <div className={`mt-5 ${styles.actionRow}`}>
                <CTAButton type="link" text="Get a Quote" href="#contactForm" />
                <CTAButton type="popup" variant="outline" text="Let's Talk" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
