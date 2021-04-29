import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <h2>HOME</h2>
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: 'none' }}>
          <h2>ABOUT</h2>
        </NavLink>
        <NavLink to="/projects" style={{ textDecoration: 'none' }}>
          <h2>PROJECTS</h2>
        </NavLink>
        <NavLink to="/resume" style={{ textDecoration: 'none' }}>
          <h2>RESUME</h2>
        </NavLink>
      </div>
      <div>
        <img
          src="https://i.ibb.co/ZJg2gCJ/kisspng-linkedin-computer-icons-business-advertising-compa-grey-background-5acab17806b152-7517612915.png"
          alt="icon"
          width="50px"
          style={{ marginRight: '1em' }}
        />
        <img
          src="https://i.ibb.co/ZmChxdM/pngfind-com-github-png-2562232.png"
          alt="icon"
          width="47px"
          style={{ marginLeft: '1em' }}
        />
      </div>
      <div>
        <p>© 2021 Queenie Williams. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
