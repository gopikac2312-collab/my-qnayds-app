import React from 'react'
import '../styles/Footer.css'

const quickLinks = ['Home', 'Prompt Engineering', 'Ethical Hacking', 'Scholarship Test']

function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">QNAYDS</div>
          <p className="footer-desc">
            Delivering futuristic technologies to students and schools worldwide.
          </p>
          <div className="footer-socials">

            <a href="https://instagram.com/qnayds" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            <a href="https://facebook.com/qnayds" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            <a href="https://twitter.com/qnayds" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter / X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.953l4.256 5.649 4.785-5.649Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <p className="footer-col-title">Quick Links</p>
          <ul className="footer-links">
            {quickLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}
          </ul>
        </div>

        {/* Courses */}
        <div className="footer-col">
          <p className="footer-col-title">Courses</p>
          <ul className="footer-links">
            <li><a href="#">Advanced Cybersecurity Course</a></li>
            <li><a href="#">30days of hacking course</a></li>
            <li><a href="#">Advanced AI Poster Designing</a></li>
            <li><a href="#">Advanced Excel using AI</a></li>
            <li><a href="#">Advanced AI for teachers</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <p className="footer-col-title">Get Connected</p>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span className="contact-text">ZilBank.com, Manjeri<br />Malappuram – 673639</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div className="contact-text">
              <a href="tel:+917907564898">+91-7907564898</a><br />
              <a href="tel:+919400968397">+91-9400968397</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <a href="career.qnayds@gmail.com" className="contact-text">career.qnayds@gmail.com</a>
          </div>
        </div>

      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 QNAYDS. All rights reserved.</span>
        <span className="footer-badge">
          <span className="badge-dot"></span>
          All systems operational
        </span>
      </div>
    </footer>
  )
}

export default Footer