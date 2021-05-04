import React from 'react'
import Footer from './Footer'

const RushHour = () => {
  return (
    <div className="rushhour-box">
      <header>
        <h1>Rush Hour</h1>
      </header>
      <section className="section2">
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
        <span>
          <h2 className="h2">Time</h2>
        </span>
        <span>
          <h2 className="h2">Demo</h2>
        </span>
      </section>
      <span id="seperate-line"></span>
      <div className="body-container">
        <div className="rushhour-summary">
          <h1 id="h1">summary</h1>
          <h3 style={{ lineHeight: '1.5' }}>
            RushHour is an interactive app where it helps users to find free
            parking nearby. Users are able to log into the app and post an free
            parking they found; meanwhile, all users are able to see the free
            parkings and detailed information, and also leave reviews.
          </h3>
          <h1 id="h1">Demo</h1>
          <img
            className="arrow bounce"
            src="https://i.ibb.co/N6DvSzv/image-1.png"
            width="70px"
          />
        </div>
        <img
          className="demo"
          alt="demo"
          src="https://i.ibb.co/x2cTw2K/ezgif-com-gif-maker.gif"
          width="350px"
        />
      </div>

      <div className="body-container">
        <div className="wireframe">
          <img
            src="https://i.ibb.co/y88rRxB/Screen-Shot-2021-04-18-at-8-17-14-PM.png"
            width="500px"
          />
          <h3>Main screens</h3>
          <img
            src="https://i.ibb.co/L8nRTDB/Blank-diagram-copy.png"
            width="600px"
          />
          <h3>Wireframe</h3>
        </div>
        <div className="rushhour-content">
          <h1 id="h1">User Story</h1>
          <h3 style={{ lineHeight: '1.5' }}>
            After login, the user can access the following key features:
            <br></br>- Users are able to log in to add/edit/delete their parking
            spot.
            <br></br> - Users are able to log in to see free parkings nearby.
            <br></br>- Users are able to see the distance between current
            location and the parking spot.
            <br></br> - Users are able to leave reviews for the parking after
            their visit and post pictures.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RushHour
