import React from 'react'
import { NavLink } from 'react-router-dom'
import { animations } from 'react-animation'

const Introduction = () => {
  return (
    <div className="page">
      <div
        className="navBar"
        style={{
          animation: animations.slideIn
        }}
      >
        <div className="navBox">
          <NavLink to="/about" style={{ textDecoration: 'none' }}>
            <h2 className="navTag">About</h2>
          </NavLink>
          <NavLink to="/projects" style={{ textDecoration: 'none' }}>
            <h2 className="navTag">Projects</h2>
          </NavLink>
          <NavLink to="/contact" style={{ textDecoration: 'none' }}>
            <h2 className="navTag">Contact</h2>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Introduction
