"use client";
import React from 'react';
import Link from 'next/link';
import styles from './LocationListSection.module.css';

const locations = [
  // { state: 'Animation Studio in Florida', description: 'Hire Animators in Florida', path: '/animation-studio-florida' },
  { state: 'Animation Studio in San Francisco', description: 'Hire Animators in San Francisco', path: '/animation-studio-san-francisco' },
  { state: 'Animation Studio in Washington DC', description: 'Hire Animators in Washington DC', path: '/animation-studio-washington-dc' },
  { state: 'Animation Studio in Los Angeles', description: 'Hire Animators in Los Angeles', path: '/animation-studio-los-angeles' },
  { state: 'Animation Studio in Dallas', description: 'Hire Animators in Dallas', path: '/animation-studio-dallas' },
  { state: 'Animation Studio in Houston', description: 'Hire Animators in Houston', path: '/animation-studio-houston' },
  { state: 'Animation Studio in Austin', description: 'Hire Animators in Austin', path: '/animation-studio-austin' },
  { state: 'Animation Studio in Chicago', description: 'Hire Animators in Chicago', path: '/animation-studio-chicago' },
  { state: 'Animation Studio in New York', description: 'Hire Animators in NYC', path: '/animation-studio-new-york' },
  // { state: 'Animation Studio in New Jersey', description: 'Hire Animators in New Jersey', path: '#' },
  // { state: 'Animation Studio in Texas', description: 'Hire Animators in Texas', path: '#' },
  // { state: 'Animation Studio in San Diego', description: 'Hire Animators in San Diego', path: '#' },
  // { state: 'Animation Studio in Atlanta', description: 'Hire Animators in Atlanta', path: '#' },
  { state: 'Animation Studio in Denver', description: 'Hire Animators in Denver', path: '/animation-studio-denver' },
  // { state: 'Animation Studio in Indianapolis', description: 'Hire Animators in Indianapolis', path: '#' },
  { state: 'Animation Studio in California', description: 'Hire Animators in California', path: '/animation-studio-california' },
  { state: 'Animation Studio in Boston', description: 'Hire Animators in Boston', path: '/animation-studio-boston' },
  { state: 'Animation Studio in Dubai', description: 'Hire Animators in Dubai', path: '/animation-studio-dubai' },
  { state: 'Animation Studio in Seattle', description: 'Hire Animators in Seattle', path: '/animation-studio-seattle' },
  { state: 'Animation Studio in Toronto', description: 'Hire Animators in Toronto', path: '/animation-studio-toronto' },
  { state: 'Animation Studio in UK', description: 'Hire Animators in UK', path: '/animation-studio-uk' },
  { state: 'Animation Studio in Miami', description: 'Hire Animators in Miami', path: '/animation-studio-miami' },
];

const LocationListSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <h2 className={styles.mainHeading}>Our Locations</h2>
          </div>
        </div>
        <div className="row g-4">
          {locations.map((loc, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <Link href={loc.path} className={styles.boxLink}>
                <div className={styles.locationBox}>
                  <h3 className={styles.boxHeading}>{loc.state}</h3>
                  <p className={styles.boxPara}>{loc.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationListSection;
