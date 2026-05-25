import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import About from './components/About'
import Footer from './components/Footer'
import Trainers from './components/Trainers'
import Chatbot from './components/Chatbot'
import Reviews from './components/Reviews'
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <div className="app">
      <Header />
      <Hero />
      
       <WhatsAppButton phoneNumber="917907564898" />
       <About />
      <Courses/>
      
     
      <Trainers/>
      <Reviews/>
      <Chatbot /> 

      <Footer />

    </div>

   
    </>
  )
}

export default App
