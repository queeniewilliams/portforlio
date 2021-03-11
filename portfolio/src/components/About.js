import React from 'react'
import '../css/About.css'
import ScrollIntoView from 'react-scroll-into-view'

const About = () => {
  return (
    <div>
      <ScrollIntoView selector="#footer">
        <div className="section-1">
          <button className="mdl-button mdl-js-button mdl-button--raised">
            Jump to bottom
          </button>
        </div>
      </ScrollIntoView>
      <div id="footer">Scroll target element</div>
    </div>
  )
}

export default About
