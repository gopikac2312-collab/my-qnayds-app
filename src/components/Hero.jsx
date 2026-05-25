// import '../styles/Hero.css'
// import heroImg from '../assets/image.png'

// function Hero() {
//   return (
//     <section className="hero" id="home">
//       <div className="hero-content">
//         <span className="hero-badge">🎓 Technology Education for All</span>
//         <h1>Be future ready with <span className="highlight">Futuristic Technologies</span></h1>
//         <p>Focus to deliver futuristic technologies to professional students, common peoples and schools.</p>
//         <div className="hero-buttons">
//           <button className="btn-primary">Explore Courses →</button>
//           <button className="btn-secondary">About QNAYDS</button>
//         </div>
//         <div className="hero-stats">
//           <div className="stat">
//             <h3>2500+</h3>
//             <p>Students</p>
//           </div>
//           <div className="stat">
//             <h3>100+</h3>
//             <p>Lessons</p>
//           </div>
//           <div className="stat">
//             <h3>10+</h3>
//             <p>Courses</p>
//           </div>
//         </div>
//       </div>
//       <div className="hero-image">
//         <img src={heroImg} alt="Student" />
//       </div>
//     </section>
//   )
// }

// export default Hero
import React from 'react'

import '../styles/Hero.css'
 
const tickerItems = [
  'Ethical Hacking', 'Pentesting', 'Vulnerability Assessment', 'Malware Analysis',
  'Digital Forensics', 'SOC', 'Secure Coding', 'Reverse Engineering',
  'Red Teaming', 'Blue Teaming', 'OSINT', 'Network Security',
  'Web App Security', 'Cloud Security', 'Incident Response', 'Threat Hunting'
];
const logos = [
  { src: 'public/logos/msme.webp', alt: 'MSME' },
  { src: 'public/logos/Startup-India_Preview.png', alt: 'Startup India' },
  { src: 'public/logos/All-India-Council-for-Technical-Education.jpg', alt: 'AICTE' },
  { src: 'public/logos/download.jpg', alt: 'Kerala' },
  { src: 'public/logos/msme.webp', alt: 'Kerala Startup Mission' },
];
const stripItems = [
  'Expert Trainers',
  'Live Projects',
  '100% Placement Support',
  'Weekend & Weekday Batches',
  'Globally Recognised Certs',
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
        <title>Qnayds | Online Learning Platform for Students and Professionals</title>

        <meta name="description" content="Qnayds offers online learning, skill development courses, professional training, and educational resources for students and professionals."></meta>

       <meta name="keywords" content="online learning platform, e-learning courses, online education, skill development, professional training, career development, digital learning, certification courses"></meta>
 
       <div className="hero-actions"><a href
  
    href="https://qnayds.akamai.net.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary"
  >
    Explore Courses →
  </a>
  <a href="#about" className="btn-ghost">
    About QNAYDS
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </a>
</div>
 
      

<div className="hero-recognitions">
  <p className="rec-label">Recognised and Featured by</p>
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
      {num:'5+', label:'Year Experience'},
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
 