import { useState } from 'react'
import '../styles/Chatbot.css'
import logo from '../assets/logo.png'  // same path as your Header.jsx



const QA = [
  { q: ["courses", "what courses", "course list"], a: "We offer: 30 Days Hacking, Advanced Excel Using AI, Advanced Cybersecurity, Ethical Hacking Masterclass, Python Using AI, and Web Development Bootcamp." },
  // { q: ["price", "cost", "fee", "how much"], a: "Courses start from ₹3,999. Hacking Course: ₹5,999 | Excel AI: ₹7,999 | Cybersecurity: ₹5,999." },
  { q: ["contact", "phone", "call", "reach"], a: "Call us at +91-7907564898 or visit our website to connect." },
  { q: ["internship"], a: "We offer internships in Cybersecurity, Penetration Testing, Bug Bounty, and Digital Forensics." },
  { q: ["about", "who are you", "qnayds"], a: "QNAYDS is a cybersecurity training academy focused on producing skilled cyber professionals through hands-on learning." },
  { q: ["hello", "hi", "hey","hlo"], a: "Hi! 👋 Welcome to QNAYDS. How can I help you today?" },
  { q: ["duration", "how long"], a: "Course durations range from 30 days to 6 months depending on the program." },
  { q: ["certificate", "certification"], a: "Yes! All courses come with a certificate of completion from QNAYDS." },
]

function getReply(input) {
  const lower = input.toLowerCase()
  for (const item of QA) {
    if (item.q.some(k => lower.includes(k))) return item.a
  }
  return "I'm not sure about that. Please call us at +91-7907564898 or use the Contact Us page for more help."
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! 👋 Welcome to QNAYDS. Ask me anything about our courses or internships!' }
  ])
  const [input, setInput] = useState('')

  function send() {
    if (!input.trim()) return
    const userMsg = { from: 'user', text: input }
    const botMsg  = { from: 'bot', text: getReply(input) }
    setMessages(prev => [...prev, userMsg, botMsg])
    setInput('')
  }

  function handleKey(e) {
    if (e.key === 'Enter') send()
  }

  return (
    <>
      {/* Floating button */}
      <button className="cb-fab" onClick={() => setOpen(o => !o)}>
        {open ? '✕' : '💬'}
      </button>

      {/* Chat window */}
      {open && (
        <div className="cb-window">
          <div className="cb-header">
          
<img src={logo} alt="QNAYDS" className="cb-avatar-img" />
            <div>
              <p className="cb-name">QNAYDS Assistant</p>
              <p className="cb-status">● Online</p>
            </div>
          </div>

          <div className="cb-messages">
            {messages.map((m, i) => (
              <div key={i} className={`cb-msg ${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="cb-input-row">
            <input
              className="cb-input"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className="cb-send" onClick={send}>➤</button>
          </div>
        </div>
      )}
    </>
  )
}