import { useEffect, useRef } from 'react'
import '../styles/Reviews.css'

const reviewsData = [
  {
    name: "Amal Sebastian",
    time: "8 months ago",
    text: "I recently finished an online internship class, and it was a very good experience. The sessions were well-planned, interesting, and full of useful knowledge. The teachers explained everything clearly, which made learning easy and enjoyable.",
    rating: 4,
    src: null,
    color: "#e91e8c",
  },
  {
    name: "Fahad Haris",
    time: "9 months ago",
    text: "I recently completed an online internship class, and it turned out to be an incredibly valuable experience. The sessions were well-organized, engaging, and full of useful insights. The instructors explained every concept clearly, which made the learning process enjoyable.",
    rating: 5,
    src: null,
    color: "#1e88e5",
  },
  {
    name: "Angel Maria Mathew",
    time: "6 months ago",
    text: "I'm thrilled to share my experience with the 5-day online internship in Robotics and Data Analytics by QNAYDS! The program was engaging, informative, and hands-on. The mentors were supportive, providing clear explanations throughout.",
    rating: 5,
    src: null,
    color: "#7c3aed",
  },
  {
    name: "Karthikeyan Unnithan",
    time: "8 months ago",
    text: "I recently completed a 5 day online internship on Robotics. It was a great learning experience that helped me strengthen my basic knowledge in Robotics as it is not that easy as a beginner to try and self learn the topic.",
    rating: 5,
    src: null,
    color: "#7c3aed",
  },
  {
    name: "Aiswarya K R",
    time: "8 months ago",
    text: "I recently completed a 5-day online internship on Artificial Intelligence. The sessions were easy to understand, very informative, and helped me strengthen my basics in AI. The teacher was supportive and engaging, which made me more interested in learning further.",
    rating: 5,
    src: null,
    color: "#1e88e5",
  },
  {
    name: "Aswathi Biju",
    time: "10 months ago",
    text: "I recently completed a 5-day online internship and workshop on Artificial Intelligence. It was a great experience and the content was well-structured, and the instructors explained complex topics clearly. The teachers were very supportive throughout.",
    rating: 5,
    src: null,
    color: "#78909c",
  },
]

function StarRating({ count }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= count ? 'star filled' : 'star half'}>★</span>
      ))}
    </div>
  )
}

function Reviews() {
  const rowRef = useRef(null)

  const scroll = (dir) => {
    if (rowRef.current) {
      const card = rowRef.current.querySelector('.review-card')
      const cardWidth = card.offsetWidth + 24
      rowRef.current.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const cards = document.querySelectorAll('.review-card')
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
    <section className="reviews" id="reviews">
      <div className="reviews-header">
        <span className="reviews-badge">Google Reviews</span>
        <h2>Let Our Students be Our Voice: Hear Their Stories, See Our Impact.</h2>
        <p>Together, we can make a difference and give our students the platform they deserve.</p>
        <div className="reviews-rating">
          <span className="rating-number">4.8</span>
          <StarRating count={5} />
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="rating-link">
            528 Google Reviews
          </a>
        </div>
      </div>

      <div className="reviews-carousel">
        <button className="carousel-arrow left" onClick={() => scroll(-1)} aria-label="Scroll left">
          &#8249;
        </button>

        <div className="reviews-row" ref={rowRef}>
          {reviewsData.map((review, i) => (
            <div className="review-card" key={i}>
              <p className="review-text">{review.text}</p>
              <hr className="review-divider" />
              <div className="review-footer">
                <div className="review-author">
                  {review.src ? (
                    <img src={review.src} alt={review.name} className="review-avatar" />
                  ) : (
                    <div className="review-avatar-initial" style={{ background: review.color }}>
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="review-name">{review.name}</p>
                    <p className="review-time">{review.time}</p>
                  </div>
                </div>
                <StarRating count={review.rating} />
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

export default Reviews