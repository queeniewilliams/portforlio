import React from 'react'
import '../css/NavBar.css'

const Navbar = ({ sticky, drawerToggleClickHandler }) => (
  <nav className={sticky ? 'navbar navbar-sticky' : 'navbar'}>
    <div className="navbar--logo-holder">
      {sticky ? (
        <img
          src="https://i.ibb.co/vLJVCjh/Nice-Png-hamburger-icon-png-415090.png"
          className="navbar--logo"
          onClick={drawerToggleClickHandler}
        />
      ) : null}
    </div>
  </nav>
)
export default Navbar
