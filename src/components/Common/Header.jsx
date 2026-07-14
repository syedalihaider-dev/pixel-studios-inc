"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import CTAButton from './CTAButton';

const navData = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about-us' },
  {
    name: 'SERVICES',
    path: '#',
    isMegaMenu: true,
    megaMenuLayout: 'services',
    columns: [
      {
        sections: [
          {
            heading: '2D Animation Services',
            headingPath: '/services/2d-animation',
            items: [
              { name: 'Explainer Video Production', path: '#' },
              { name: 'Motion Graphics Services', path: '#' },
              { name: 'Whiteboard Animation', path: '#' },
              { name: 'Social Media Animation', path: '#' },
              { name: 'Educational Video Production', path: '#' },
              { name: 'Animated Commercials', path: '#' },
              { name: 'Cartoon Animation', path: '#' },
              { name: 'Logo Animation', path: '#' },
              { name: 'Cel Animation', path: '#' },
            ]
          },
          {
            heading: 'Product Visualization Services',
            items: [
              { name: 'CGI Product Visualization', path: '#' }
            ]
          }
        ]
      },
      {
        sections: [
          {
            heading: '3D Animation Services',
            headingPath: '#',
            items: [
              { name: '3D Product Animation', path: '#' },
              { name: '3D Product Modeling', path: '#' },
              { name: 'Character Animation', path: '#' },
              { name: '3D Character Design', path: '#' },
              { name: '3D Environment Design', path: '#' },
              { name: '3D Illustration Services', path: '#' },
              { name: 'Industrial Animation', path: '#' },
              { name: 'Technical Animation', path: '#' },
              { name: 'Manufacturing Animation', path: '#' },
              { name: 'Medical Animation', path: '#' },
              { name: 'Legal Graphics Animation', path: '#' },
              { name: 'Architectural Rendering', path: '#' },
              { name: 'Photorealistic Rendering', path: '#' },
            ]
          }
        ]
      },
      {
        sections: [
          {
            heading: 'Video Production Services',
            items: [
              { name: 'Corporate Video Production', path: '#' },
              { name: 'Product Demo Videos', path: '#' },
              { name: 'Live Action Video Production', path: '#' },
              { name: 'Training Video Production', path: '#' },
            ]
          },
        ]
      },
      {
        sections: [
          {
            heading: 'Video Editing Services',
            items: [] // No items listed in reference for this one specifically, but structure exists
          },
          {
            heading: 'Game Development & Animation',
            headingPath: '/game-development',
            items: [
              { name: 'Game Animation', path: '#' },
              { name: 'Game Trailer Production', path: '#' },
              { name: '3D Game Models', path: '#' },
              { name: 'Character Design', path: '#' },
              { name: 'Environment Design', path: '#' },
              { name: 'Game Level Design', path: '#' },
            ]
          },
          {
            heading: 'AI Animation Services',
            items: []
          }
        ]
      }
    ]
  },
  {
    name: 'CASE STUDY',
    path: '/case-study',
    isMegaMenu: true,
    megaMenuLayout: 'grid',
    items: [
      { name: 'Tech Startup Launch', path: '#' },
      { name: 'Fintech Rebranding', path: '#' },
      { name: 'Healthcare App', path: '#' },
      { name: 'E-commerce Redesign', path: '#' },
      { name: 'Real Estate Portal', path: '#' },
      { name: 'Education Platform', path: '#' },
      { name: 'Gaming Community', path: '#' },
      { name: 'SaaS Dashboard', path: '#' },
      { name: 'Logistics System', path: '#' },
      { name: 'Travel Booking', path: '#' }
    ]
  },
  { name: 'BLOGS', path: '#' },
  { name: 'PRESS RELEASE', path: '/press-release' },
  {
    name: 'LOCATION',
    path: '/location',
    isMegaMenu: true,
    megaMenuLayout: 'grid',
    items: [
      { name: 'New York', path: '#' },
      { name: 'London', path: '#' },
      { name: 'Dubai', path: '#' },
      { name: 'Sydney', path: '#' },
      { name: 'Toronto', path: '#' },
      { name: 'Los Angeles', path: '#' },
      { name: 'Chicago', path: '#' },
      { name: 'Paris', path: '#' },
      { name: 'Berlin', path: '#' },
      { name: 'Tokyo', path: '#' },
      { name: 'Singapore', path: '#' },
      { name: 'Hong Kong', path: '#' },
      { name: 'Mumbai', path: '#' },
      { name: 'San Francisco', path: '#' },
      { name: 'Miami', path: '#' }
    ]
  },
  {
    name: 'INDUSTRIES',
    path: '#',
    isMegaMenu: true,
    megaMenuLayout: 'grid',
    items: [
      { name: 'BioTech Animation', path: '#' },
      { name: 'Video Production', path: '#' },
      { name: 'Game Design', path: '#' },
      { name: 'Logistics Animation', path: '#' },
      { name: 'Real Estate Animation', path: '#' },
      { name: 'Saas Explainer Videos', path: '#' },
      { name: 'Insurance Animation', path: '#' },
      { name: 'Automotive', path: '#' },
      { name: 'Advertising', path: '#' },
      { name: 'Architecture', path: '#' },
      { name: 'Education', path: '#' },
      { name: 'Enterprise', path: '#' },
      { name: 'Entertainment', path: '#' },
      { name: 'Fintech Animation', path: '#' },
      { name: 'Finance', path: '#' },
      { name: 'Gaming', path: '#' },
      { name: 'Government', path: '#' },
      { name: 'Healthcare', path: '#' },
      { name: 'Manufacturing', path: '#' },
      { name: 'Medical', path: '#' },
      { name: 'Non-Profits', path: '#' },
      { name: 'Real Estate', path: '#' },
      { name: 'Technology', path: '#' },
    ]
  },
  { name: 'OUR WORK', path: '/our-work' },
  { name: 'CONTACT US', path: '#' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98, pointerEvents: 'none' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: 'auto',
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.98,
    transition: { duration: 0.2 }
  }
};

const mobileMenuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 200, damping: 25 }
  },
  exit: {
    x: '100%',
    transition: { type: 'tween', duration: 0.4, ease: 'easeInOut' }
  }
};

const accordionVariants = {
  hidden: { height: 0, opacity: 0, overflow: 'hidden' },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleAccordion = (name) => {
    setMobileAccordion(mobileAccordion === name ? null : name);
  };

  return (
    <header className={styles.headerContainer} onMouseLeave={handleMouseLeave}>
      <div className="container-fluid">
        <motion.div
          className={`${styles.headerInner} ${scrolled ? styles.scrolled : ''}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
        >
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.webp"
              alt="Pixel Studios Logo"
              width={500}
              height={250}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            <div className={styles.navLinksWrapper}>
              {navData.map((link) => (
                <div
                  key={link.name}
                  className={styles.navItem}
                  onMouseEnter={() => handleMouseEnter(link.name)}
                >
                  {link.isMegaMenu || link.isDropdown ? (
                    <div className={`${styles.navLink} ${pathname === link.path && link.path !== '#' ? styles.active : ''}`}>
                      {link.path !== '#' ? (
                        <Link href={link.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {link.name}
                        </Link>
                      ) : (
                        link.name
                      )}
                      <ChevronDown size={14} className={`${styles.chevron} ${activeDropdown === link.name ? styles.open : ''}`} />
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Render Mega Menus relative to navLinksWrapper */}
              <AnimatePresence>
                {navData.map((link) => {
                  if (activeDropdown !== link.name) return null;

                  if (link.isMegaMenu) {
                    return (
                      <motion.div
                        key={`${link.name}-mega`}
                        className={styles.megaMenu}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onMouseEnter={() => handleMouseEnter(link.name)}
                      >
                        {link.megaMenuLayout === 'services' && (
                          <div className={styles.servicesGrid}>
                            {link.columns.map((col, colIdx) => (
                              <div key={colIdx} className={styles.servicesColumn}>
                                {col.sections.map((section, secIdx) => (
                                  <div key={secIdx} className={styles.servicesSection}>
                                    <div className={styles.sectionHeading}>
                                      {section.headingPath ? (
                                        <Link href={section.headingPath} style={{ color: 'inherit', textDecoration: 'none' }}>
                                          {section.heading}
                                        </Link>
                                      ) : (
                                        section.heading
                                      )}
                                    </div>
                                    {section.items.map((item, itemIdx) => (
                                      <Link key={itemIdx} href={item.path} className={styles.megaMenuItem}>
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {link.megaMenuLayout === 'grid' && (
                          <div className={styles.industriesGrid}>
                            {link.items.map((item, itemIdx) => (
                              <Link key={itemIdx} href={item.path} className={styles.megaMenuItem}>
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  }

                  return null;
                })}
              </AnimatePresence>
            </div>

            <div className="ms-3">
              <CTAButton type="link" href="/get-started" text="GET STARTED" />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(true)} aria-label="Open Menu">
            <Menu size={32} />
          </button>
        </motion.div>
      </div>

      {/* Mobile Fullscreen Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.offcanvas}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button className={styles.closeBtn} onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu">
              <X size={36} />
            </button>
            <nav className={styles.offcanvasNav}>
              {navData.map((link) => (
                <div key={link.name} className={styles.mobileNavItem}>
                  {link.isMegaMenu || link.isDropdown ? (
                    <>
                      <button
                        className={`${styles.mobileNavLink} ${pathname === link.path && link.path !== '#' ? styles.active : ''}`}
                        onClick={() => toggleAccordion(link.name)}
                      >
                        {link.name}
                        <ChevronDown size={20} className={`${styles.chevron} ${mobileAccordion === link.name ? styles.open : ''}`} />
                      </button>

                      <AnimatePresence>
                        {mobileAccordion === link.name && (
                          <motion.div
                            variants={accordionVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className={styles.mobileAccordionContent}
                          >
                            {/* Mobile Services */}
                            {link.megaMenuLayout === 'services' && link.columns.map((col, colIdx) => (
                              <div key={`m-col-${colIdx}`}>
                                {col.sections.map((sec, secIdx) => (
                                  <div key={`m-sec-${secIdx}`}>
                                    <div className={styles.mobileSubHeading}>
                                      {sec.headingPath ? (
                                        <Link href={sec.headingPath} style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
                                          {sec.heading}
                                        </Link>
                                      ) : (
                                        sec.heading
                                      )}
                                    </div>
                                    {sec.items.map((item, itemIdx) => (
                                      <Link
                                        key={`m-item-${itemIdx}`}
                                        href={item.path}
                                        className={styles.mobileSubItem}
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ))}

                            {/* Mobile Grid/Industries/Locations/Case Studies */}
                            {link.megaMenuLayout === 'grid' && link.items.map((item, itemIdx) => (
                              <Link
                                key={`m-grid-${itemIdx}`}
                                href={item.path}
                                className={styles.mobileSubItem}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.path}
                      className={`${styles.mobileNavLink} ${pathname === link.path ? styles.active : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-5 mb-4">
                <CTAButton type="link" href="/get-started" text="GET STARTED" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
