import React from 'react'
import '../css/About.css'
import ScrollIntoView from 'react-scroll-into-view'
import { NavLink } from 'react-router-dom'

export default class SlideDrawer extends React.Component {
  render() {
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
      drawerClasses = 'side-drawer open'
    }
    return (
      <div className={drawerClasses}>
        <div className="sideNav">
          <ScrollIntoView selector=".page">
            <img
              id="sideNav"
              src="https://i.ibb.co/4sPfHDV/Screen-Shot-2021-03-12-at-10-11-38-PM.png
              "
              alt="project-Logo"
              width="70em"
            />
          </ScrollIntoView>
          <NavLink to="/projects">
            <img
              id="sideNav"
              src="https://i.ibb.co/T2vk8f9/Screen-Shot-2021-03-12-at-10-14-53-PM.png"
              alt="project-Logo"
              width="70em"
            />
          </NavLink>
          <NavLink to="/resume">
            <img
              id="sideNav"
              src="https://i.ibb.co/XSgDDrg/Screen-Shot-2021-03-18-at-7-36-29-PM.png"
              alt="project-Logo"
              width="70em"
            />
          </NavLink>
          <img
            id="sideNav"
            src="https://i.ibb.co/WgfdL9K/Screen-Shot-2021-03-18-at-7-25-14-PM.png
            "
            alt="project-Logo"
            width="60em"
          />
          <img
            id="sideNav"
            src="https://i.ibb.co/K6YjxVg/Screen-Shot-2021-03-18-at-7-25-56-PM.png"
            alt="project-Logo"
            width="60em"
          />
        </div>
      </div>
    )
  }
}
