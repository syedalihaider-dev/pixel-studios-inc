"use client";

import React, { useState, useEffect } from "react";
import { submitLead } from "@/utils/formSubmit";
import { brandInfo } from "@/constants/brandInfo";

export const metadata = {
  title: "Animated Explainer Video Services for Businesses | Pixel Studios",
  description:
    "Pixel Studios creates custom animated explainer videos that simplify complex ideas, engage audiences, and help businesses drive more conversions. Get a quote.",

  robots: {
    index: false,
    follow: false,
  },
};

export default function AnimatedExplainerVideosLP() {
  const phone = brandInfo.phone.display;
  const phoneHref = brandInfo.phone.href;
  const email = brandInfo.email.display;
  const fb = brandInfo.socials.facebook;
  const linkedin = brandInfo.socials.linkedin;
  const youtube = "https://www.youtube.com/@pixelstudiosinc8447"; // Keep original or update to brandInfo if exists
  const instagram = brandInfo.socials.instagram;
  const basesurl = "/animated-explainer-videos/assets/";

  // State
  const [scrolled, setScrolled] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState("tabs-2d");
  const [activePortfolioTab, setActivePortfolioTab] = useState("tabs-2d-anim");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  // Lead forms state
  const [bannerForm, setBannerForm] = useState({ name: "", email: "", phone: "", msg: "" });
  const [popupForm, setPopupForm] = useState({ name: "", email: "", phone: "", msg: "" });

  // Process animation state
  const [activeProcessBox, setActiveProcessBox] = useState(0);

  // Dynamic CSS import
  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "/animated-explainer-videos/assets/css/m-style.css";
    link1.id = "lp-m-style";

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "/animated-explainer-videos/assets/css/style.css";
    link2.id = "lp-style";

    const link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "/animated-explainer-videos/assets/css/lp-additional.css";
    link3.id = "lp-additional";

    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);

    // Sticky header
    const handleScroll = () => {
      setScrolled(window.scrollY >= 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Auto popup modal after 10 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000);

    // Process box loop (every 5 seconds)
    const processInterval = setInterval(() => {
      setActiveProcessBox((prev) => (prev + 1) % 5);
    }, 5000);

    return () => {
      const l1 = document.getElementById("lp-m-style");
      const l2 = document.getElementById("lp-style");
      const l3 = document.getElementById("lp-additional");
      if (l1) l1.remove();
      if (l2) l2.remove();
      if (l3) l3.remove();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      clearInterval(processInterval);
    };
  }, []);

  // Form submit handlers
  const handleBannerSubmit = (e) => {
    e.preventDefault();
    submitLead({
      name: bannerForm.name,
      email: bannerForm.email,
      phone: bannerForm.phone,
      msg: bannerForm.msg,
      Form_name: "Banner Form (LP)",
      endpoint: "/api/send-lead-lp"
    });
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    submitLead({
      name: popupForm.name,
      email: popupForm.email,
      phone: popupForm.phone,
      msg: popupForm.msg,
      Form_name: "Popup Form (LP)",
      endpoint: "/api/send-lead-lp"
    });
  };

  // Convert youtube watch URL to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return "";
    let videoId = "";
    if (url.includes("shorts/")) {
      videoId = url.split("shorts/")[1]?.split("?")[0];
    } else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1]?.split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  // Portfolio items data
  const portfolios = {
    "tabs-2d-anim": {
      row1: [
        { img: "2d/01.webp", url: "https://www.youtube.com/watch?v=wKoZ-JiEsug&list=PLWDgB8DFY0n2gQLGSPa7skaQI6-6JlqJk&index=5" },
        { img: "2d/02.webp", url: "https://www.youtube.com/watch?v=-j0ZaDLXPxA" },
        { img: "2d/03.webp", url: "https://www.youtube.com/watch?v=yYZJv_ovARk&list=PLWDgB8DFY0n2ln7V79rOj-40moXbfI9d8" },
        { img: "2d/04.webp", url: "https://www.youtube.com/watch?v=ls0oGJVfzJU&list=PLWDgB8DFY0n2gQLGSPa7skaQI6-6JlqJk" }
      ],
      row2: [
        { img: "2d/05.webp", url: "https://www.youtube.com/watch?v=5szUbNTIz5s" },
        { img: "2d/06.webp", url: "https://www.youtube.com/watch?v=YWdB5wrT5hA&list=PLWDgB8DFY0n2xNfIwoVxTFx16wbvYVD0E" },
        { img: "2d/07.webp", url: "https://www.youtube.com/watch?v=H38u9NW7Tn0&list=PLWDgB8DFY0n2gQLGSPa7skaQI6-6JlqJk&index=3" },
        { img: "2d/08.webp", url: "https://www.youtube.com/watch?v=j-ThBatU7aY&list=PLWDgB8DFY0n2gQLGSPa7skaQI6-6JlqJk&index=4" }
      ]
    },
    "tabs-3d-anim": {
      row1: [
        { img: "3d/01.webp", url: "https://www.youtube.com/watch?v=o2EkkBCHHoc&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=7" },
        { img: "3d/02.webp", url: "https://www.youtube.com/shorts/Vmdh1Rjf_rk" },
        { img: "3d/03.webp", url: "https://www.youtube.com/watch?v=kHfQ-kS8hq8&list=PLWDgB8DFY0n260WL7XMAwgY9HUyUNx2G3&index=3" },
        { img: "3d/04.webp", url: "https://www.youtube.com/watch?v=0RnPxdNhGMY&list=PLWDgB8DFY0n260WL7XMAwgY9HUyUNx2G3&index=2" }
      ],
      row2: [
        { img: "3d/05.webp", url: "https://www.youtube.com/watch?v=7NR0moLlobI&list=PLWDgB8DFY0n1gGugoYlrtEOzeTA1CwqTn&index=4" },
        { img: "3d/06.webp", url: "https://www.youtube.com/watch?v=ZpqBzHcYLZQ&list=PLWDgB8DFY0n1gGugoYlrtEOzeTA1CwqTn&index=3" },
        { img: "3d/07.webp", url: "https://www.youtube.com/watch?v=Kj0lvjOwbRY&list=PLWDgB8DFY0n1gGugoYlrtEOzeTA1CwqTn&index=2" },
        { img: "3d/08.webp", url: "https://www.youtube.com/watch?v=u72fzdT_VuI&list=PLWDgB8DFY0n1gGugoYlrtEOzeTA1CwqTn&index=1" }
      ]
    },
    "tabs-explainer": {
      row1: [
        { img: "explainer/01.webp", url: "https://www.youtube.com/watch?v=20Jxj_odOAQ&list=PLWDgB8DFY0n260WL7XMAwgY9HUyUNx2G3" },
        { img: "explainer/02.webp", url: "https://www.youtube.com/watch?v=jjwkuSa41nE&list=PLWDgB8DFY0n2xNfIwoVxTFx16wbvYVD0E&index=3" },
        { img: "explainer/03.webp", url: "https://www.youtube.com/watch?v=ls0oGJVfzJU&list=PLWDgB8DFY0n2gQLGSPa7skaQI6-6JlqJk" },
        { img: "explainer/04.webp", url: "https://www.youtube.com/watch?v=5szUbNTIz5s" }
      ],
      row2: [
        { img: "explainer/05.webp", url: "https://www.youtube.com/watch?v=P4TM0OWx5ck&list=PLWDgB8DFY0n2gQLGSPa7skaQI6-6JlqJk&index=2" },
        { img: "explainer/06.webp", url: "https://www.youtube.com/watch?v=cJ4hsEUkPZc&list=PLWDgB8DFY0n2xNfIwoVxTFx16wbvYVD0E&index=2" },
        { img: "explainer/07.webp", url: "https://www.youtube.com/watch?v=qgAqkZpQZsI&list=PLWDgB8DFY0n2ln7V79rOj-40moXbfI9d8&index=4" },
        { img: "explainer/08.webp", url: "https://www.youtube.com/watch?v=ssN-_eJnyyU&list=PLWDgB8DFY0n2ln7V79rOj-40moXbfI9d8&index=2" }
      ]
    },
    "tabs-white-anim": {
      row1: [
        { img: "whiteboard/01.webp", url: "https://www.youtube.com/watch?v=EmsrnGZTaIs&list=PLWDgB8DFY0n1P48lxNUrYJ1g9voZ7TjyU&index=4" },
        { img: "whiteboard/02.webp", url: "https://www.youtube.com/watch?v=JV2jgr8_ShQ&list=PLWDgB8DFY0n1P48lxNUrYJ1g9voZ7TjyU&index=3" },
        { img: "whiteboard/03.webp", url: "https://www.youtube.com/watch?v=vL6MoKAR8sA&list=PLWDgB8DFY0n1P48lxNUrYJ1g9voZ7TjyU&index=2" },
        { img: "whiteboard/04.webp", url: "https://www.youtube.com/watch?v=RrxIvvc6ZMU&list=PLWDgB8DFY0n1P48lxNUrYJ1g9voZ7TjyU&index=1" }
      ],
      row2: null
    },
    "tabs-logo-anim": {
      row1: [
        { img: "logo-animation/01.webp", url: "https://www.youtube.com/watch?v=VBwVjrOpVhU&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=9" },
        { img: "logo-animation/02.webp", url: "https://www.youtube.com/watch?v=1aTAaT5uon8&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=8" },
        { img: "logo-animation/03.webp", url: "https://www.youtube.com/watch?v=XMdOAjd5Cs4&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=6" },
        { img: "logo-animation/04.webp", url: "https://www.youtube.com/watch?v=JOzwixCqijw&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=5" }
      ],
      row2: [
        { img: "logo-animation/05.webp", url: "https://www.youtube.com/watch?v=qrSMlHq-CBQ&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=4" },
        { img: "logo-animation/06.webp", url: "https://www.youtube.com/watch?v=hoocbrWSK28&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=3" },
        { img: "logo-animation/07.webp", url: "https://www.youtube.com/watch?v=RO_5B1KTHZc&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=2" },
        { img: "logo-animation/08.webp", url: "https://www.youtube.com/watch?v=yluKWMu-Juk&list=PLWDgB8DFY0n0Xo86la7v347uQiWpMHBLF&index=1" }
      ]
    }
  };

  const currentPortfolio = portfolios[activePortfolioTab];

  return (
    <div className="app-container">
      <div className="main"></div>

      {/* Header */}
      <header className={scrolled ? "stickyheader" : ""}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-6">
              <a href="#" className="header-logo d-block">
                <img className="img-fluid" src={`${basesurl}images/logo.webp`} alt="Pixel Studios Inc" />
              </a>
            </div>
            <div className="col-md-8 col-6">
              <ul className="header-btn d-flex align-items-center justify-content-end">
                <li>
                  <a href={phoneHref} className="phone-btn">
                    <span className="phone">
                      <svg version="1.1" id="phone" xmlns="https://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 82 82" style={{ enableBackground: "new 0 0 82 82" }}>
                        <path d="M64.5,78.2c1.7-1.9,3.6-3.6,5.4-5.4c2.6-2.7,2.7-5.9,0-8.6c-3.1-3.2-6.3-6.3-9.4-9.4c-2.6-2.6-5.8-2.6-8.4,0c-2,1.9-3.9,3.9-5.9,5.9c-0.1,0.1-0.3,0.2-0.4,0.3l-1.3,1.3c-0.4,0.2-0.7,0.2-1.2,0c-1.3-0.7-2.6-1.2-3.8-2c-5.7-3.6-10.5-8.2-14.7-13.4c-2.1-2.6-4-5.3-5.3-8.4c-0.2-0.5-0.2-0.9,0.1-1.3l1.3-1.3c0.1-0.1,0.1-0.2,0.2-0.3c0.6-0.6,1.2-1.1,1.8-1.7c1.4-1.3,2.7-2.7,4.1-4.1c2.7-2.7,2.7-5.9,0-8.6c-1.5-1.5-3.1-3.1-4.6-4.6c-1.6-1.6-3.2-3.2-4.8-4.8c-2.6-2.5-5.8-2.5-8.4,0c-2,1.9-3.9,3.9-5.9,5.9c-1.9,1.8-2.8,3.9-3,6.5c-0.3,4.1,0.7,8,2.1,11.8C5.2,43.8,9.6,50.7,15,57.1c7.2,8.6,15.9,15.4,26,20.4c4.6,2.2,9.3,3.9,14.4,4.2C58.9,81.8,62,81,64.5,78.2z"></path>
                        <path d="M41.1,15.7c-0.7,0-1.5,0.1-2.2,0.4c-1.7,0.8-2.5,2.8-2,4.8c0.4,1.8,2,3,3.9,3c4.6,0.1,8.6,1.5,12,4.6c3.7,3.4,5.4,7.7,5.6,12.8c0,0.9,0.4,1.9,0.9,2.6c1.1,1.5,3,1.9,4.8,1.2c1.6-0.6,2.5-2,2.5-3.9c-0.1-7-2.6-12.9-7.5-18.1C54.1,18.4,48.1,15.8,41.1,15.7z"></path>
                        <path d="M69,11.4c8.5,8.7,12.5,18.1,12.8,29.1c0.1,2.5-1.5,4.2-3.9,4.3c-2.6,0.1-4.3-1.4-4.4-4c-0.1-5.4-1.4-10.5-4-15.2C63.5,14.9,54.2,9.3,42,8.6c-1.4-0.1-2.6-0.2-3.6-1.3c-1.2-1.4-1.3-3-0.7-4.6c0.7-1.6,2-2.4,3.8-2.4c8,0.1,15.3,2.4,22,6.8C65.7,8.6,67.8,10.4,69,11.4z"></path>
                      </svg>
                    </span>
                    {phone}
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-style btn-border popup-btn">
                    Request a quote <i className="fas fa-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="video-background d-flex banner-siders">
        <div className="container align-self-center">
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className="content">
                <h3 className="small-heading"></h3>
                <h1>Let’s explore the<br /> Art of STORYTELLING</h1>
                <p>
                  Get the Best <span className="fw-700">2D, 3D Video Animation Service</span> for your{" "}
                  <span className="fw-700">product explainer video</span> or for advertising, feature films, television and special venues.
                </p>
                <ul className="btn-wrap d-flex align-items-center">
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); window.toggleChat(); }} className="btn-style btn-fill chatt">
                      Live Chat<i className="fas fa-long-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-style btn-border popup-btn">
                      Request a quote<i className="fas fa-long-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero_form">
                <form onSubmit={handleBannerSubmit}>
                  <h3>We are here to help!</h3>
                  <p>
                    <strong>Sign up Now To Avail <strong className="blink">70%</strong> Discount</strong>
                  </p>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 margin-bottom-20 field-mergedright">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={bannerForm.name}
                        onChange={(e) => setBannerForm({ ...bannerForm, name: e.target.value })}
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 margin-bottom-20 field-mergedleft">
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={bannerForm.email}
                        onChange={(e) => setBannerForm({ ...bannerForm, email: e.target.value })}
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 margin-bottom-20 field-mergedright">
                      <input
                        type="text"
                        placeholder="Phone*"
                        minLength={10}
                        maxLength={10}
                        required
                        value={bannerForm.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, "");
                          setBannerForm({ ...bannerForm, phone: val });
                        }}
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 margin-bottom-20">
                      <textarea
                        placeholder="Talk about your project"
                        required
                        value={bannerForm.msg}
                        onChange={(e) => setBannerForm({ ...bannerForm, msg: e.target.value })}
                      ></textarea>
                    </div>
                    <div className="col-md-12 col-xs-12 field-mergedleft mid-body">
                      <div className="text-left">
                        <input className="btn-fill btn-quote" type="submit" value="SUBMIT" />
                        <span className="why_not">
                          Any Confusion? <a href="#" onClick={(e) => { e.preventDefault(); window.toggleChat(); }} className="chatt">Why not discuss your idea?</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-ser-tab pad-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="border-left-right">What We Do</h3>
              <h1>OUR DIVERSE RANGE OF ANIMATION SERVICES!</h1>
            </div>
            <div className="col-md-12 text-center">
              <ul className="services-tab">
                <li className={activeServiceTab === "tabs-2d" ? "current" : ""} onClick={() => setActiveServiceTab("tabs-2d")}>2D Animation</li>
                <li className={activeServiceTab === "tabs-3d" ? "current" : ""} onClick={() => setActiveServiceTab("tabs-3d")}>3D Animation</li>
                <li className={activeServiceTab === "tabs-motion" ? "current" : ""} onClick={() => setActiveServiceTab("tabs-motion")}>Motion Graphics</li>
                <li className={activeServiceTab === "tabs-white" ? "current" : ""} onClick={() => setActiveServiceTab("tabs-white")}>Whiteboard</li>
                <li className={activeServiceTab === "tabs-logos" ? "current" : ""} onClick={() => setActiveServiceTab("tabs-logos")}>Logo Animation</li>
                <li className={activeServiceTab === "tabs-video" ? "current" : ""} onClick={() => setActiveServiceTab("tabs-video")}>Video Editing</li>
              </ul>

              {/* Service Tab Content */}
              {activeServiceTab === "tabs-2d" && (
                <div className="my-tabs tabs-2d current">
                  <figure>
                    <img className="img-fluid" src={`${basesurl}images/animtions/2D-Animation.webp`} alt="2D Animation" />
                  </figure>
                  <div className="content">
                    <p>Easy on the eye and pocket, get the best of both world’s through top notch 2D Animations</p>
                    <ul className="btn-wrap d-flex align-items-center">
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.toggleChat(); }} className="btn-style btn-fill chatt">
                          Live Chat<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-style btn-border popup-btn">
                          Request a quote<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeServiceTab === "tabs-3d" && (
                <div className="my-tabs tabs-3d current">
                  <figure>
                    <img className="img-fluid" src={`${basesurl}images/animtions/3d-animation.webp`} alt="3D Animation" />
                  </figure>
                  <div className="content">
                    <p>The future is now. Immerse yourself into the life-like stylings of spectacular 3D Animations.</p>
                    <ul className="btn-wrap d-flex align-items-center">
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.toggleChat(); }} className="btn-style btn-fill chatt">
                          Live Chat<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-style btn-border popup-btn">
                          Request a quote<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeServiceTab === "tabs-motion" && (
                <div className="my-tabs tabs-motion current">
                  <figure>
                    <img className="img-fluid" src={`${basesurl}images/animtions/Motion-Graphics.webp`} alt="Motion Graphics" />
                  </figure>
                  <div className="content">
                    <p>Why stay static, animate. Add a little life to your products and witness the magic of Motion Graphics.</p>
                    <ul className="btn-wrap d-flex align-items-center">
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.toggleChat(); }} className="btn-style btn-fill chatt">
                          Live Chat<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-style btn-border popup-btn">
                          Request a quote<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeServiceTab === "tabs-white" && (
                <div className="my-tabs tabs-white current">
                  <figure>
                    <img className="img-fluid" src={`${basesurl}images/animtions/Whiteboard.webp`} alt="Whiteboard Animation" />
                  </figure>
                  <div className="content">
                    <p>Cut the clutter and keep things simple. Expert Whiteboard animators are ready to help you out.</p>
                    <ul className="btn-wrap d-flex align-items-center">
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.toggleChat(); }} className="btn-style btn-fill chatt">
                          Live Chat<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-style btn-border popup-btn">
                          Request a quote<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeServiceTab === "tabs-logos" && (
                <div className="my-tabs tabs-logos current">
                  <figure>
                    <img className="img-fluid" src={`${basesurl}images/animtions/Logo-Animation.webp`} alt="Logo Animation" />
                  </figure>
                  <div className="content">
                    <p>Put some groove into your brand and see it stand out and garner far more recognition.</p>
                    <ul className="btn-wrap d-flex align-items-center">
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.toggleChat(); }} className="btn-style btn-fill chatt">
                          Live Chat<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-style btn-border popup-btn">
                          Request a quote<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeServiceTab === "tabs-video" && (
                <div className="my-tabs tabs-video current">
                  <figure>
                    <img className="img-fluid" src={`${basesurl}images/animtions/Video-Editing.webp`} alt="Video Editing" />
                  </figure>
                  <div className="content">
                    <p>This is the make or break for most digital artistic endeavors. Let experts handle it.</p>
                    <ul className="btn-wrap d-flex align-items-center">
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.toggleChat(); }} className="btn-style btn-fill chatt">
                          Live Chat<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-style btn-border popup-btn">
                          Request a quote<i className="fas fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Portfolio</h2>
              <ul className="portfolio-tab">
                <li className={activePortfolioTab === "tabs-2d-anim" ? "current" : ""} onClick={() => setActivePortfolioTab("tabs-2d-anim")}>2D Animation</li>
                <li className={activePortfolioTab === "tabs-3d-anim" ? "current" : ""} onClick={() => setActivePortfolioTab("tabs-3d-anim")}>3D Animation</li>
                <li className={activePortfolioTab === "tabs-explainer" ? "current" : ""} onClick={() => setActivePortfolioTab("tabs-explainer")}>Explainer Videos</li>
                <li className={activePortfolioTab === "tabs-white-anim" ? "current" : ""} onClick={() => setActivePortfolioTab("tabs-white-anim")}>Whiteboard Animation</li>
                <li className={activePortfolioTab === "tabs-logo-anim" ? "current" : ""} onClick={() => setActivePortfolioTab("tabs-logo-anim")}>Logo Animation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Portfolio Scroll rows */}
        <div className="portfolio-marquee-container">
          {currentPortfolio.row1 && (
            <div className="marquee-row marquee-left">
              <div className="marquee-track">
                {/* Render items twice for infinite loop */}
                {[...currentPortfolio.row1, ...currentPortfolio.row1, ...currentPortfolio.row1].map((item, idx) => (
                  <div key={idx} className="marquee-item">
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveVideoUrl(item.url); }}>
                      <img src={`${basesurl}images/portfolio/animations/${item.img}`} alt="Portfolio Thumbnail" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPortfolio.row2 && (
            <div className="marquee-row marquee-right">
              <div className="marquee-track">
                {[...currentPortfolio.row2, ...currentPortfolio.row2, ...currentPortfolio.row2].map((item, idx) => (
                  <div key={idx} className="marquee-item">
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveVideoUrl(item.url); }}>
                      <img src={`${basesurl}images/portfolio/animations/${item.img}`} alt="Portfolio Thumbnail" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing / Packages Section */}
      <section className="pkg-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Pricing</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box mb-4">
                <div className="image-area">
                  <img className="boxe bounce-5" src={`${basesurl}images/cart1.webp`} alt="cart" />
                </div>
                <h5>Video Basic</h5>
                <h6>$179</h6>
                <del className="old-price">$669</del>
                <p>Text & Image Compilation</p>
                <ul className="ticklist2 list-scroll overflow-auto">
                  <li>30 Seconds Duration</li>
                  <li>Script Writing</li>
                  <li>Custom Artwork</li>
                  <li>Background Music</li>
                  <li>HD Format Video</li>
                  <li>Dedicated Support</li>
                </ul>
                <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="popup-btn">Order Now</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box mb-4">
                <div className="image-area">
                  <img className="boxe bounce-4" src={`${basesurl}images/cart2.webp`} alt="cart" />
                </div>
                <h5>Video Plus</h5>
                <h6>$499</h6>
                <del className="old-price">$1669</del>
                <p>whiteboard or Motion Graphics Animation</p>
                <ul className="ticklist2 list-scroll overflow-auto">
                  <li>30 Seconds Duration</li>
                  <li>Script Writing</li>
                  <li>Professional Voice-over &amp; SFX</li>
                  <li>Hand-drawn Illustrations</li>
                  <li>Unlimited Revisions</li>
                  <li>HD Format Video</li>
                  <li>Dedicated Support</li>
                </ul>
                <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="popup-btn">Order Now</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box mb-4">
                <div className="image-area">
                  <img className="boxe bounce-3" src={`${basesurl}images/cart3.webp`} alt="cart" />
                </div>
                <h5>Video Classic</h5>
                <h6>$799</h6>
                <del className="old-price">$2669</del>
                <p>Ultimate 2D Animation</p>
                <ul className="ticklist2 list-scroll overflow-auto">
                  <li>30 Seconds Duration</li>
                  <li>Script Writing</li>
                  <li>Professional Voice-over &amp; SFX</li>
                  <li>Custom 2D Character Illustration</li>
                  <li>Unlimited Revisions</li>
                  <li>HD Format Video</li>
                  <li>Dedicated Support</li>
                </ul>
                <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="popup-btn">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-sec pad-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6 className="border-left-right">Process</h6>
              <h2>Matching Your Business Needs Effectively </h2>
              <p>
                We’re determined to explore more than what may be just a quick fix for your business. Together, we can tailor our{" "}
                <strong className="fw-700">animated corporate video production</strong> for continual growth.
              </p>
              <div className="process-wrap">
                <ul className="mob-sliderxs">
                  <li className={`proces-box-wrap ${activeProcessBox === 0 ? "active" : ""}`}>
                    <span><img src={`${basesurl}images/process-icon-1.webp`} alt="workshops" /></span>
                    <h3>Workshops</h3>
                    <p>
                      To understand the unique demands of your business, we run multiple workshops for running an extensive business analysis,
                      comprehending campaign objectives, preparing proposals, and deciding deliverables.
                    </p>
                  </li>
                  <li className={`proces-box-wrap ${activeProcessBox === 1 ? "active" : ""}`}>
                    <span><img src={`${basesurl}images/process-icon-2.webp`} alt="planning" /></span>
                    <h3>Planning</h3>
                    <p>
                      A lot goes into the planning stage, such as industry research, competitor research, selecting marketing channels, and
                      strategy development. We recommend the best course of action for digitalization.
                    </p>
                  </li>
                  <li className={`proces-box-wrap ${activeProcessBox === 2 ? "active" : ""}`}>
                    <span><img src={`${basesurl}images/process-icon-3.webp`} alt="testing" /></span>
                    <h3>A/B Testing</h3>
                    <p>
                      From experimenting with content to testing advertisements and marketing techniques, we do all it takes to analyze the
                      audience’s behavior and make alterations accordingly for maximum outreach.
                    </p>
                  </li>
                  <li className={`proces-box-wrap ${activeProcessBox === 3 ? "active" : ""}`}>
                    <span><img src={`${basesurl}images/process-icon-4.webp`} alt="execution" /></span>
                    <h3>Execution</h3>
                    <p>
                      Moving forth with execution, we analyze processes, create campaigns, optimize strategies, and produce content to secure
                      a better ranking. We aim for quality, results, and business growth.
                    </p>
                  </li>
                  <li className={`proces-box-wrap ${activeProcessBox === 4 ? "active" : ""}`}>
                    <span><img src={`${basesurl}images/process-icon-5.webp`} alt="implementation" /></span>
                    <h3>Implementation</h3>
                    <p>
                      Now, for the exciting part, we get our hands dirty with launching your project and incorporating changes as your business
                      changes. Are you ready to get started?
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="team-sec pad-50">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h3 className="small-heading">Testimonials</h3>
              <h2>Sharing Our <br />Client’s Success <br /> Stories </h2>
              <p>
                We revolutionize the way your audience perceives your brand’s online presence. These are stories of people whose lives have
                been inspired by Pixel Studios Inc and its diverse range of services.
              </p>
              <ul className="btn-wrap">
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-style btn-fill popup-btn">
                    Request a quote <i className="fas fa-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="box-wrap">
          <li>
            <div className="item">
              <div className="img-wrap">
                <img src={`${basesurl}images/clients/01.webp`} alt="William Smith" />
              </div>
              <div className="content-wrap">
                <span>
                  <h4>William Smith</h4>
                  <h6>President & Founder</h6>
                  <p>Pixel Studios never disappoints. Whether it's a simple video or complex character animation, they always hit the deadline and make sure everything is on point.</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="img-wrap">
                <img src={`${basesurl}images/clients/02.webp`} alt="Steven Patterson" />
              </div>
              <div className="content-wrap">
                <span>
                  <h4>Steven Patterson</h4>
                  <h6>Co-Founder</h6>
                  <p>Pixel Studios worked with us and helped us create a great video. It portrayed our product in an easily understandable and visually attractive way.</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="img-wrap">
                <img src={`${basesurl}images/clients/03.webp`} alt="Taylor Leonard" />
              </div>
              <div className="content-wrap">
                <span>
                  <h4>Taylor Leonard</h4>
                  <h6>Chief Marketing Officer</h6>
                  <p>They are a team of highly skilled and professional app developers. I hired them for my latest project, and they did it perfectly! We plan to have them develop more apps for us in the future.</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="img-wrap">
                <img src={`${basesurl}images/clients/04.webp`} alt="Carroll Nelson" />
              </div>
              <div className="content-wrap">
                <span>
                  <h4>Carroll Nelson</h4>
                  <h6>Project Manager</h6>
                  <p>They helped us develop a useful and great-looking application in a short period of time and on budget. In addition, the team is talented, efficient, and easy to work with.</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="img-wrap">
                <img src={`${basesurl}images/clients/05.webp`} alt="Ronald Bowman" />
              </div>
              <div className="content-wrap">
                <span>
                  <h4>Ronald Bowman</h4>
                  <h6>Marketing Manager</h6>
                  <p>We love working with Pixel Studios as they have been a great support to us. Their skills are on par, and we are happy with their work.</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="img-wrap">
                <img src={`${basesurl}images/clients/06.webp`} alt="Megan Duncan" />
              </div>
              <div className="content-wrap">
                <span>
                  <h4>Megan Duncan</h4>
                  <h6>Creative Director</h6>
                  <p>It's been a pleasure working with Pixel Studios. They have been great at taking our vision and turning it into reality. We have very high standards, and they have exceeded them time and time again.</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="img-wrap">
                <img src={`${basesurl}images/clients/07.webp`} alt="Kay Diaz" />
              </div>
              <div className="content-wrap">
                <span>
                  <h4>Kay Diaz</h4>
                  <h6>CEO</h6>
                  <p>Not only do they know how to work, but they’re also wonderful people to work with. They’re always willing to chat and give suggestions on how to improve a project.</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="img-wrap">
                <img src={`${basesurl}images/clients/08.webp`} alt="Rachel Blake" />
              </div>
              <div className="content-wrap">
                <span>
                  <h4>Rachel Blake</h4>
                  <h6>Chief Visionary Officer</h6>
                  <p>They have the eye for detail needed to create the highest quality work. I would hire them again in a heartbeat. Keep it up!</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="img-wrap">
                <img src={`${basesurl}images/clients/09.webp`} alt="Toni Curtis" />
              </div>
              <div className="content-wrap">
                <span>
                  <h4>Toni Curtis</h4>
                  <h6>Business Development Manager</h6>
                  <p>The team at Pixel Studios is super professional and proactive. They delivered the project on time, within budget, and with zero bugs. I am really glad I chose them for my mobile app development needs.</p>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* Bottom CTA Section */}
      <section className="content-cta">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>We’re Continually Racing Against <br /> The Clock So That You Can <br />Stay Ahead Of The Game.</h2>
              <ul className="btn-wrap d-flex align-items-center justify-content-end">
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); window.toggleChat(); }} className="btn-style btn-fill chatt">
                    Live Chat<i className="fas fa-long-arrow-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-style btn-border popup-btn">
                    Request a quote<i className="fas fa-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1><a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="blink popup-btn">Let’s Connect</a></h1>
              <ul className="social-icons">
                <li><a href={fb} target="_blank" rel="noopener noreferrer"><img src={`${basesurl}images/fb.webp`} alt="facebook" /></a></li>
                <li><a href={linkedin} target="_blank" rel="noopener noreferrer"><img src={`${basesurl}images/link.webp`} alt="linkedin" /></a></li>
                <li><a href={instagram} target="_blank" rel="noopener noreferrer"><img src={`${basesurl}images/insta.webp`} alt="instagram" /></a></li>
                <li><a href={youtube} target="_blank" rel="noopener noreferrer"><img src={`${basesurl}images/youtube.webp`} alt="youtube" /></a></li>
              </ul>
            </div>
          </div>
          <div className="row copyright border-top">
            <div className="col-lg-6 text-start">
              <p>All Rights Reserved {new Date().getFullYear()} - Pixel Studios inc.</p>
            </div>
            <div className="col-lg-6 text-end my-auto">
              <ul className="footer-menu d-flex justify-content-end align-items-center">
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li>&nbsp;|&nbsp;</li>
                <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Fancybox-like Video Modal */}
      {activeVideoUrl && (
        <div className="modal-video-overlay" onClick={() => setActiveVideoUrl(null)}>
          <div className="modal-video-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-video-close" onClick={() => setActiveVideoUrl(null)}>×</button>
            <div className="modal-video-iframe-wrapper">
              <iframe
                src={getEmbedUrl(activeVideoUrl)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Baltic Popup Modal */}
      {isModalOpen && (
        <div className="modal show d-block" onClick={() => setIsModalOpen(false)}>
          <div className="balti_popup" id="balti_popup" onClick={(e) => e.stopPropagation()}>
            <img src="/popup/logo.png" alt="logo" style={{ maxWidth: "160px" }} />
            <h2>We are here to help!</h2>
            <p>Get an Instant Quote</p>
            <form onSubmit={handlePopupSubmit} className="validate-balti_popup">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        required
                        value={popupForm.name}
                        onChange={(e) => setPopupForm({ ...popupForm, name: e.target.value })}
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 pd-right-0">
                  <ul>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <input
                        type="text"
                        placeholder="Phone*"
                        minLength={10}
                        maxLength={10}
                        required
                        value={popupForm.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, "");
                          setPopupForm({ ...popupForm, phone: val });
                        }}
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={popupForm.email}
                        onChange={(e) => setPopupForm({ ...popupForm, email: e.target.value })}
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <ul>
                    <li>
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                      <textarea
                        required
                        placeholder="To help us understand better enter a brief description of your project."
                        value={popupForm.msg}
                        onChange={(e) => setPopupForm({ ...popupForm, msg: e.target.value })}
                      ></textarea>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <ul>
                    <li>
                      <input type="submit" value="Submit" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
            <button className="fancybox-close-small close" onClick={() => setIsModalOpen(false)}></button>
          </div>
        </div>
      )}
    </div>
  );
}
