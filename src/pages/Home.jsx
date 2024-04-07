import React from 'react'
import Particle from '../components/Particle'

import Logo from '../assets/imgs/logo.png'

import '../assets/fonts/font.css'
import '../assets/fonts/nusar.css'

import Button from '../components/Button'
import CountDown from '../components/CountDown'


import Events from '../components/Events'
import Footer from '../components/Footer'

function Home() {

  const tech = [
    { name: 'MindScapes Unfold', src: 'tech/event1', time: '10:30 AM' },
    { name: 'Mysticode', src: 'tech/event2', time: '10:30AM' },
    { name: 'Tech Trivia', src: 'tech/event3', time: '10:30AM' },
    { name: 'DesignScape', src: 'tech/event2', time: '10:30AM' },
    { name: 'Treasure Hunt', src: 'tech/event5', time: '10:50AM' }
  ]

  const nonTech = [
    { name: 'Snap Seek & Buzz', src: 'nontech/event1', time: '10:30 AM' },
    { name: 'Film Frency', src: 'nontech/event2', time: '10:30AM' },
    { name: 'Fun Games', src: 'nontech/event2', time: '10:30AM' },
]

  return (
    <div className='home'>
      <Particle />
      <div className="hero" style={{ zIndex: 180, position: 'relative' }}>
        <div className="container logo">
          <div className="logo-img"><img width={320} src={Logo} alt="Petrona - A National Level Technical Symposium" /></div>
          <div className="logo-txt glow" style={{ fontFamily: 'Netron' }}>Petrona</div>
          <Button className='reg-btn' />
        </div>
      </div>
      <div />

      <h1 className='count-h'>COUNTDOWN</h1>
      <CountDown />

      {/* Tech Evnets */}
      <h1 className='count-h'>TECHNICAL EVENTS</h1>
      <p className='count-p'>Unlock your potential and ignite your curiosity</p>


      <div className="grid-conatiner" style={{ position: 'relative' }}>
        {console.log(tech)}
        {tech.map((event, index) => (
          <Events style={{ position: 'realative' }} events={event} key={index} />
        ))}
        </div>




        {/* Nob Tech Events */}

        <h1 className='count-h'>NON TECH EVENTS</h1>
        <p className='count-p'>Embrace discovery, every step brings new horizons</p>


        <div className="grid-conatiner" style={{ position: 'relative' }}>
          {console.log(tech)}
          {nonTech.map((event, index) => (
            <Events style={{ position: 'realative' }} events={event} key={index} />
          ))}
        </div>


          <Footer/>


      </div>
      )
}

      export default Home