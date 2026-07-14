"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import CTAButton from '@/components/Common/CTAButton';
import styles from './PressReleaseCareer.module.css';

export default function PressReleaseCareer() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Image takes 100% width initially, shrinks to 50%
  const imgWidth = useTransform(scrollYProgress, [0, 0.4], ["100%", isMobile ? "100%" : "50%"]);
  // Text container takes 0% width initially, grows to 50%
  const textWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", isMobile ? "100%" : "50%"]);
  
  const imgHeight = useTransform(scrollYProgress, [0, 0.4], ["100vh", isMobile ? "40vh" : "70vh"]);
  const imgRadius = useTransform(scrollYProgress, [0, 0.4], ["0px", "20px"]);

  // Text content fade and slide up
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);

  return (
    <section ref={containerRef} className={styles.scrollSection}>
      <div className={styles.stickyContainer}>
        <div className={styles.flexWrapper} style={{ flexDirection: isMobile ? 'column' : 'row' }}>

          <motion.div
            className={styles.imageContainer}
            style={{
              width: imgWidth,
              height: imgHeight,
              borderRadius: imgRadius,
              overflow: 'hidden'
            }}
          >
            <Image
              src="/press-release/career.webp"
              alt="Build a career"
              fill
              className={styles.image}
              onError={(e) => {
                // Fallback image if career.jpg doesn't exist
                e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
              }}
            />
          </motion.div>

          <motion.div
            className={styles.textContainer}
            style={{
              width: textWidth,
              overflow: 'hidden', // hides text while width is small
              paddingTop: isMobile ? '30px' : '0'
            }}
          >
            <motion.div
              className={styles.textContent}
              style={{
                opacity: textOpacity,
                y: textY,
                display: 'flex',
                flexDirection: 'column',
                minWidth: isMobile ? '100%' : '50vw', // prevents squishing
                paddingLeft: isMobile ? '0' : '5vw'
              }}
            >
              <h2 className={styles.heading}>
                Build a career that’s as exciting as the world we’re shaping
              </h2>
              <p className={styles.para}>
                Grow personally and professionally in a global company that helps you unlock your full potential.
              </p>
              <div className={styles.btnWrapper}>
                <CTAButton text="Join Us" href="#" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
