import React from 'react'
import Footer from './Footer'
import SlideDrawer from './SlideDrawer'
import Backdrop from './Backdrop'

const RushHour = (props) => {
  return (
    <div className="rushhour-box">
      <div className="rushhour-header" ref={props.element}>
        <SlideDrawer show={props.drawerOpen} />
        {props.drawerOpen ? (
          <Backdrop close={props.backdropClickHandler} />
        ) : null}
      </div>
      <div className="body-container">
        <div className="rushhour-summary">
          <h1>Rush Hour</h1>
          <a>Lauch site</a>
          <div className="rushhour-intro">
            <span>
              <h2 className="h2">Role</h2>
              <li>UX/UI Designer</li>
              <li>Front-End Developer</li>
              <li>Back-End Developer</li>
            </span>
            <span>
              <h2 className="h2">Stack</h2>
              <li>React</li>
              <li>Sequelize</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </span>
          </div>
          <h2 className="h2">summary</h2>
          <h3 style={{ lineHeight: '1.5', fontWeight: 'normal' }}>
            RushHour is an interactive app where it helps users to find free
            parking nearby. Users are able to log into the app and post a free
            parking they found; meanwhile, all users are able to see the free
            parkings and detailed information, and also leave reviews.
          </h3>
          <h2 className="h2">Demo</h2>
          <img
            className="arrow bounce"
            src="https://i.ibb.co/N6DvSzv/image-1.png"
            width="50px"
          />
        </div>
        <img
          className="demo"
          alt="demo"
          src="https://i.ibb.co/x2cTw2K/ezgif-com-gif-maker.gif"
          width="350px"
        />
      </div>

      <div className="body-container" style={{ paddingTop: '10em' }}>
        <div className="wireframe">
          <img
            src="https://i.ibb.co/y88rRxB/Screen-Shot-2021-04-18-at-8-17-14-PM.png"
            width="500px"
          />
          <h6>Main screens</h6>
          <img
            src="https://i.ibb.co/L8nRTDB/Blank-diagram-copy.png"
            width="600px"
          />
          <h6>Wireframe</h6>
        </div>
        <div className="rushhour-content">
          <h1 id="h1">User Story</h1>
          <h3 style={{ lineHeight: '1.2', fontWeight: 'normal' }}>
            After login, the user can access the following key features:
            <br></br>
            <br></br>Users are able to log in to add/edit/delete their parking
            spot.
            <br></br>
            <br></br>Users are able to log in to see free parkings nearby.
            <br></br>
            <br></br> Users are able to see the distance between current
            location and the parking spot.
            <br></br> <br></br> Users are able to leave reviews for the parking
            after their visit and post pictures.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RushHour
