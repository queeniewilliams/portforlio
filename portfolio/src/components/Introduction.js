import React from 'react'
import { NavLink } from 'react-router-dom'
import { animations } from 'react-animation'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import ScrollIntoView from 'react-scroll-into-view'
import About from './About'
import Projects from './Projects'

const fadeImages = [
  'https://i.ibb.co/DYxz1C7/expensetracker.jpg',
  'https://i.ibb.co/vd9R5KW/covid19-main.png',
  'https://i.ibb.co/h1HR28y/Screen-Shot-2021-02-11-at-2-07-23-PM.png',
  'https://i.ibb.co/y88rRxB/Screen-Shot-2021-04-18-at-8-17-14-PM.png'
]
const properties = {
  duration: 4000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false
}

const Introduction = () => {
  return (
    <div>
      <div className="page">
        <div
          className="navBar"
          style={{
            animation: animations.slideIn
          }}
        >
          {/* <img
            src="https://i.ibb.co/gZFQxvB/Screen-Shot-2021-03-10-at-8-25-57-PM.png"
            alt="Screen-Shot-2021-03-10-at-8-25-57-PM"
            width="80em"
          /> */}

          <div className="verticalLine"></div>
          <div className="navBox">
            <a
              href="https://www.linkedin.com/in/queeni%C3%A9-williams/"
              style={{ textDecoration: 'none' }}
            >
              <h2 className="navTag">LinkedIn</h2>
            </a>
            <div id="circle"></div>
            <a
              href="https://github.com/queeniewilliams?tab=repositories"
              style={{ textDecoration: 'none' }}
            >
              <h2 className="navTag">GitHub</h2>
            </a>
          </div>
          <div className="verticalLine"></div>
        </div>
        <div className="main">
          <div className="header">
            <ScrollIntoView selector=".container">
              {/* <NavLink
              to="/about"
              style={{ textDecoration: 'none', color: 'grey' }}
            > */}
              <p>ABOUT</p>
              {/* </NavLink> */}
            </ScrollIntoView>
            <ScrollIntoView selector=".projects">
              {/* <NavLink
              to="/projects"
              style={{ textDecoration: 'none', color: 'grey' }}
            > */}
              <p>PROJECTS</p>
              {/* </NavLink> */}
            </ScrollIntoView>
            <NavLink to="/resume" style={{ textDecoration: 'none' }}>
              <p>RESUME</p>
            </NavLink>
          </div>
          <div className="title">
            <h3>Queenie Williams</h3>
            <div style={{ display: 'flex' }}>
              <h4>Front-end Developer</h4>
            </div>
            <h1>
              Design is thinking <br></br>made visual.
            </h1>
            <ScrollIntoView selector=".container">
              <button id="enter">
                <h3 style={{ color: 'rgb(228, 191, 143)', margin: '0' }}>∨</h3>
              </button>
            </ScrollIntoView>
          </div>
          <div className="cards">
            <Fade {...properties}>
              <div className="each-fade">
                <div className="image-container">
                  <img
                    className="slideImg"
                    src={fadeImages[0]}
                    alt="slideshow"
                    style={{ filter: 'brightness(70%)' }}
                  />
                  {/* </div>
            </div>
            <div className="each-fade">
              <div className="image-container"> */}
                  <img
                    className="slideImg"
                    src={fadeImages[1]}
                    alt="slideshow"
                    style={{ filter: 'brightness(70%)' }}
                  />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img
                    className="slideImg"
                    src={fadeImages[2]}
                    alt="slideshow"
                  />
                  <img
                    className="slideImg"
                    src={fadeImages[3]}
                    alt="slideshow"
                    style={{ filter: 'brightness(70%)' }}
                  />
                </div>
              </div>
            </Fade>
            {/* <h2>Project Card</h2> */}
          </div>
        </div>
      </div>
      <About />
      <Projects />
    </div>
  )
}

export default Introduction
