"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  const quickLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about-us' },
    { name: 'OUR SERVICES', path: '/#' },
    { name: 'CASE STUDY', path: '/case-study' },
    { name: 'BLOGS', path: '/#' },
    { name: 'PRESS RELEASE', path: '/#' },
    { name: 'LOCATION', path: '/location' },
    { name: 'INDUSTRIES', path: '/#' },
    { name: 'OUR WORK', path: '/our-work' },
    { name: 'CONTACT US', path: '/#' },
  ];

  const serviceLinks = [
    { name: '2D Animation', path: '/services/2d-animation' },
    { name: 'Video Editing', path: '/#' },
    { name: '3D Animation', path: '/#' },
    { name: 'Logo Animation', path: '/#' },
    { name: 'AI-Assisted Animations', path: '/#' },
    { name: 'Infographics', path: '/#' },
    { name: 'Whiteboard Animation', path: '/#' },
    { name: 'Architectural Visualization', path: '/#' },
    { name: 'Legal Animation', path: '/#' },
    { name: 'Hybrid & Cel Animation', path: '/#' },
    { name: 'Motion Graphics', path: '/#' },
    { name: 'CGI & VFX', path: '/#' },
    { name: '2D & 3D Explainer Videos', path: '/#' },
  ];

  return (
    <footer className={styles.footerContainer}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.footerGrid}>
          {/* Column 1: Logo & Paragraph */}
          <div className={styles.footerCol}>
            <Link href="/" className={styles.logoLink}>
              <Image src="/logo.webp" alt="Pixel Studios" width={500} height={250} />
            </Link>
            <p className={styles.aboutText}>
              We are a creative digital agency specializing in animation and video production. Let us help you tell your story through captivating visuals.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerCol}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className={`${styles.footerCol} ${styles.servicesCol}`}>
            <h3 className={styles.heading}>Services Links</h3>
            <ul className={styles.servicesList}>
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className={styles.footerCol}>
            <h3 className={styles.heading}>Contact Info</h3>
            <ul className={styles.contactList}>
              <li>
                <Phone className={styles.contactIcon} size={18} />
                <span>+1-443-487-0213</span>
              </li>
              <li>
                <Mail className={styles.contactIcon} size={18} />
                <span>info@pixelstudiosinc.com</span>
              </li>
              <li className={styles.locationItem}>
                <MapPin className={styles.contactIcon} size={18} />
                <span>Pierrepont Plaza, 12th Floor, Brooklyn, NY 11201, United States</span>
              </li>
            </ul>
            <div className={styles.socialLinks}>
              <Link href="#">
                <Image src="/icons/linkedin -icon.png" alt="LinkedIn" width={20} height={20} />
              </Link>
              <Link href="#">
                <Image src="/icons/youtube-icon.png" alt="YouTube" width={20} height={20} />
              </Link>
              <Link href="#">
                <Image src="/icons/vimeo-icon.png" alt="Vimeo" width={20} height={20} />
              </Link>
              <Link href="#">
                <Image src="/icons/instagram-icon.png" alt="Instagram" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightArea}>
            <p>© Copyright 2026 - Pixel studios inc.</p>
            <div className={styles.divider}></div>
            <div className={styles.bottomLinks}>
              <Link href="/terms">Terms of Use</Link>
              <span className={styles.dot}>•</span>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className={styles.paymentMethods}>
            <Image src="/paymeny-method.png" alt="Payment Methods" width={640} height={46} />
          </div>
        </div>
      </motion.div>

      {/* Marquee Background Text */}
      <div className={styles.marqueeWrapper}>
        <motion.div
          className={styles.marqueeTrack}
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          <h1 className={styles.marqueeText}>PIXEL STUDIOS INC. PIXEL STUDIOS INC. PIXEL STUDIOS INC. PIXEL STUDIOS INC. </h1>
          <h1 className={styles.marqueeText}>PIXEL STUDIOS INC. PIXEL STUDIOS INC. PIXEL STUDIOS INC. PIXEL STUDIOS INC. </h1>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
