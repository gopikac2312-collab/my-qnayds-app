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
//                 <span>📚 {trainer.courses}</span>
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

import { useRef, useEffect } from 'react'
import '../styles/Trainers.css'

const trainersData = [
  { name: "Rishan N K", role: "Iot and Robotics Trainer Toastmaster International  6+ year experenice", src: "/my-qnayds-app//rishan nk.png", linkedin: "#" },
  { name: "Sawad K T", role: " CyberSecurity Trainer 6+ year experenice", src: "/my-qnayds-app//sawad.png", linkedin: "#" },
  { name: "Abhilash O S", role: "Microelectronics & VLSI Trainer    10+ year experenice", src: "/my-qnayds-app//trainer1.png", linkedin: "#" },
  { name: "Kavitha Sivdas Nair", role: "BIM Trainer 10+ year expereince", src: "/my-qnayds-app//trainer2.png", linkedin: "#" },
  { name: "Sayanth K S", role: "Robotics Trainer ", src: "/my-qnayds-app//trainer3.png", linkedin: "#" },
  { name: "Mohammed Rishal", role: "Data Science & AI Trainer", src: "/my-qnayds-app//trainer4.png", linkedin: "#" },
  { name: "Aswinraj K", role: "Full Stack Trainer", src: "/my-qnayds-app//trainer5.png", linkedin: "#" },
 
]

function Trainers() {
  const rowRef = useRef(null)

 const scroll = (dir) => {
  if (rowRef.current) {
    const card = rowRef.current.querySelector('.trainer-card')
    const cardWidth = card.offsetWidth + 20
    rowRef.current.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }
}
  useEffect(() => {
    const cards = document.querySelectorAll('.trainer-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="trainers" id="trainers">
      <br />
      <div className="trainers-header">
        <span className="section-badge">Expert Team</span>
        <h2><span className="highlight">Meet Our Mentors</span></h2>
        <p>Learn from skilled professionals with real-world industry experience</p>
      </div>

      <div className="trainers-carousel">
        <button className="carousel-arrow left" onClick={() => scroll(-1)} aria-label="Scroll left">
          &#8249;
        </button>

        <div className="trainers-row" ref={rowRef}>
          {trainersData.map((trainer, i) => (
            <div className="trainer-card" key={i}>
              <div className="trainer-photo">
                {trainer.src ? (
                  <img src={trainer.src} alt={trainer.name} />
                ) : (
                  <div className="trainer-photo-placeholder">
                    {trainer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p className="trainer-role">{trainer.role}</p>
                <a href={trainer.linkedin} className="linkedin-btn" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5">
                    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.983V9h3.102v1.561h.044c.431-.817 1.485-1.678 3.057-1.678 3.269 0 3.873 2.152 3.873 4.95v6.619zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.554 13.019H3.782V9h3.109v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow right" onClick={() => scroll(1)} aria-label="Scroll right">
          &#8250;
        </button>
      </div>
    </section>
  )
}

export default Trainers