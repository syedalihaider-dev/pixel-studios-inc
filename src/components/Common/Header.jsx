"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import CTAButton from './CTAButton';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about-us' },
  { name: 'OUR SERVICES', path: '/#' },
  { name: 'CASE STUDY', path: '/case-study' },
  { name: 'BLOGS', path: '/#' },
  { name: 'PRESS RELEASE', path: '/#' },
  { name: 'LOCATION', path: '/#' },
  { name: 'INDUSTRIES', path: '/#' },
  { name: 'OUR WORK', path: '/our-work' },
  { name: 'CONTACT US', path: '/#' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className="container-fluid">
        <div className={`${styles.headerInner} ${scrolled ? styles.scrolled : ''}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.webp"
              alt="Pixel Studios Logo"
              width={500}
              height={250}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="ms-3">
              <CTAButton type="link" href="/get-started" text="GET STARTED" />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Offcanvas */}
      <div className={`${styles.offcanvas} ${mobileMenuOpen ? styles.open : ''}`}>
        <button className={styles.closeBtn} onClick={() => setMobileMenuOpen(false)}>
          <X size={32} />
        </button>
        <nav className={styles.offcanvasNav}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4">
            <CTAButton type="link" href="#" text="GET STARTED" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
