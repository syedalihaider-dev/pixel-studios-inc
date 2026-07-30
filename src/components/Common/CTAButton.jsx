"use client";
import React from 'react';
import styles from './CTAButton.module.css';
import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CTAButton = ({ type = 'link', variant = 'filled', text, href = '#', onClick, className = '' }) => {
  const handleClick = (e) => {
    const isPopupTrigger = text && (
      text.toLowerCase().includes('get started') || 
      text.toLowerCase().includes('learn more')
    );

    if (isPopupTrigger || type === 'popup') {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('open-global-popup'));
      }
      if (onClick) onClick(e);
      return;
    }

    if (onClick) onClick(e);
    if (type === 'chat') {
      e.preventDefault();
      console.log('Open Chat Popup');
    }
    if (type === 'phone') {
      e.preventDefault();
      window.location.href = 'tel:+1234567890'; // Placeholder
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'chat': return <MessageSquare size={18} className={styles.icon} />;
      case 'phone': return <Phone size={18} className={styles.icon} />;
      default: return <Image src="/button-arrow.png" alt="arrow" width={24} height={24} className={styles.icon} />;
    }
  };

  const buttonClass = `${styles.ctaButton} ${variant === 'outline' ? styles.outline : ''} ${className}`;

  if (type === 'link') {
    return (
      <Link href={href} className={buttonClass} onClick={handleClick}>
        {text} {getIcon()}
      </Link>
    );
  }

  return (
    <button type={type === 'submit' ? 'submit' : 'button'} className={buttonClass} onClick={handleClick}>
      {text} {getIcon()}
    </button>
  );
};

export default CTAButton;
