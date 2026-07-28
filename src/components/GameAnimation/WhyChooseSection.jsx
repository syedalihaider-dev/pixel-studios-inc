"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyChooseSection.module.css';

const features = [
  {
    title: "Idle Animations",
    text: "Subtle ambient motion that communicates a character is alive and present when the player is not actively controlling them.",
    icon: "/industry/services-icon-01.png",
  },
  {
    title: "Walk Cycles",
    text: "Locomotion cycles with correct weight shift, arm swing relationship, and the pace calibrated to the game's movement speed.",
    icon: "/industry/services-icon-05.png",
  },
  {
    title: "Run Cycles",
    text: "High-energy locomotion with the secondary motion and body lean that communicates speed and momentum.",
    icon: "/industry/services-icon-02.png",
  },
  {
    title: "Jump Animations",
    text: "Anticipation, airborne, and landing phases, with the squash and stretch that make a jump feel physical rather than scripted.",
    icon: "/industry/services-icon-06.png",
  },
  {
    title: "Attack Animations",
    text: "Attack cycles with proper anticipation phases, contact frames, and recovery that give the player satisfaction feedback at the moment of impact.",
    icon: "/industry/services-icon-03.png",
  },
  {
    title: "Death Animations",
    text: "Character death animations that communicate finality through physical response rather than state-switched ragdoll.",
    icon: "/industry/services-icon-08.png",
  },
  {
    title: "Interaction Animations",
    text: "Object interaction animations with the physical accuracy that makes reaching for a door handle feel connected to the actual geometry.",
    icon: "/industry/services-icon-04.png",
  },
  {
    title: "Spell and Ability Animations",
    text: "Ability animations with charge-up, release, and recovery phases that communicate the power and consequence of each ability.",
    icon: "/industry/services-icon-07.png",
  },
  {
    title: "Vehicle Animations",
    text: "Vehicle animation, including suspension response, articulation, and the secondary motion that makes a vehicle feel like it has mass.",
    icon: "/industry/services-icon-01.png",
  },
  {
    title: "Weapon Animations",
    text: "Weapon handling animation with the weight, recoil, and reload mechanics that make a weapon feel satisfying to use.",
    icon: "/industry/services-icon-05.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function WhyChooseSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Game Animation Types We Create
          </h2>

          <p className={styles.description}>
            Every animation type serves a specific gameplay function. Here is what we build and what each animation needs to achieve.
          </p>
        </motion.div>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="col-lg-6 col-md-12" variants={itemVariants}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={108}
                    height={108}
                    className={styles.icon}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardText}>{feature.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
