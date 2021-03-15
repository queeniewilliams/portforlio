import React from 'react'
import '../css/project.css'
import { NavLink } from 'react-router-dom'

const Projects = () => {
  return (
    <div className="projects">
      <NavLink
        className="navlink"
        to="/fincloud"
        style={{ textDecoration: 'none' }}
      >
        <div className="project">
          <img
            src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
            alt="project"
            width="600px"
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
                width="90px"
              />
              <img
                src="https://i.ibb.co/k8njgQK/mongodb-original-wordmark-1324760552967962880-512.png"
                alt="project"
                width="75px"
                height="75px"
              />
              <img
                src="https://kalvanaveen.github.io/WebDevelopmentResources.github.io/Images/Express-JS-min.png"
                alt="project"
                width="70px"
                height="75px"
              />
            </div>
          </div>
        </div>
      </NavLink>
      <NavLink className="navlink" to="/p2" style={{ textDecoration: 'none' }}>
        <div className="project">
          <img
            src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
            alt="project"
            width="600px"
          />
          <div id="project-intro">
            <h2>Project 2</h2>
          </div>
        </div>
      </NavLink>
      <NavLink className="navlink" to="/p3" style={{ textDecoration: 'none' }}>
        <div className="project">
          <img
            src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
            alt="project"
            width="600px"
          />
          <div id="project-intro">
            <h2>Project 3</h2>
          </div>
        </div>
      </NavLink>
      <NavLink className="navlink" to="/p4" style={{ textDecoration: 'none' }}>
        <div className="project">
          <img
            src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
            alt="project"
            width="600px"
          />
          <div id="project-intro">
            <h2>Project 4</h2>
          </div>
        </div>
      </NavLink>
    </div>
  )
}
export default Projects
