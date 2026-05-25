import React, { useRef } from 'react'
import '../styles/Courses.css'

const coursesData = [
  {
    img: "/my-qnayds-app//hacking.png",
    title: "30 Days Hacking Course",
    desc: "Build a strong foundation in cybersecurity with our 30-Day Intensive Program...",
    link: "#",
  },
  {
    img: "/my-qnayds-app//Using Ai.png",
    title: "Advanced Excel Using AI",
    desc: "Master Excel like a professional using the power of AI. This 30-day intensive program...",
    link: "#",
  },
  {
    img: "/my-qnayds-app//cybersecurity.png",
    title: "Advanced Cybersecurity Course",
    desc: "The Advanced Certified Cybersecurity Program is a job-oriented professional...",
    link: "#",
  },
  {
    img: "/my-qnayds-app//ai poster.png",
    title: "Advanced AI Poster Designing",
    desc: "Master the art of professional poster creation using cutting-edge AI tools. Learn to craft stunning visuals, brand materials, and marketing creatives with AI-powered design platforms...",
    link: "#",
  },
  {
    img: "/my-qnayds-app//ai for teachers.png",
    title: "AI for Teachers",
    desc: "Empower your classroom with artificial intelligence. This course helps educators leverage AI tools for lesson planning, assessments, personalized learning, and smart content creation...",
    link: "#",
  },
]

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-thumb">
        <img src={course.img} alt={course.title} className="course-img" />
      </div>
      <div className="course-body">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.desc}</p>
        <a href="https://qnayds.akamai.net.in/" className="course-btn">View Details</a>
      </div>
    </div>
  )
}

function Courses() {
  const trackRef = useRef(null)
  const SCROLL_AMOUNT = 324 // card width (300) + gap (24)

  const scrollLeft = () => trackRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })
  const scrollRight = () => trackRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })

  // Drag-to-scroll
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })
  const onMouseDown = (e) => {
    drag.current = { active: true, startX: e.pageX - trackRef.current.offsetLeft, scrollLeft: trackRef.current.scrollLeft }
  }
  const onMouseLeave = () => { drag.current.active = false }
  const onMouseUp = () => { drag.current.active = false }
  const onMouseMove = (e) => {
    if (!drag.current.active) return
    e.preventDefault()
    trackRef.current.scrollLeft = drag.current.scrollLeft - (e.pageX - trackRef.current.offsetLeft - drag.current.startX)
  }

  return (
    <section className="courses-section" id="courses">
      <div className="courses-inner">
        <div className="courses-header">
          <p className="courses-tag">OUR PROGRAMS</p>
          <h2 className="courses-heading">Explore and choose the best program for you</h2>
          <p className="courses-sub">A leading institution dedicated to providing comprehensive training in cyber security.</p>
        </div>

        <div className="courses-scroll-wrapper">
          <div
            className="courses-track"
            ref={trackRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {coursesData.map((course, i) => (
              <CourseCard key={i} course={course} />
            ))}
          </div>

          <div className="scroll-nav">
            <button className="scroll-btn" onClick={scrollLeft}>&#8592;</button>
            <button className="scroll-btn" onClick={scrollRight}>&#8594;</button>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Courses