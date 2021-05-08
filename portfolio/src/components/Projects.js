import React from 'react'
import '../css/project.css'
import { NavLink } from 'react-router-dom'
import SlideDrawer from './SlideDrawer'
import Backdrop from './Backdrop'

const Projects = (props) => {
  return (
    <div className="projects">
      <div className="rushhour-header" ref={props.element}>
        <SlideDrawer show={props.drawerOpen} />
        {props.drawerOpen ? (
          <Backdrop close={props.backdropClickHandler} />
        ) : null}
      </div>
      <NavLink
        className="navlink"
        to="/projects/rushhour"
        style={{ textDecoration: 'none' }}
      >
        <div className="project">
          <img
            src="https://i.ibb.co/y88rRxB/Screen-Shot-2021-04-18-at-8-17-14-PM.png"
            alt="project"
            width="620px"
            style={{ borderRadius: '5px' }}
          />
          <div id="project-intro">
            <p id="project-name">Rush Hour</p>
            <p id="text">
              A digital interactive platform that helps users to find free
              parking nearby and detailed information.
            </p>
            <div id="icons">
              <img
                src="https://i.ibb.co/jbY89w4/design-development-facebook-framework-mobile-react-icon-1320165723839064798-512.png"
                alt="project"
                width="90px"
              />
              <img
                src="https://i.ibb.co/P5rk8Wk/postgres.png"
                alt="project"
                width="80px"
                style={{ marginLeft: '-15px' }}
              />
              <img
                src="https://i.ibb.co/fQt7JTh/sequelize-logo-png-transparent.png"
                alt="project"
                width="50px"
                height="50px"
              />
              <img
                src="https://kalvanaveen.github.io/WebDevelopmentResources.github.io/Images/Express-JS-min.png"
                alt="project"
                width="60px"
                height="60px"
                style={{ marginLeft: '15px' }}
              />
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink
        className="navlink"
        to="/projects/ding"
        style={{ textDecoration: 'none' }}
      >
        <div className="project">
          <img
            src="https://i.ibb.co/wYjyqZF/Screen-Shot-2021-04-27-at-2-08-10-PM.png"
            alt="project"
            width="620px"
            style={{ borderRadius: '5px' }}
          />
          <div id="project-intro">
            <p id="project-name">Ding!</p>
            <p id="text">
              Ding! is a fullstack application where users can customize their
              fridge and generate recipe ideas based on what ingredients they
              have on hand! Solving the ever looming question: "What should I
              have for dinner!?".
            </p>
            <div id="icons">
              <img
                src="https://i.ibb.co/jbY89w4/design-development-facebook-framework-mobile-react-icon-1320165723839064798-512.png"
                alt="project"
                width="90px"
              />
              <img
                src="https://i.ibb.co/P5rk8Wk/postgres.png"
                alt="project"
                width="80px"
                style={{ marginLeft: '-15px' }}
              />
              <img
                src="https://i.ibb.co/fQt7JTh/sequelize-logo-png-transparent.png"
                alt="project"
                width="50px"
                height="50px"
              />
              <img
                src="https://kalvanaveen.github.io/WebDevelopmentResources.github.io/Images/Express-JS-min.png"
                alt="project"
                width="60px"
                height="60px"
                style={{ marginLeft: '15px' }}
              />
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink
        className="navlink"
        to="/projects/fincloud"
        style={{ textDecoration: 'none' }}
      >
        <div className="project">
          <img
            src="https://i.ibb.co/DYxz1C7/expensetracker.jpg"
            alt="project"
            width="620px"
            style={{ borderRadius: '5px' }}
          />
          <div id="project-intro">
            <p id="project-name">FinCloud</p>
            <p id="text">
              This full-stack development project allows an user to track
              personal incomes and expenses either from a big-picture
              perspective or in rich details.
            </p>
            <div id="icons">
              <img
                src="https://i.ibb.co/jbY89w4/design-development-facebook-framework-mobile-react-icon-1320165723839064798-512.png"
                alt="project"
                width="90px"
              />
              <img
                src="https://i.ibb.co/KF8bKgD/install-javascript-js-node-npm-tools-icon-1320165731324625592-512.png"
                alt="project"
                width="80px"
              />
              <img
                src="https://i.ibb.co/k8njgQK/mongodb-original-wordmark-1324760552967962880-512.png"
                alt="project"
                width="65px"
                height="65px"
              />
              <img
                src="https://kalvanaveen.github.io/WebDevelopmentResources.github.io/Images/Express-JS-min.png"
                alt="project"
                width="65px"
                height="65px"
              />
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink className="navlink" to="/p2" style={{ textDecoration: 'none' }}>
        <div className="project">
          <img
            src="https://i.ibb.co/vd9R5KW/covid19-main.png"
            alt="project"
            width="620px"
            style={{ borderRadius: '5px' }}
          />
          <div id="project-intro">
            <h2>Project 2</h2>
          </div>
        </div>
      </NavLink>
      <NavLink
        className="navlink"
        to="/projects/roulette"
        style={{ textDecoration: 'none' }}
      >
        <div className="project">
          <img
            src="https://i.ibb.co/h1HR28y/Screen-Shot-2021-02-11-at-2-07-23-PM.png"
            alt="project"
            width="620px"
            style={{ borderRadius: '5px' }}
          />
          <div id="project-intro">
            <p id="project-name">Casino Roulette</p>
            <p id="text">An online casino roulette game.</p>
            <div id="icons">
              <img
                src="https://i.ibb.co/RCjhWjG/javascript-icon-130900.png"
                alt="project"
                width="50px"
              />
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink
        className="navlink"
        to="/projects/nfty"
        style={{ textDecoration: 'none' }}
      >
        <div className="project">
          <img
            src="https://i.ibb.co/TW3MGpM/Screen-Shot-2021-04-27-at-3-55-55-PM.png"
            alt="project"
            width="620px"
            style={{ borderRadius: '5px' }}
          />
          <div id="project-intro">
            <p id="project-name">NFTy</p>
            <p id="text"></p>
          </div>
        </div>
      </NavLink>
    </div>
  )
}
export default Projects
