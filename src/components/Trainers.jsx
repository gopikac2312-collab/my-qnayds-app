// import '../styles/Trainers.css'

// const trainersData = [
//   { name: "Abhilash O S", role: "Microelectronics & VLSI Trainer", experience: "10+ Years Experience", courses: "M.TECH in Microelectronics & VLSI - IIT Hyderabad", color: "#1a6fc4", initials: "AO", src: "/trainer1.png" },
//   { name: "Kavitha Sivdas Nair", role: "BIM Trainer", experience: "10+ Years Experience", courses: "Worked as civil faculty and technical faculty", color: "#6c3fc4", initials: "KN", src: "/trainer2.png" },
//   { name: "Sayanth K S", role: "Robotics Trainer", experience: "3+ Years Experience", courses: "CEO-SURF Electric and Mobility", color: "#0f9e75", initials: "SK", src: "/trainer3.png" },
//   { name: "Mohammed Rishal", role: "Data Science & AI Trainer", experience: "5+ Years Experience", courses: "BTECH, BSC in Data Science - IIT Madras", color: "#e67e22", initials: "MR", src: "/trainer4.png" },
//   { name: "Aswinraj K", role: "Full Stack Trainer", experience: "5+ Years Experience", courses: "BSC Computer Science, Co-founder Zindot Innovations", color: "#e74c3c", initials: "AK", src: "/trainer5.png" },
//   { name: "Mohammed Suhail", role: "Web Development Trainer", experience: "3+ Years Experience", courses: "Robotics Engineer at DeepFlow Technologies", color: "#85702a", initials: "MS", src: null },
// ]

// function Trainers() {
//   return (
//     <section className="trainers" id="trainers">
//       <div className="trainers-header">
//         <span className="section-badge">Expert Team</span>
//         <h2><span className="highlight">Meet Our Mentors</span></h2>
//         <p>Learn from industry experts with years of real-world experience</p>
//       </div>

//       <div className="trainers-scroll-wrapper">
//         <div className="trainers-row">
//           {trainersData.map((trainer, i) => (
//             <div className="trainer-card" key={i}>
//               <div
//                 className="trainer-avatar"
//                 style={{ background: trainer.color + '18', color: trainer.color }}
//               >
//                 {trainer.src ? (
//                   <img
//                     src={trainer.src}
//                     alt={trainer.name}
//                     className="trainer-avatar-img"
//                     onError={(e) => { e.target.style.display = 'none' }}
//                   />
//                 ) : (
//                   <span>{trainer.initials}</span>
//                 )}
//               </div>

//               <h3>{trainer.name}</h3>
//               <p className="trainer-role" style={{ color: trainer.color }}>{trainer.role}</p>

//               <div className="trainer-meta">
//                 <span>⏱ {trainer.experience}</span>
//                 <span> {trainer.courses}</span>
//               </div>

//               <button
//                 className="trainer-btn"
//                 style={{ color: trainer.color, borderColor: trainer.color + '60' }}
//               >
//                 View Profile
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Trainers
import { useRef, useState, useEffect, useCallback } from 'react'
import '../styles/Trainers.css'

const trainersData = [
  { name: "Rishan N K",          role: "IoT & Robotics Trainer",          extra: "Toastmaster International",       experience: "6+ yrs",  tag: "CEO / FOUNDER",      src: "/my-qnayds-app//rishan nk.png", linkedin: "#", color: "" },
  { name: "Sawad K T",           role: "Digital Marketing & AI Trainer",  extra: "",                                experience: "6+ yrs",  tag: "DIRECTOR / FOUNDER", src: "/my-qnayds-app//sawad.png",      linkedin: "#", color: "" },
  { name: "Abhilash O S",        role: "Microelectronics & VLSI Trainer", extra: "M.Tech — IIT Hyderabad",          experience: "10+ yrs", tag: "IIT HYDERABAD",      src: "/my-qnayds-app//trainer1.png",   linkedin: "#", color: "" },
  { name: "Kavitha Sivdas Nair", role: "BIM Trainer",                     extra: "Civil & Technical Faculty",       experience: "10+ yrs", tag: "CIVIL EXPERT",       src: "/my-qnayds-app//trainer2.png",   linkedin: "#", color: "" },
  { name: "Sayanth K S",         role: "Robotics Trainer",                extra: "CEO — Surf Electric & Mobility",  experience: "5+ yrs",  tag: "CEO / FOUNDER",      src: "/my-qnayds-app//trainer3.png",   linkedin: "#", color: "" },
  { name: "Mohammed Rishal",     role: "Data Science & AI Trainer",       extra: "BSc Data Science — IIT Madras",   experience: "4+ yrs",  tag: "IIT MADRAS",         src: "/my-qnayds-app//trainer4.png",   linkedin: "#", color: "" },
  { name: "Aswinraj K",          role: "Full Stack Trainer",              extra: "Co-Founder — Zindot Innovations", experience: "5+ yrs",  tag: "CO-FOUNDER",         src: "/my-qnayds-app//trainer5.png",   linkedin: "#", color: "" },
]

const CARD_WIDTH = 276
const CARD_GAP   = 20
const AUTO_DELAY = 2500   // auto-slide every 2.5s
const MIN_SWIPE  = 50

function TrainerCard({ trainer, active }) {
  const initials = trainer.name.split(' ').map(n => n[0]).join('').slice(0, 2)
  return (
    <div className={`trainer-card ${active ? 'active' : ''}`}>
      <div className="trainer-photo">
        {trainer.src
          ? <img src={trainer.src} alt={trainer.name} />
          : <div className="trainer-photo-placeholder">{initials}</div>
        }
        <div className="card-color-bar" style={{ background: trainer.color }} />
        <div className="exp-badge" style={{ background: trainer.color }}>{trainer.experience}</div>
      </div>
      <div className="trainer-info">
        <h3 className="trainer-name">{trainer.name}</h3>
        <p className="trainer-role" style={{ color: trainer.color }}>{trainer.role}</p>
        {trainer.extra && <p className="trainer-extra">{trainer.extra}</p>}
        <div className="trainer-meta">
          <span className="trainer-exp">⏱ {trainer.experience}</span>
          <span className="trainer-tag" style={{ background: trainer.color + '18', color: trainer.color, borderColor: trainer.color + '40' }}>
            {trainer.tag}
          </span>
        </div>
        <a href={trainer.linkedin} className="linkedin-btn" target="_blank" rel="noopener noreferrer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#0077b5">
            <path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.983V9h3.102v1.561h.044c.431-.817 1.485-1.678 3.057-1.678 3.269 0 3.873 2.152 3.873 4.95v6.619zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.554 13.019H3.782V9h3.109v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  )
}

function Trainers() {
  const [current, setCurrent]   = useState(0)
  const [paused,  setPaused]    = useState(false)
  const slidingRef  = useRef(false)
  const autoRef     = useRef(null)
  const touchStart  = useRef(null)
  const touchEnd    = useRef(null)
  const total       = trainersData.length

  // ── navigation ─────────────────────────────────
  const goTo = useCallback((index) => {
    if (slidingRef.current) return
    slidingRef.current = true
    setCurrent((index + total) % total)
    setTimeout(() => { slidingRef.current = false }, 520)
  }, [total])

  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])

  // ── auto-play: single interval, pause-aware ─────
  useEffect(() => {
    if (paused) {
      clearInterval(autoRef.current)
      return
    }
    autoRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % total)
    }, AUTO_DELAY)
    return () => clearInterval(autoRef.current)
  }, [paused, total])

  // ── touch / swipe ───────────────────────────────
  const onTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX
    touchEnd.current   = null
    setPaused(true)                          // pause while swiping
  }
  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX
  }
  const onTouchEnd = () => {
    if (touchStart.current !== null && touchEnd.current !== null) {
      const diff = touchStart.current - touchEnd.current
      if (Math.abs(diff) >= MIN_SWIPE) {
        diff > 0 ? next() : prev()
      }
    }
    touchStart.current = null
    touchEnd.current   = null
    setTimeout(() => setPaused(false), 800)  // resume after swipe settles
  }

  // ── manual arrow: pause briefly then resume ─────
  const handlePrev = () => { prev(); setPaused(true); setTimeout(() => setPaused(false), 3000) }
  const handleNext = () => { next(); setPaused(true); setTimeout(() => setPaused(false), 3000) }

  const offset = -(current * (CARD_WIDTH + CARD_GAP))

  return (
    <section className="trainers" id="trainers">
      <div className="trainers-header">
        <span className="section-badge">Expert Team</span>
        <h2>Meet Our <span className="highlight">Mentors</span></h2>
        <p>Auto-sliding · swipe or use arrows · learn from industry professionals</p>
      </div>

      <div className="trainers-carousel">
        <button className="carousel-arrow left"  onClick={handlePrev} aria-label="Previous">&#8249;</button>

        <div
          className="trainers-window"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="trainers-track"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {trainersData.map((t, i) => (
              <TrainerCard key={i} trainer={t} active={i === current} />
            ))}
          </div>
        </div>

        <button className="carousel-arrow right" onClick={handleNext} aria-label="Next">&#8250;</button>
      </div>

      {/* dots */}
      <div className="carousel-dots">
        {trainersData.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => { goTo(i); setPaused(true); setTimeout(() => setPaused(false), 3000) }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Trainers