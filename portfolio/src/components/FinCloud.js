import React from 'react'
import '../css/project.css'

const FinCloud = () => {
  return (
    <div className="project-box">
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
              <h2>FinCloud</h2>
              The expense tracker aims to assist a user in managing personal
              finances by offering not only a basic expense check but also a
              brief analysis of incomes and expenses. All operations are
              performed in private through a personal account. <br />
              <br />
              The project is a MERN stack application, deployed on Heroku. The
              front-end was developed in HTML5, CSS3, and React.js while the
              back-end was created in Express and Node.js. The data was stored
              in MongoDB Atlas and users can only access their own data but
              other’s
            </p>
            <hr id="vertical" />
          </span>
          <hr style={{ marginTop: '-10px' }} />
        </span>
      </section>
      <section className="section2">
        <span>
          <h2 style={{ marginLeft: '0' }}>Role</h2>
          <li>UX/UI Designer</li>
          <li>Front-End Developer</li>
          <li>Back-End Developer</li>
        </span>
        <span>
          <h2 style={{ marginLeft: '0' }}>Stack</h2>
          <li>React</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>Node JS</li>
        </span>
        <span>
          <h2 style={{ marginLeft: '0' }}>Demo</h2>
        </span>
      </section>
      <section className="section3">
        <img
          src="https://i.ibb.co/9bByQG9/Blank-diagram.png"
          alt="wireframe"
          width="70%"
        />
      </section>
    </div>
  )
}

export default FinCloud
