import React, { useRef, useCallback } from 'react'
import '../styles/Courses.css'

const coursesData = [
  {
    img: "/my-qnayds-app//hacking.png",
    title: "30 Days Hacking Course",
    desc: "Build a strong foundation in cybersecurity with our 30-Day Intensive Program...",
  },
  {
    img: "/my-qnayds-app//Using Ai.png",
    title: "Advanced Excel Using AI",
    desc: "Master Excel like a professional using the power of AI. This 30-day intensive program...",
  },
  {
    img: "/my-qnayds-app//cybersecurity.png",
    title: "Advanced Cybersecurity Course",
    desc: "The Advanced Certified Cybersecurity Program is a job-oriented professional...",
  },
  {
    img: "/my-qnayds-app//ai poster.png",
    title: "Advanced AI Poster Designing",
    desc: "Master the art of professional poster creation using cutting-edge AI tools...",
  },
  {
    img: "/my-qnayds-app//ai for teachers.png",
    title: "AI for Teachers",
    desc: "Empower your classroom with artificial intelligence...",
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
  const trackRef   = useRef(null)
  const rafRef     = useRef(null)   // requestAnimationFrame id
  const scrolling  = useRef(false)  // is auto-scroll running?
  const SCROLL_AMOUNT = 324

  // ── rAF loop — runs while cursor is over track ──
  const tick = useCallback(() => {
    const el = trackRef.current
    if (!el || !scrolling.current) return
    // loop back when reaching end
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
      el.scrollLeft = 0
    } else {
      el.scrollLeft += 1.2   // speed: px per frame
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  const startScroll = () => {
    if (scrolling.current) return   // already running
    scrolling.current = true
    rafRef.current = requestAnimationFrame(tick)
  }

  const stopScroll = () => {
    scrolling.current = false
    cancelAnimationFrame(rafRef.current)
  }

  // ── Arrow buttons ──
  const scrollLeft  = () => trackRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })
  const scrollRight = () => trackRef.current?.scrollBy({ left:  SCROLL_AMOUNT, behavior: 'smooth' })

  // ── Drag-to-scroll ──
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e) => {
    stopScroll()
    drag.current = {
      active: true,
      startX: e.pageX - trackRef.current.offsetLeft,
      scrollLeft: trackRef.current.scrollLeft,
    }
  }
  const onMouseUp = () => {
    drag.current.active = false
    startScroll()
  }
  const onMouseMove = (e) => {
    if (!drag.current.active) return
    e.preventDefault()
    trackRef.current.scrollLeft =
      drag.current.scrollLeft - (e.pageX - trackRef.current.offsetLeft - drag.current.startX)
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
            onMouseEnter={startScroll}
            onMouseLeave={stopScroll}
            onMouseDown={onMouseDown}
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