import React from 'react'
import '../css/Home.css'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Mywork from './Mywork'
import  '../css/Mywork.css'


const Home = () => {
  return (
    <div>
        {/* HERO SECTION - Keep these together */}
        <div id='home' className='header-text'>
            <p>Fronted Developer</p>
            <h1>Hi, <span>Israel</span> From Nigeria</h1>

            <div className="heroimage"></div>
        </div>

        {/* CONTENT SECTIONS - Move these OUTSIDE of header-text */}
        <div id='about'> 
           <About/>
        </div>
        <div id='services'> 
          <Service/>
        </div>
  
      <div id='work'>
        <Mywork/>
      </div>
        <div id='contact'>
          <Contact/>
        </div>
    </div>
  )
}

export default Home;

