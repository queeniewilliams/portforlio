import React from 'react'
import { NavLink } from 'react-router-dom'
import { animations } from 'react-animation'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  'https://blog.shakuro.com/wp-content/uploads/2020/01/profile_screen_app_design.gif',
  'https://cdn4.vectorstock.com/i/1000x1000/65/03/sign-up-screen-clean-mobile-ui-design-concept-vector-22346503.jpg',
  'https://cdn2.vectorstock.com/i/1000x1000/08/51/login-screen-ui-design-vector-16790851.jpg',
  'https://static.vecteezy.com/system/resources/previews/001/937/906/original/mobile-music-application-interface-design-ui-ux-gui-screens-music-app-flat-design-template-for-mobile-apps-vector.jpg'
]
const properties = {
  duration: 1500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false
}

const Introduction = () => {
  return (
    <div className="page">
      <div
        className="navBar"
        style={{
          animation: animations.slideIn
        }}
      >
        <img
          src="https://i.ibb.co/gZFQxvB/Screen-Shot-2021-03-10-at-8-25-57-PM.png"
          alt="Screen-Shot-2021-03-10-at-8-25-57-PM"
          width="80em"
        />
        <div className="verticalLine"></div>
        <div className="navBox">
          <NavLink
            to="/about"
            style={{ textDecoration: 'none', color: 'grey' }}
          >
            <h2 className="navTag">LinkedIn</h2>
          </NavLink>
          <NavLink
            to="/projects"
            style={{ textDecoration: 'none', color: 'grey' }}
          >
            <h2 className="navTag">GitHub</h2>
          </NavLink>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <NavLink
            to="/about"
            style={{ textDecoration: 'none', color: 'grey' }}
          >
            <p>About</p>
          </NavLink>
          <NavLink
            to="/projects"
            style={{ textDecoration: 'none', color: 'grey' }}
          >
            <p>Projects</p>
          </NavLink>
          <NavLink
            to="/contact"
            style={{ textDecoration: 'none', color: 'grey' }}
          >
            <p>Contact</p>
          </NavLink>
        </div>
        <div className="title">
          <h3>Queenie Williams</h3>
          <div style={{ display: 'flex' }}>
            <h4>UI/UX Designer</h4>
            <p className="line"></p>
          </div>
          <h1>
            Design is thinking <br></br>made visual.
          </h1>
        </div>
        <div className="cards">
          <Fade {...properties}>
            <div className="each-fade">
              <div className="image-container">
                <img className="slideImg" src={fadeImages[0]} />
                {/* </div>
            </div>
            <div className="each-fade">
              <div className="image-container"> */}
                <img className="slideImg" src={fadeImages[1]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img className="slideImg" src={fadeImages[2]} />
                <img className="slideImg" src={fadeImages[3]} />
              </div>
            </div>
          </Fade>
          {/* <h2>Project Card</h2> */}
        </div>
      </div>
    </div>
  )
}

export default Introduction
