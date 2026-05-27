
import React from 'react'
import '../styles/Hero.css'

const tickerItems = [
  'Ethical Hacking', 'Pentesting', 'Vulnerability Assessment', 'Malware Analysis',
  'Digital Forensics', 'SOC', 'Secure Coding', 'Reverse Engineering',
  'Red Teaming', 'Blue Teaming', 'OSINT', 'Network Security',
  'Web App Security', 'Cloud Security', 'Incident Response', 'Threat Hunting'
];

const logos = [
  { src: '/my-qnayds-app//logos/msme.webp', alt: 'MSME' },
  { src: '/my-qnayds-app//logos/Startup-India_Preview.png', alt: 'Startup India' },
  { src: '/my-qnayds-app//logos/All-India-Council-for-Technical-Education.jpg', alt: 'AICTE' },
  { src: '/my-qnayds-app//logos/download.jpg', alt: 'Kerala' },
  { src: '/my-qnayds-app//logos/fb_image.jpg', alt: 'Kerala Startup Mission' },
];

const stripItems = [
  'Expert Trainers', 'Live Projects', '100% Placement Support',
  'Weekend & Weekday Batches', 'Globally Recognised Certs',
];

function Hero() {
  return (
    <section className="hero" id="home">

      {/* ── LEFT PANEL ── */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          🛡 QNAYDS — #1 Cybersecurity Training Platform
        </div>
        <h1 className="hero-headline">
          Be Future Ready<br />
          with <span className="hero-accent">Futuristic</span><br />
          Technologies
        </h1>
        <p className="hero-sub">
          Qnayds - Online Learning Platform for Skill Development and Professional Training
        </p>
        <div className="hero-actions">
          <a href="https://qnayds.akamai.net.in/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Explore Courses →
          </a>
          <a href="#about" className="btn-ghost">
            ABOUT US →
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="hero-recognitions">
        <p className="rec-label">Recognised and Featured by</p>
        <br />
        <div className="rec-logos-wrap">
          <div className="rec-logos-track">
            {[...logos, ...logos].map((logo, i) => (
              <div className="rec-logo-item" key={i}>
                <img src={logo.src} alt={logo.alt} className="rec-logo-img" />
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ── LEFT PANEL END ── */}

      {/* ── RIGHT PANEL ── */}
      <div className="hero-right">
        <img
          src="/my-qnayds-app/fitmy-job.jpg"
          alt="QNAYDS Team"
          className="hero-right-img"
        />
       {/* ── STAT CARDS BELOW IMAGE (desktop right side) ── */}
<div className="hero-img-stats">
  <div className="img-stat-card">
    <div className="img-stat-num">2500+</div>
    <div className="img-stat-avatars">
      {['A','B','C','D'].map((l, i) => (
        <div className="img-stat-avatar" key={i}>{l}</div>
      ))}
    </div>
    <div className="img-stat-label">Students Successfully Completed</div>
  </div>
  <div className="img-stat-card">
      <div className="google-badge">
    <div className="google-badge-icon">
      <svg viewBox="0 0 48 48" width="32" height="32">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="none" d="M0 0h48v48H0z"/>
      </svg>
    </div>
    </div>

    <div className="img-stat-rating">4.8/5</div>
    <div className="img-stat-stars">★★★★★</div>
    <div className="img-stat-google">Rated on Google Reviews</div>
  </div>
</div>
      </div>
      {/* ── RIGHT PANEL END ── */}

      {/* ── TICKER ── */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span className="ticker-item" key={i}>
              <span className="ticker-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── STAT CARDS ── */}
      <div className="stat-cards-section">
        <div className="stat-cards">
          {[
            { num: '2500+', label: 'Students Trained' },
            { num: '100+',  label: 'Lessons Available' },
            { num: '10+',   label: 'Courses Offered' },
            { num: '5+',    label: 'Year Experience' },
          ].map(({ num, label }) => (
            <div className="stat-card" key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="hero-strip">
        <div className="strip-track">
          {[...stripItems, ...stripItems].map((item, i) => (
            <span key={i} className="strip-item">
              <span className="strip-dot">✦</span> {item}
              <span className="strip-div">|</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero