"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: "Anime-Inspired Animation",
    content:
      "The visual conventions and pacing of anime production applied to original character and story content. This approach focuses on expressive character acting, dynamic composition, controlled timing, and the stylistic elements that define anime-inspired visual storytelling while creating original content with its own identity."
  },
  {
    id: 2,
    title: "Cartoon Animation",
    content:
      "Classic cartoon visual language with the exaggerated timing that cel technique renders naturally. Cartoon animation uses expressive poses, dynamic movement, and carefully crafted comedic or emotional timing to create characters that feel energetic, memorable, and visually engaging."
  },
  {
    id: 3,
    title: "Cinematic Animation",
    content:
      "Dramatic, film-referenced visual composition and pacing for narrative-driven hybrid productions. Cinematic animation combines storytelling-focused performances, camera direction, emotional timing, and detailed visual presentation to create experiences designed around narrative impact."
  },
  {
    id: 4,
    title: "Stylized Character Animation",
    content:
      "Distinctive character visual design built specifically for cel or hybrid production rather than adapted from a rigged 3D asset. This style allows complete artistic control over proportions, movement language, expressions, and personality-driven animation choices."
  },
  {
    id: 5,
    title: "Retro Animation Styles",
    content:
      "Period-specific visual aesthetics referencing particular eras of animation history for brands seeking that specific nostalgic register. Retro-inspired animation recreates the visual characteristics, timing, textures, and artistic details associated with classic animation styles while applying them to modern creative projects."
  },
  {
    id: 6,
    title: "Modern Hybrid Animation",
    content:
      "Contemporary visual sensibilities applied to the traditional technique, avoiding pure nostalgia in favor of a current visual language. Modern hybrid animation combines handcrafted artistic qualities with updated design approaches to create visuals that feel fresh, relevant, and suitable for today's audiences."
  }
];

const HowWeWorkSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.howWeWorkSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className={styles.leftContent}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className={styles.heading}>
                Animation Styles We Create
              </h2>

              <p className={styles.description}>
                We create a wide range of animation styles using cel and hybrid techniques, from anime-inspired and cartoon visuals to cinematic, stylized, retro, and modern animation approaches. Each style is developed around the project's creative direction, storytelling requirements, and desired audience experience.
              </p>

              <div className={styles.buttonsWrapper}>
                <CTAButton type="button" text="Let's Talk" />
                <CTAButton
                  type="link"
                  href="tel:+1-443-487-0213"
                  text="Call Now"
                  variant="outline"
                />
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <div className={styles.accordionList}>
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={item.id}
                    className={styles.accordionItem}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className={styles.accordionTitle}>{item.title}</h3>
                      <span className={styles.accordionIcon}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                          }}
                          className={styles.accordionContentWrapper}
                        >
                          <div className={styles.accordionContent}>
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;