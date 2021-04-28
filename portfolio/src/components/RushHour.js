import React from 'react'

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
          <h1>summary</h1>
          <h3>
            RushHour is an interactive app where it helps users to find free
            parking nearby. Users are able to log into the app and post an free
            parking they found; meanwhile, all users are able to see the free
            parkings and detailed information, and also leave reviews.
          </h3>
          <h1>Demo</h1>
        </div>
        <img
          className="demo"
          alt="demo"
          src="https://i.ibb.co/x2cTw2K/ezgif-com-gif-maker.gif"
          width="450px"
        />
        <div>
          <img
            src="https://i.ibb.co/y88rRxB/Screen-Shot-2021-04-18-at-8-17-14-PM.png"
            width="600px"
          />
          <h3>main screens</h3>
        </div>
      </div>
    </div>
  )
}

export default RushHour
