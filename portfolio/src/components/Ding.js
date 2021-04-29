import React from 'react'
import Footer from './Footer'

const Ding = () => {
  return (
    <div className="rushhour-box">
      <header>
        <h1>Ding!</h1>
      </header>
      <section className="section2">
        <span>
          <h2 className="h2">Role</h2>
          <li>UX/UI Designer</li>
          <li>Front-End Developer</li>
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
      <div className="demo-box">
        <div className="ding-summary">
          <h1 id="h1">summary</h1>
          <h3 style={{ lineHeight: '1.5' }}>
            Ding! is a fullstack application where users can customize their
            fridge and generate recipe ideas based on what ingredient that have
            on hand! Solving the ever looming question: "What should I have for
            dinner!?".
          </h3>
          <h1 id="h1">Demo</h1>
          <img
            className="arrow bounce"
            src="https://i.ibb.co/N6DvSzv/image-1.png"
            width="70px"
          />
        </div>
        <img
          className="demo-section"
          alt="demo"
          src="https://i.ibb.co/Yj1Xj6m/ezgif-com-gif-maker-copy-2.gif"
          width="700vw"
        />
      </div>
      <span id="seperate-line"></span>
      <div
        style={{
          width: '1000px',
          justifySelf: 'center',
          marginTop: '5em',
          marginBottom: '5em'
        }}
      >
        <h1 id="h1">User Story</h1>
        <h3 style={{ lineHeight: '1.5', fontSize: '25px' }}>
          After login, the user can access the following key features:
          <br></br>- Interactive dashboard where you can preset any dietary
          restrictions or save your favorite recipes for quick access.
          <br></br>- Post your own recipes and share them with the
          Ding!Community.
          <br></br>- Ability to "like" recipes and see what foods are trending.
        </h3>
      </div>
      <div className="gallery">
        <div id="left">
          <img
            src="https://i.ibb.co/5nPXsKH/Screen-Shot-2021-04-29-at-12-copy.png"
            alt="screen"
            width="80%"
          />
          <h3>Home</h3>
        </div>
        <div id="right">
          <img
            src="https://i.ibb.co/wWPXnFj/ipados14-ipad-pro-pages-10-3-format-background-7.png"
            alt="screen"
            width="80%"
          />
          <h3>Sign Up</h3>
        </div>
        <div id="left">
          <img
            src="https://i.ibb.co/JrYCt9T/ipados14-ipad-pro-pages-10-3-format-background-6.png"
            alt="screen"
            width="80%"
          />
          <h3>Dashboard</h3>
        </div>
        <div id="right">
          <img
            src="https://i.ibb.co/TRc5yB0/ipados14-ipad-pro-pages-10-3-format-background-5.png"
            alt="screen"
            width="80%"
          />
          <h3>Settings</h3>
        </div>
        <div id="left">
          <img
            src="https://i.ibb.co/Vw3LdMG/ipados14-ipad-pro-pages-10-3-format-background-4.png"
            alt="screen"
            width="80%"
          />
          <h3>Fridge</h3>
        </div>
        <div id="right">
          <img
            src="https://i.ibb.co/BzmBtzX/ipados14-ipad-pro-pages-10-3-format-background-3.png"
            alt="screen"
            width="80%"
          />
          <h3>Generate Recipes</h3>
        </div>
        <div id="left">
          <img
            src="https://i.ibb.co/fMGN7JF/ipados14-ipad-pro-pages-10-3-format-background-1.png"
            alt="screen"
            width="80%"
          />
          <h3>Create Recipe</h3>
        </div>
        <div id="right">
          <img
            src="https://i.ibb.co/F369z8j/ipados14-ipad-pro-pages-10-3-format-background.png"
            alt="screen"
            width="80%"
          />
          <h3>My Recipes</h3>
        </div>
        <div id="left" style={{ marginBottom: '10em' }}>
          <img
            src="https://i.ibb.co/rySZ5P5/Screen-Shot-2021-04-29-at-12.png"
            alt="screen"
            width="80%"
          />
          <h3>Popular Recipes</h3>
        </div>
        <div id="right" style={{ marginBottom: '10em' }}>
          <img
            src="https://i.ibb.co/CnfpKfN/ipados14-ipad-pro-pages-10-3-format-background-2.png"
            alt="screen"
            width="80%"
          />
          <h3>Find Restaurants</h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Ding
