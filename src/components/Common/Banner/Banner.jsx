"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';
import Script from 'next/script';
import gsap from 'gsap';
import PlayButton from '../PlayButton';
import CTAButton from '../CTAButton';

const Banner = ({
  title,
  description,
  video,
  bgVideo,
  bgImage,
  slides = [],
  centered = false,
  showTrustBadges = false,
  showPlayButton = false,
  breadcrumbs = null,
  popupVideo = null,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const slideDuration = 5; // seconds
  const slidesRef = useRef([]);
  const progressRefs = useRef([]);

  // Consolidate slides: support single title/description prop or slides array
  const finalSlides = slides.length > 0 ? slides : (title ? [{ title, description }] : []);
  const isSlider = finalSlides.length > 1;

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
        const nextIndex = (index + 1) % finalSlides.length;

        // Ensure previous slides are filled
        for (let i = 0; i < index; i++) {
          if (progressRefs.current[i]) {
            gsap.set(progressRefs.current[i], { height: '100%' });
          }
        }

        // Current slide progress
        if (progressRefs.current[index]) {
          gsap.to(progressRefs.current[index], {
            height: '100%',
            duration: slideDuration,
            ease: 'none',
            onComplete: () => {
              if (index === finalSlides.length - 1) {
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
        }

        // Fade in current text
        gsap.fromTo(slidesRef.current[index],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );
      };

      animateSlide(activeSlide);
    });

    return () => ctx.revert();
  }, [activeSlide, isSlider, finalSlides.length]);

  const [bgVideoSrc, setBgVideoSrc] = useState('');
  const [popupVideoSrc, setPopupVideoSrc] = useState('');

  useEffect(() => {
    // Determine background video source
    let bgSrc = video || bgVideo;
    if (bgSrc === "/videos/home.webm" || bgSrc === "/videos/home.mp4") {
      const is3d = window.location.pathname.toLowerCase().includes('3d') ||
        window.location.pathname.toLowerCase().includes('modeling') ||
        window.location.pathname.toLowerCase().includes('industrial');

      if (is3d) {
        bgSrc = "https://dl.dropboxusercontent.com/scl/fo/d7f5pmdtiote831w4ravn/AG0FLYKtoOt3hfVuq2BFJRY/3D.mp4?dl=1&rlkey=k073vgd1ke8at52isx6ywoibw";
      } else {
        bgSrc = "https://dl.dropboxusercontent.com/scl/fo/d7f5pmdtiote831w4ravn/APr1MwnvxgJidhjKrvVy3t8/2D_01.mp4?dl=1&rlkey=k073vgd1ke8at52isx6ywoibw";
      }
    }
    setBgVideoSrc(bgSrc || '');

    // Determine popup video source (defaults to resolved bgSrc, or explicit popupVideo)
    let popSrc = popupVideo || bgSrc;
    setPopupVideoSrc(popSrc || '');
  }, [video, bgVideo, popupVideo]);

  const isVimeoBg = bgVideoSrc && (bgVideoSrc.includes('vimeo.com') || bgVideoSrc.includes('youtube.com') || bgVideoSrc.includes('player.vimeo.com'));
  const isVimeoPopup = popupVideoSrc && (popupVideoSrc.includes('vimeo.com') || popupVideoSrc.includes('youtube.com') || popupVideoSrc.includes('player.vimeo.com'));

  return (
    <>
      {showTrustBadges && (
        <Script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" strategy="lazyOnload" />
      )}
      <section className={styles.bannerSection}>
        <div className={styles.overlay}></div>
        {isVimeoBg ? (
          <div className={styles.videoWrapper}>
            <iframe loading="lazy"
              src={bgVideoSrc}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
        ) : bgVideoSrc ? (
          <video
            src={bgVideoSrc}
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

                {breadcrumbs && (
                  <div className={styles.breadcrumbs}>
                    {breadcrumbs}
                  </div>
                )}

                <div className={styles.sliderContainer}>
                  {finalSlides.map((slide, index) => (
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

                <div className={`${styles.actionRow} ${centered ? 'justify-content-center mt-5' : ''} banner-reveal`}>
                  <CTAButton
                    type="popup"
                    text="Get a Quote"
                  />
                  <CTAButton
                    type="chat"
                    text="Let's Talk"
                    variant="outline"
                  />
                </div>

                {showTrustBadges && (
                  <div className={`${styles.trustBadges} banner-reveal`} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <Image
                      src="/trust-badge.png"
                      width={329}
                      height={62}
                      sizes="(max-width: 768px) 100vw, 536px"
                      alt="Trust Badges"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="645545d36bf0e4f01cf0f44d" data-style-height="52px" data-style-width="250px" data-token="2d4eb80d-99ca-4d89-9669-a87d6ec92651">
                      <a href="https://www.trustpilot.com/review/pixelstudiosinc.com" target="_blank" rel="noopener">Trustpilot</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {(isSlider || showPlayButton) && (
          <div className={styles.progressContainer}>
            {showPlayButton && (
              <div className="mb-5 pb-5">
                <PlayButton text="SHOW REEL" onClick={() => setIsVideoPopupOpen(true)} />
              </div>
            )}

            {isSlider && finalSlides.map((_, index) => (
              <div key={index} className={styles.progressSegment}>
                <div
                  ref={el => progressRefs.current[index] = el}
                  className={styles.progressFill}
                ></div>
              </div>
            ))}
          </div>
        )}

        {/* Video Popup Modal */}
        {isVideoPopupOpen && (
          <div className={styles.videoPopupModal} onClick={() => setIsVideoPopupOpen(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={() => setIsVideoPopupOpen(false)}>×</button>
              {isVimeoPopup ? (
                <iframe loading="lazy"
                  src={popupVideoSrc}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className={styles.popupIframe}
                ></iframe>
              ) : (
                <video
                  src={popupVideoSrc}
                  controls
                  autoPlay
                  className={styles.popupVideo}
                />
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Banner;
