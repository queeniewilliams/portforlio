import React from 'react'
import '../css/project.css'
import SlideDrawer from './SlideDrawer'
import Backdrop from './Backdrop'
import Footer from './Footer'

const FinCloud = (props) => {
  return (
    <div className="project-box">
      <div className="rushhour-header" ref={props.element}>
        <SlideDrawer show={props.drawerOpen} />
        {props.drawerOpen ? (
          <Backdrop close={props.backdropClickHandler} />
        ) : null}
      </div>
      <img
        src="https://i.ibb.co/HtDcFd4/image-copy.jpg"
        alt="image"
        width="100%"
        height="70%"
        style={{ filter: 'brightness(50%)' }}
      />
      <h1 id="title-1">FinCloud</h1>
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
          <li>MongoDB</li>
          <li>Express</li>
          <li>Node JS</li>
        </span>
        <span>
          <h2 className="h2">Time</h2>
        </span>
        <span>
          <h2 className="h2">Demo</h2>
        </span>
        <div className="navCircle"></div>
      </section>
      <section className="section1">
        <img
          src="https://i.ibb.co/RQ5stp0/expensetracker-copy.jpg"
          width="80%"
          style={{ justifySelf: 'right' }}
        />
        <span style={{ justifySelf: 'left' }}>
          <hr />
          <span style={{ display: 'flex' }}>
            <p className="summary">
              <h1 style={{ fontSize: '3em' }}>FinCloud</h1>
              <br></br>
              The expense tracker aims to assist a user in managing personal
              finances by offering not only a basic expense check but also a
              brief analysis of incomes and expenses. All operations are
              performed in private through a personal account. <br />
              <br />
              The project is a MERN stack application, deployed on Heroku. The
              front-end was developed in HTML5, CSS3, and React.js while the
              back-end was created in Express and Node.js. The data was stored
              in MongoDB Atlas and users can only access their own data but
              other???s
            </p>
            <hr id="vertical" />
          </span>
          <hr style={{ marginTop: '-10px' }} />
        </span>
      </section>
      <section className="section3">
        <div style={{ width: '500px' }}>
          <h2>User Story</h2>
          <p className="description">
            After login, the user can access the following key features:
            <br />
            <br />
            Add/ Edit/ Delete a transaction: The user can create a new income or
            expense transaction which can be deleted or modified after the
            creation.
            <br />
            <br />
            Check recent transactions: The user will see all transactions took
            place in the last three days and the sum of income, expense and
            balance in the personal dashboard.
            <br />
            <br />
            Check history transactions: The user can also check the list of
            previous transactions along with the sum and ratio of income and
            expense in a day, a week, a month and a year.
          </p>
        </div>
        <img
          src="https://i.ibb.co/mJD60Fp/ezgif-com-gif-maker-copy-3.gif"
          width="600px"
        />
      </section>
      <br></br>
      <br></br>
      <section className="section4">
        <span>
          <img
            src="https://i.ibb.co/9hL871h/Blank-diagram-Page-2.png"
            alt="wireframe"
            width="100%"
            style={{ borderRadius: '5px' }}
          />
          <p>Main screens</p>
        </span>
        <span>
          <img
            src="https://i.ibb.co/9hL871h/Blank-diagram-Page-2.png"
            alt="wireframe"
            width="100%"
            style={{ borderRadius: '5px' }}
          />
          <p>Wireframe</p>
        </span>
      </section>
      <Footer />
    </div>
  )
}

export default FinCloud
