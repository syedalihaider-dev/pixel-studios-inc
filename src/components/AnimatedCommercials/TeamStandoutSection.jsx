"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TeamStandoutSection.module.css';

const features = [
  {
    id: 1,
    title: "Product Launch Campaigns",
    description:
      "Animated commercial production for product launches where the first impression is the only impression. The commercial creates the visual identity of the product in the market before any other content exists.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Brand Awareness Campaigns",
    description:
      "Brand commercial animation at scale, across multiple formats and placements, delivering consistent messaging to audiences across every digital and broadcast channel the media plan covers.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Lead Generation Advertising",
    description:
      "Commercial animation where the creative is structured around the click, the form fill, or the trial sign-up rather than brand sentiment that cannot be attributed to a conversion event.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Customer Acquisition Campaigns",
    description:
      "Animated advertising services for new customer acquisition at a measurable cost per acquisition that justifies the production investment within the campaign window.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Social Media Marketing",
    description:
      "Social media commercial videos that generate engagement, shares, and platform algorithm distribution across TikTok, Instagram, YouTube, and LinkedIn.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Digital Advertising Campaigns",
    description:
      "Pre-roll, mid-roll, display, and paid social animated ad production built around the specific creative requirements of programmatic and direct buy digital placements.",
    icon: "/icons/experienced.png"
  },
  {
    id: 7,
    title: "App and Software Promotion",
    description:
      "Animated commercial production for app and software brands where the product exists on a screen and needs to be made visible and desirable to an audience that cannot hold it in their hands.",
    icon: "/icons/experienced.png"
  },
  {
    id: 8,
    title: "Event and Trade Show Promotion",
    description:
      "Pre-event and at-event animated commercial content that generates registration, drives booth traffic, and communicates brand positioning in an environment where attention is distributed across a hundred competing priorities.",
    icon: "/icons/experienced.png"
  }
];

const TeamStandoutSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.standoutSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="subtitle">HOW BUSINESSES USE</p>

          <h2 className={styles.mainHeading}>
            How Businesses Use <span>Animated Commercial Services?</span>
          </h2>

          <p className={styles.headerDesc}>
            Businesses use animated commercial services to launch products, build brand awareness, generate leads, acquire customers, promote apps, support digital advertising, increase social media engagement, and drive event marketing with compelling visual campaigns.
          </p>
        </motion.div>

        <div className="row">
          <div className="col-lg-6">
            <div className={styles.featuresListContainer} ref={containerRef}>
              <div className={styles.progressTrack}>
                <motion.div
                  className={styles.progressFill}
                  style={{ height: lineHeight }}
                />
              </div>

              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                    viewport={{
                      once: false,
                      margin: "-20% 0px -20% 0px"
                    }}
                  >
                    <div className={styles.featureIcon}>
                      <div className={styles.featureIconImageWrapper}>
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={64}
                          height={64}
                          style={{ objectFit: "contain" }}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        {!feature.icon && (
                          <div
                            style={{
                              width: 64,
                              height: 64,
                              backgroundColor: "rgba(0,0,0,0.1)",
                              borderRadius: "8px"
                            }}
                          />
                        )}
                      </div>

                      <h3 className={styles.featureTitle}>
                        {feature.title}
                      </h3>
                    </div>

                    <p className={styles.featureDesc}>
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.stickyColumn}>
              <motion.div
                className={styles.videoWrapper}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <iframe loading="lazy"
                  src="https://player.vimeo.com/video/1201624746?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
                  title="Animated Explainer Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStandoutSection;