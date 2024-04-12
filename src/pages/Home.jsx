import React, { useEffect } from 'react'

import Logo from '../assets/imgs/logo.png'

import '../assets/fonts/font.css'
import '../assets/fonts/nusar.css'

// import Button from '../components/Button'
import CountDown from '../components/CountDown'


import Events from '../components/Events'
import Services from '../components/Services'
import Contact from '../components/Contact'

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const tech = [
    { name: 'MindScapes Unfold', src: 'tech/event1', time: '10:30 AM' , type:'tech', path: '/event/mindscapes-unfold'},
    { name: 'Mysticode', src: 'tech/event2', time: '10:30AM', type:'tech', path: '/event/mysticode' },
    { name: 'Tech Trivia', src: 'tech/event3', time: '10:30AM', type:'tech' , path: '/event/tech-trivia'},
    { name: 'GrayScale', src: 'tech/event4', time: '10:30AM' , type:'tech', path: '/event/greyscale'},
    { name: 'CyberSleuth', src: 'tech/event5', time: '10:50AM', type:'tech', path: '/event/cybersleuth' }
  ]

  const nonTech = [
    { name: 'Snap Seek & Buzz', src: 'nontech/event1', time: '10:30 AM', type:'non-tech', path: '/event/snap-seek' },
    { name: 'Film Frency', src: 'nontech/event2', time: '10:30AM', type:'non-tech', path: '/event/film-frency' },
    { name: 'Apex Conquest', src: 'nontech/event3', time: '10:30AM', type:'non-tech', path: '/event/apex-conquest' },
  ]

  return (
    <div className='home'>
     
      <div className="hero" style={{ zIndex: 180, position: 'relative' }}>
       
        <div className="container logo">
          <div className="logo-img"><img width={320} src={Logo} alt="Petrona - A National Level Technical Symposium" /></div>

          <div className="logo-txt glow" style={{ fontFamily: 'Netron' }}>Petrona</div>
          <div className="glitch-wrapper">
            <div className="glitch" style={{margin: '16px 0'}} data-glitch="A National Level Technical Symposium">A National Level Technical Symposium</div>
          </div>
          {/* <Button className='reg-btn' /> */}
          <p style={{fontSize: 34}}>13th April'24</p>
        </div>
      </div>
      <div />

      <h1 className='count-h'>COUNTDOWN</h1>
      <CountDown />

      {/* Tech Evnets */}
      <h1 className='count-h'>TECHNICAL EVENTS</h1>
      <p className='count-p'>Unlock your potential and ignite your curiosity</p>


      <div className="grid-conatiner" style={{ position: 'relative' }}>
        {tech.map((event, index) => (
          <Events style={{ position: 'realative' }} events={event} key={index} />
        ))}
      </div>

      {/* Nob Tech Events */}

      <h1 className='count-h'>NON TECH EVENTS</h1>
      <p className='count-p'>Embrace discovery, every step brings new horizons</p>


      <div className="grid-conatiner" style={{ position: 'relative' }}>
        {nonTech.map((event, index) => (
          <Events style={{ position: 'realative' }} events={event} key={index} />
        ))}
      </div>


      <p className='count-p' style={{fontSize: 38, paddingTop: 8}}>Explore Our Awaited Offerings !</p>

      <Services/>

      <h1 className='count-h'>SPONSORS</h1>

        <div className="grid-sponsers">
          

          <div className="card">
            <img src="/imgs/sponsors/sp1.webp"  width="230" alt="Meriba Paneer" />
          </div>


          <div className="card">
            <img src="/imgs/sponsors/sp4.webp"  width="230" alt="" />
          </div>

          <div className="card">
            <img src="/imgs/sponsors/sp5.webp"  width="230" alt="" />
          </div>

          {/* <div className="card">
            <img src="/imgs/sponsors/sp1.png"  width="230" alt="" />
          </div> */}
        </div>


        <h1 className='count-h'>CONTACT US</h1>

        <Contact/>


      {/* <Footer/> */}


    </div>
  )
}

export default Home