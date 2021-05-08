import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import ReactMap, { Marker } from 'react-map-gl'

const Footer = () => {
  const [viewport, setViewport] = useState({
    width: '50vw',
    height: '30vh',
    latitude: 34.05,
    longitude: -118.2
  })

  return (
    <footer>
      <div className="footer-map">
        <div className="footer-nav">
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <h5>HOME</h5>
          </NavLink>
          <NavLink to="/about" style={{ textDecoration: 'none' }}>
            <h5>ABOUT</h5>
          </NavLink>
          <NavLink to="/projects" style={{ textDecoration: 'none' }}>
            <h5>PROJECTS</h5>
          </NavLink>
          <NavLink to="/resume" style={{ textDecoration: 'none' }}>
            <h5>RESUME</h5>
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
        <ReactMap
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/queeniew329/ckodx6noz1vuu17qoh4rvk17r"
          onViewportChange={(viewport) => setViewport(viewport)}
          maxZoom={20}
          minZoom={5}
        >
          <Marker longitude={-118.2437} latitude={34.0522}>
            <div className="marker-current"></div>
          </Marker>
        </ReactMap>
      </div>
      <div>
        <p>© 2021 Queenie Williams. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
