"use client";
import React from 'react';
import styles from './CTAButton.module.css';
import { MessageSquare, Phone, ArrowRight } from 'lucide-react';

const CTAButton = ({ type = 'link', variant = 'filled', text, href = '#', onClick, className = '' }) => {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (type === 'popup') {
      e.preventDefault();
      console.log('Open Popup Modal');
    }
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
      default: return <img src="/button-arrow.png" alt="arrow" width="24" height="24" className={styles.icon} />;
    }
  };

  const buttonClass = `${styles.ctaButton} ${variant === 'outline' ? styles.outline : ''} ${className}`;

  if (type === 'link') {
    return (
      <a href={href} className={buttonClass} onClick={handleClick}>
        {text} {getIcon()}
      </a>
    );
  }

  return (
    <button type={type === 'submit' ? 'submit' : 'button'} className={buttonClass} onClick={handleClick}>
      {text} {getIcon()}
    </button>
  );
};

export default CTAButton;
