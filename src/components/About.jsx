import React from 'react'
import '../styles/About.css'

// ══════════════════════════════════════
// Data
// ══════════════════════════════════════

const expertiseData = [
  {
    img: "/my-qnayds-app//industry relevent.webp",
    title: "Industry-Relevant Master Courses",
    desc: "Comprehensive programs in Prompt Engineering, Ethical Hacking, Python with AI, Stock Trading, and Digital Marketing — designed to meet current industry demands.",
  },
  {
    img: "/my-qnayds-app//hands on inrernship.jpg",
    title: "Hands-On Internships & Career Training",
    desc: "Certified internships with real-world projects in Web Development, AI Tools, and Data Science — focused on employability and skill application.",
  },
  {
    img: "/my-qnayds-app//academic.webp",
    title: "Academic & Institutional Programs",
    desc: "Customized add-on and certification courses for Engineering, Polytechnic, and School students, developed in collaboration with institutions.",
  },
  {
    img: "/my-qnayds-app//learner.png",
    title: "Learner Engagement & EdTech Innovation",
    desc: "AI-powered learning, WhatsApp academic updates, placement support, and interactive tools to make education more effective and accessible.",
  },
]

const collegeLogos = [
  { name: "IIT",                                        src: "/images/colleges/iit.png" },
  { name: "NIT Calicut",                                src: "/images/colleges/nit-calicut.png" },
  { name: "Government Engineering College Thrissur",    src: "/images/colleges/gec-thrissur.png" },
  { name: "Pranavam",                                   src: "/images/colleges/pranavam.png" },
  { name: "Vidya",                                      src: "/images/colleges/vidya.png" },
  { name: "Institute of Printing Technology",           src: "/images/colleges/ipt.png" },
  { name: "MEA Engineering College",                    src: "/images/colleges/mea.png" },
  { name: "Christ College of Engineering",              src: "/images/colleges/christ.png" },
  { name: "Government Engineering College Kozhikode",   src: "/images/colleges/gec-kozhikode.png" },
  { name: "Arya Jyothi Campus",                         src: "/images/colleges/arya-jyothi.png" },
]

const valuesData = [
  { img: "/my-qnayds-app//enginerer.png", stat: "100+",   label: "Engineering colleges", prefix: "Trained" },
  { img: "/my-qnayds-app//expert traines.png", stat: "200+",   label: "Expert Trainers",       prefix: "" },
  { img: "/my-qnayds-app//students.png", stat: "10000+", label: "Students Trained",      prefix: "" },
]

const partnersData = [
  { name: "DiMOIS Training Institute",  src: "/images/partners/dimois.png" },
  { name: "ICT Academy",                src: "/images/partners/ict-academy.png" },
  { name: "FitMyJob",                   src: "/images/partners/fitmyjob.png" },
  { name: "Stripe Data",                src: "/images/partners/stripedata.png" },
  { name: "Keltron",                    src: "/images/partners/keltron.png" },
  { name: "IIB Research Foundation",   src: "/images/partners/iib.png" },
  { name: "Corpaia",                    src: "/images/partners/corpaia.png" },
]

const statsData = [
  { num: '2500+', label: 'Students Enrolled' },
  { num: '10+',   label: 'Expert Trainers' },
  { num: '15+',   label: 'Courses Available' },
  { num: '5+',    label: 'Years Experience' },
]

const valuesCards = [
  { icon: '💡', title: 'Innovation',      text: 'Integrating AI and emerging tools to enhance learning.' },
  { icon: '📊', title: 'Expanding Reach', text: 'Impacting learners across India and beyond.' },
  { icon: '🎓', title: 'Learner-Centric', text: 'Tailored to students, institutions, and professionals.' },
  { icon: '✅', title: 'Proven Success',  text: 'Trusted by 1000s of students and companies.' },
]

// ══════════════════════════════════════
// Sub-components
// ══════════════════════════════════════

function SectionHeading({ text }) {
  return (
    <div className="au-heading-wrap">
      <h2 className="au-heading">{text}</h2>
      <div className="au-heading-line" />
    </div>
  )
}

function ExpertiseCard({ item }) {
  return (
    <div className="au-exp-card">
      <div className="au-exp-img-wrap">
        <img src={item.img} alt={item.title} className="au-exp-img" />
      </div>
      <div className="au-exp-body">
        <h3 className="au-exp-title">{item.title}</h3>
        <p className="au-exp-desc">{item.desc}</p>
      </div>
    </div>
  )
}

function ValueCard({ item }) {
  return (
    <div className="au-val-card">
      <div className="au-val-img-wrap">
        <img src={item.img} alt={item.label} className="au-val-img" />
      </div>
      <div className="au-val-stat">
        {item.prefix && <span className="au-val-prefix">{item.prefix} </span>}
        <span className="au-val-num">{item.stat}</span>
      </div>
      <p className="au-val-label">{item.label}</p>
    </div>
  )
}

// ══════════════════════════════════════
// Main Component
// ══════════════════════════════════════

function About() {
  return (
    <div id="about">

      {/* ══ SECTION 1 — Who Are We ══ */}
      <section className="about">
        <div className="about-inner">

          {/* LEFT */}
          <div className="about-left">
            <p className="about-tag">ABOUT US</p>
            <h2 className="about-heading">
            Who are <span className="about-accent">We?</span>
            </h2><div className="about-video-wrap">
    <video
      src="/my-qnayds-app/\about-video.mp4"
    />
    <div className="about-video-badge">
      <span className="badge-dot"></span>
      QNAYDS Introduction
    </div>
  </div>

            <p className="about-para">
              The need for cyber security has never been greater than it is now, given our
              increased reliance on technology. We at QNAYDS are of the opinion that it is
              everyone's right to feel safe and secure. As a result, we decided to establish an
              academy with the sole purpose of training passionate and knowledgeable cyber
              experts with a vision of a safer internet.
            </p>

            <p className="about-para">
              At QNAYDS we focus on cyber security training focused on producing cyber security
              professionals with a wide range of abilities to counter threats from the internet and
              cloud to a business. We are committed to molding young minds through thorough
              operation-based learning initiatives which help them upskill their abilities and to
              face the cyber world with confidence.
            </p>

            <button className="btn-primary">Learn More →</button>

            {/* WHY US */}
            <div className="why-us">
              <h3 className="why-heading">
                What makes our courses a <span className="about-accent">superior choice</span> for learning?
              </h3>
              <p className="why-sub">
                QNAYDS offers expert-led cyber security training with practical
                learning, real-world scenarios, and career-focused guidance.
              </p>
              <div className="why-list">
                {[
                  'Hands-On Penetration Testing with Realistic Labs',
                  'Career-Oriented Learning for Cyber Security Professionals',
                  'Real-World Attack Simulations and Security Challenges',
                ].map((item) => (
                  <div className="why-item" key={item}>
                    <span className="why-check">✅</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* STATS */}
            <div className="about-stats">
              {statsData.map(({ num, label }) => (
                <div className="about-stat" key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-left">

            {/* ── VIDEO ──
            <div className="about-video-wrap">
              <video
  src="/about-video.mp4"
  controls
  playsInline
  className="about-video"
/>
              <div className="about-video-badge">
                <span className="badge-dot"></span>
                QNAYDS Introduction
              </div>
            </div> */}

            {/* Founders */}
            <div className="founders-section">
              <p className="right-tag">FOUNDERS</p>
             
              <br />
              <br />
              <img
                src="/my-qnayds-app//founders.png"
                alt="Rishan NK and Sawad KT - Founders"
                className="founders-img"
              />
            </div>

            {/* Vision */}
            <div className="about-block">
              <div className="block-icon">🎯</div>
              <div>
                <p className="block-title">Our Vision</p>
                <p className="block-text">
                  To become a global leader in redefining the way the world learns — by bridging
                  skill gaps, nurturing innovation, and fostering a lifelong passion for learning.
                  We envision a future where quality education is accessible to all through
                  technology-driven, future-ready platforms.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="about-block">
              <div className="block-icon">🚀</div>
              <div>
                <p className="block-title">Our Mission</p>
                <p className="block-text">
                  To empower learners by providing accessible, practical, and future-focused
                  education. Through innovative technology, hands-on training, and industry-relevant
                  content, we aim to bridge the gap between academics and real-world skills.
                </p>
              </div>
            </div>

            {/* Values Row */}
            <div className="values-row">
              {valuesCards.map(({ icon, title, text }) => (
                <div className="value-card" key={title}>
                  <span className="value-icon">{icon}</span>
                  <p className="value-title">{title}</p>
                  <p className="value-text">{text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — Area of Expertise ══ */}
      <section className="au-section au-expertise">
        <div className="au-container">
          <SectionHeading text="AREA OF EXPERTISE" />
          <div className="au-exp-grid">
            {expertiseData.map((item, i) => (
              <ExpertiseCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 — Track Records of Colleges ══ */}
     <section className="au-section au-colleges">
  <div className="au-container">
    <SectionHeading text="TRACK RECORDS OF COLLEGES" />
    
    <div className="au-college-banner">
      <img
        src="/my-qnayds-app/\college-logo.png"
        alt="Colleges we have trained"
        className="au-college-banner-img"
      />
    </div>
        </div>
      </section>

      {/* ══ SECTION 4 — Values Delivered ══ */}
      <section className="au-section au-values">
        <div className="au-container">
          <SectionHeading text="VALUES DELIVERED" />
          <div className="au-val-grid">
            {valuesData.map((item, i) => (
              <ValueCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 5 — Our Partners ══ */}
    
<section className="au-section au-partners">
  <div className="au-container">
    <SectionHeading text="OUR PARTNERS" />

    <div className="au-partners-banner">
      <img
        src="/my-qnayds-app/Partners-logo.png"
        alt="Our Partners"
        className="au-partners-banner-img"
      />
    </div>

  </div>
</section>

    </div>
  )
}

export default About