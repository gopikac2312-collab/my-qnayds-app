// import { useState } from 'react'
// import logo from '../assets/logo.png'
// import '../styles/Header.css'

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <>
//       <header className="header">
//         <div className="header-logo">
//   <img src={logo} alt="QNAYDS" className="logo-img" />
// </div> <div className="logo-divider"></div>
//   <div className="logo-text">
//     <span className="logo-main">QNAYDS</span>
//   </div>
//         <nav className="header-nav">
//           <a href="#home">Home</a>
//           <a href="#courses">Courses</a>
//           <a href="#about">About</a>
//           <a href="#trainers">Trainers</a>
//           <a href="#contact">Contact</a>
//         </nav>
//         <div className="header-actions">
//           <a href="tel:+917907564898" className="header-call">
//             📞 +91-7907564898
//           </a>
//           <button className="header-btn">Connect Now</button>
//         </div>
//         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//       </header>
//       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
//         <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
//         <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
//         <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
//         <a href="#trainers" onClick={() => setMenuOpen(false)}>Trainers</a>
//         <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
//         <button className="header-btn">Connect Now</button>
//       </div>
//     </>
//   )
// }

// export default Header

import { useState, useRef, useEffect } from 'react'
import logo from '../assets/logo.png'
import '../styles/Header.css'
 
const COURSES = [
  'Advanced Cybersecurity Course',
  'Advanced AI Poster Designing',
  'Advanced Excel using AI',
  'Advanced AI for teachers',
  '30 Days Hacking Course',
  
]
 
function Header() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [dropOpen, setDropOpen]       = useState(false)
  const [mobileDropOpen, setMobileDropOpen] = useState(false)
  const dropRef = useRef(null)
 
  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])
 
  return (
    <>
      <header className="header">
 
        {/* LOGO */}
        <div className="header-logo-wrap">
          <img src={logo} alt="QNAYDS" className="logo-img" />
          <div className="logo-divider"></div>
          <span className="logo-main">QNAYDS</span>
        </div>
 
        {/* DESKTOP NAV */}
        <nav className="header-nav">
          {/* <a href="#home">Home</a> */}
 
          {/* Courses dropdown */}
          <div
            className={`nav-dropdown ${dropOpen ? 'open' : ''}`}
            ref={dropRef}
          >
            <button
              className="nav-dropdown-trigger"
              onClick={() => setDropOpen(o => !o)}
              aria-expanded={dropOpen}
            >
              Courses
              <svg
                className={`chevron ${dropOpen ? 'flipped' : ''}`}
                width="14" height="14" viewBox="0 0 14 14" fill="none"
              >
                <path d="M3 5L7 9L11 5" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
 
            {dropOpen && (
              <div className="dropdown-menu">
                {COURSES.map(course => (
                  <a
                    key={course}
                    href="#courses"
                    className="dropdown-item"
                    onClick={() => setDropOpen(false)}
                  >
                    {course}
                  </a>
                ))}
              </div>
            )}
          </div>
 
          <a href="#about">About Us</a>
          {/* <a href="#trainers">Trainers</a> */}
          <a href="#contact">Contact Us</a>
        </nav>
 
        {/* ACTIONS */}
        <div className="header-actions">
          <a href="tel:+917907564898" className="header-call">
            📞 +91-7907564898
          </a>
          <button className="header-btn">Connect Now</button>
        </div>
 
        {/* HAMBURGER */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
 
      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
 
        {/* Mobile courses accordion */}
        <div className="mobile-dropdown">
          <button
            className="mobile-dropdown-trigger"
            onClick={() => setMobileDropOpen(o => !o)}
          >
            Courses
            <svg
              className={`chevron ${mobileDropOpen ? 'flipped' : ''}`}
              width="14" height="14" viewBox="0 0 14 14" fill="none"
            >
              <path d="M3 5L7 9L11 5" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {mobileDropOpen && (
            <div className="mobile-dropdown-items">
              {COURSES.map(course => (
                <a
                  key={course}
                  href="#courses"
                  className="mobile-dropdown-item"
                  onClick={() => { setMenuOpen(false); setMobileDropOpen(false) }}
                >
                  {course}
                </a>
              ))}
            </div>
          )}
        </div>
 
        <a href="#about"    onClick={() => setMenuOpen(false)}>About</a>
        {/* <a href="#trainers" onClick={() => setMenuOpen(false)}>Trainers</a> */}
        <a href="#contact"  onClick={() => setMenuOpen(false)}>Contact Us</a>
        <a href="tel:+917907564898" className="mobile-call">📞 +91-7907564898</a>
        <button className="header-btn">Connect Now</button>
      </div>
    </>
  )
}
 
export default Header