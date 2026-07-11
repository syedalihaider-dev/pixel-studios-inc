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
                <h1 className={styles.heading}>Professional 2D Animation Services in the USA</h1>
                <p className={styles.description}>
                  Why do most brands walk away from their 2D animation investment with a video their marketing team likes and their sales team never uses? Because most 2D animation studios are hired to produce something visually competent, and visual competence is not the same as commercial usefulness.
                </p>
              </div>

              <div className={`mt-5 ${styles.actionRow}`}>
                <CTAButton type="link" text="Learn More" href="/services" />
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
