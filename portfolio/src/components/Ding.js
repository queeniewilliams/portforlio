import React from 'react'
import Footer from './Footer'
import SlideDrawer from './SlideDrawer'
import Backdrop from './Backdrop'

const Ding = (props) => {
  return (
    <div className="rushhour-box">
      <div className="rushhour-header" ref={props.element}>
        <SlideDrawer show={props.drawerOpen} />
        {props.drawerOpen ? (
          <Backdrop close={props.backdropClickHandler} />
        ) : null}
      </div>

      <div className="demo-box">
        <div className="ding-summary">
          <a className="launch">Lauch site</a>
          <div className="rushhour-intro">
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
          </div>
          <h2 className="h2">summary</h2>
          <h3 style={{ lineHeight: '1.5', fontWeight: 'normal' }}>
            Ding! is a fullstack application where users can customize their
            fridge and generate recipe ideas based on what ingredient they have
            on hand! Solving the ever looming question: "What should I have for
            dinner!?".
          </h3>
          <h2 className="h2">Demo</h2>
          <img
            className="arrow bounce"
            src="https://i.ibb.co/N6DvSzv/image-1.png"
            width="50px"
          />
        </div>
        <div className="demo-section">
          <div className="title-logo">Ding!</div>
          <img
            alt="demo"
            src="https://i.ibb.co/Yj1Xj6m/ezgif-com-gif-maker-copy-2.gif"
            width="700vw"
          />
        </div>
      </div>
      <span id="seperate-line"></span>
      <div
        style={{
          width: '50%',
          justifySelf: 'center',
          marginTop: '5em',
          marginBottom: '5em'
        }}
      >
        <h2 className="h2">User Story</h2>
        <h3 style={{ lineHeight: '1.2', fontWeight: 'normal' }}>
          After login, the user can access the following key features:
          <br></br>
          <br></br>Interactive dashboard where you can preset any dietary
          restrictions or save your favorite recipes for quick access.
          <br></br>
          <br></br>Post your own recipes and share them with the Ding!Community.
          <br></br>
          <br></br> Ability to "like" recipes and see what foods are trending.
        </h3>
      </div>
      <div className="gallery">
        <div id="left">
          <img
            src="https://i.ibb.co/5nPXsKH/Screen-Shot-2021-04-29-at-12-copy.png"
            alt="screen"
            width="80%"
            style={{ borderRadius: '20px' }}
          />
          <h6>Home</h6>
        </div>
        <div id="right">
          <img
            src="https://i.ibb.co/wWPXnFj/ipados14-ipad-pro-pages-10-3-format-background-7.png"
            alt="screen"
            width="80%"
            style={{ borderRadius: '20px' }}
          />
          <h6>Sign Up</h6>
        </div>
        <div id="left">
          <img
            src="https://i.ibb.co/JrYCt9T/ipados14-ipad-pro-pages-10-3-format-background-6.png"
            alt="screen"
            width="80%"
            style={{ borderRadius: '20px' }}
          />
          <h6>Dashboard</h6>
        </div>
        <div id="right">
          <img
            src="https://i.ibb.co/TRc5yB0/ipados14-ipad-pro-pages-10-3-format-background-5.png"
            alt="screen"
            width="80%"
            style={{ borderRadius: '20px' }}
          />
          <h6>Settings</h6>
        </div>
        <div id="left">
          <img
            src="https://i.ibb.co/Vw3LdMG/ipados14-ipad-pro-pages-10-3-format-background-4.png"
            alt="screen"
            width="80%"
            style={{ borderRadius: '20px' }}
          />
          <h6>Fridge</h6>
        </div>
        <div id="right">
          <img
            src="https://i.ibb.co/BzmBtzX/ipados14-ipad-pro-pages-10-3-format-background-3.png"
            alt="screen"
            width="80%"
            style={{ borderRadius: '20px' }}
          />
          <h6>Generate Recipes</h6>
        </div>
        <div id="left">
          <img
            src="https://i.ibb.co/fMGN7JF/ipados14-ipad-pro-pages-10-3-format-background-1.png"
            alt="screen"
            width="80%"
            style={{ borderRadius: '20px' }}
          />
          <h6>Create Recipe</h6>
        </div>
        <div id="right">
          <img
            src="https://i.ibb.co/F369z8j/ipados14-ipad-pro-pages-10-3-format-background.png"
            alt="screen"
            width="80%"
            style={{ borderRadius: '20px' }}
          />
          <h6>My Recipes</h6>
        </div>
        <div id="left" style={{ marginBottom: '10em' }}>
          <img
            src="https://i.ibb.co/rySZ5P5/Screen-Shot-2021-04-29-at-12.png"
            alt="screen"
            width="80%"
            style={{ borderRadius: '20px' }}
          />
          <h6>Popular Recipes</h6>
        </div>
        <div id="right" style={{ marginBottom: '10em' }}>
          <img
            src="https://i.ibb.co/CnfpKfN/ipados14-ipad-pro-pages-10-3-format-background-2.png"
            alt="screen"
            width="80%"
            style={{ borderRadius: '20px' }}
          />
          <h6>Find Restaurants</h6>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Ding
