"use client";
import React, { useState, useEffect } from 'react';
import styles from './FeaturedProjects.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import Image from 'next/image';

const tabs = [
  "2D Animation",
  "3D Medical Animation",
  "Healthcare Explainer Animation",
  "3D Product Animation",
  "Animated Explainer Video"
];

const caseStudiesData = [
  {
    id: 'domuzeum',
    title: "DOMUZEUM",
    description: "Pixel Studios Inc. created a fully animated, beat-synced children's music video for DoMuzeum, pairing an original song with bright character-driven 2D animation.",
    deliverables: "2D Animation",
    industry: "Kids Entertainment / Education",
    logoImage: null,
    coverImage: "/case-study/children/thumbnail.png",
    categories: ["2D Animation"],
    slug: 'domuzeum-childrens-music-video-animation',
    website: null
  },
  {
    id: 'conmed',
    title: "ConMed",
    description: "Pixel Studios Inc. produced a clinically precise 3D medical animation for ConMed's AirSeal System, visualizing an insufflation mechanism that happens entirely inside the body and cannot be filmed by any camera.",
    deliverables: "3D Medical Animation",
    industry: "Medical Device / Healthcare",
    logoImage: null,
    coverImage: "/case-study/conmed/thumbnail.png",
    categories: ["3D Medical Animation"],
    slug: 'conmed-airseal-medical-device-explainer',
    website: null
  },
  {
    id: 'rethink',
    title: "Rethink Diabetes Maine",
    description: "Working with the Maine Center for Disease Control and Prevention, Pixel Studios Inc. built a warm, character-led public health animation designed to turn passive diabetes awareness into an active risk self-assessment.",
    deliverables: "Healthcare Explainer Animation",
    industry: "Public Health / Healthcare",
    logoImage: null,
    coverImage: "/case-study/diabetes/thumbnail.png",
    categories: ["Healthcare Explainer Animation"],
    slug: 'rethink-diabetes-maine-assess-your-diabetes-risk-today',
    website: null
  },
  {
    id: 'glab',
    title: "G-Lab",
    description: "Pixel Studios Inc. delivered a full CGI 3D promo for G Lab's gaming keyboard, modeling, texturing, lighting, and animating the hardware as a photoreal hero object to sell the feel of a product no photograph could capture.",
    deliverables: "3D Product Animation",
    industry: "Gaming Hardware / Consumer Electronics",
    logoImage: null,
    coverImage: "/case-study/keyboard/thumbnail.png",
    categories: ["3D Product Animation"],
    slug: 'g-lab-gaming-keyboard-3d-product-promo',
    website: null
  },
  {
    id: 'myappointments',
    title: "My Appointments",
    description: "Pixel Studios Inc. produced a conversion-focused explainer for My Appointments, pairing clean UI-driven motion graphics with a before-and-after user story built to make prospects feel the difference scheduling software makes.",
    deliverables: "Animated Explainer Video",
    industry: "SaaS / HealthTech Scheduling",
    logoImage: null,
    coverImage: "/case-study/appointments/thumbnail.png",
    categories: ["Animated Explainer Video"],
    slug: 'my-appointments-saas-scheduling-app-explainer-video',
    website: null
  }
];

const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState("2D Animation");
  const [visibleCount, setVisibleCount] = useState(3);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered = caseStudiesData.filter(project => project.categories.includes(activeTab));
    setFilteredProjects(filtered);
    setVisibleCount(3); // reset when tab changes
  }, [activeTab]);

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section className={styles.featuredSection}>
      <div className="container">
        {/* Header Area */}
        <motion.div
          className={styles.headerArea}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.subheading}>CASE STUDY</p>
          <h2 className={styles.mainHeading}>FEATURED PROJECTS.</h2>
          <p className={styles.paragraph}>
            Full-cycle game development means we own the entire pipeline, from the first concept sketch to the day the build goes live on the platform.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <ul className={styles.tabsList}>
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`${styles.tabItem} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects List */}
        <div className={styles.projectsContainer}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, visibleCount).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.projectRow}
              >
                <div className="row align-items-center">
                  {/* Left Content */}
                  <div className="col-lg-5 mb-5 mb-lg-0">
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>

                      <div className={styles.featuresRow}>
                        <div className={styles.featureItem}>
                          <span className={styles.featureLabel}>DELIVERABLES</span>
                          <span className={styles.featureValue}>{project.deliverables}</span>
                        </div>
                        <div className={styles.featureItem}>
                          <span className={styles.featureLabel}>INDUSTRY</span>
                          <span className={styles.featureValue}>{project.industry}</span>
                        </div>
                      </div>

                      <div className={styles.actionButtons}>
                        <CTAButton type="link" text="Case Study" href={`/case-study/${project.slug}`} />
                        {project.website && (
                          <CTAButton type="link" variant="outline" text="Live Site" href={project.website} target="_blank" rel="noopener noreferrer" />
                        )}
                      </div>

                      {project.logoImage && (
                        <div className={styles.logoImageWrapper}>
                          <Image
                            src={project.logoImage}
                            alt={`${project.title} logo`}
                            width={666}
                            height={321}
                            className={styles.logoImage}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="col-lg-7">
                    <div className={styles.coverImageWrapper}>
                      <Image
                        src={project.coverImage}
                        alt={`${project.title} cover`}
                        width={870}
                        height={776}
                        className={styles.coverImage}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {filteredProjects.length > visibleCount && (
          <div className="text-center mt-5">
            <CTAButton type="button" text="Load More" onClick={loadMore} />
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
