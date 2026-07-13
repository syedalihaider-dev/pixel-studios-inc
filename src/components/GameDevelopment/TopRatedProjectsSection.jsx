"use client";
import React, { useState } from 'react';
import styles from './TopRatedProjectsSection.module.css';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    bg: '/game-development/project-01-bg.png',
    logo: '/game-development/project-01-logo.png',
    text: 'The official app of Florence for tourists and citizens: discover the city and its surroundings through events, unusual itineraries and personalizable experiences.'
  },
  {
    id: 2,
    bg: '/game-development/project-01-bg.png',
    logo: '/game-development/project-01-logo.png',
    text: 'The official app of Florence for tourists and citizens: discover the city and its surroundings through events, unusual itineraries and personalizable experiences.'
  },
  {
    id: 3,
    bg: '/game-development/project-01-bg.png',
    logo: '/game-development/project-01-logo.png',
    text: 'The official app of Florence for tourists and citizens: discover the city and its surroundings through events, unusual itineraries and personalizable experiences.'
  }
];

const TopRatedProjectsSection = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className={styles.section}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-10">
            <h2 className={styles.mainHeading}>The Top-Rated Projects</h2>
            <p className={styles.mainParagraph}>
              Our portfolio includes mobile games, PC titles, AR experiences, VR applications, and AAA art outsourcing across action, RPG, strategy, educational, casual, and simulation genres.
            </p>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          {projects.map((project) => {
            const isActive = activeId === project.id;
            return (
              <div
                key={project.id}
                className={`${styles.card} ${isActive ? styles.activeCard : ''}`}
                style={{ backgroundImage: `url(${project.bg})` }}
                onClick={() => setActiveId(project.id)}
              >
                <div className={`${styles.cardContent} ${isActive ? styles.activeContent : ''}`}>
                  <img src={project.logo} alt="Project Logo" className={styles.logo} />
                  <p className={styles.cardText}>{project.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.dotsContainer}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.dot} ${activeId === project.id ? styles.activeDot : ''}`}
              onClick={() => setActiveId(project.id)}
            ></div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TopRatedProjectsSection;
