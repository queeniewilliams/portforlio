import React from 'react'
import '../css/About.css'
import ScrollIntoView from 'react-scroll-into-view'
import SlideDrawer from './SlideDrawer'
import Backdrop from './Backdrop'
import Footprint from './Footprint'

// const About = () => {
//   return (
//     <div>
//       <ScrollIntoView selector="#footer">
//         <div className="section-1">
//           <button className="mdl-button mdl-js-button mdl-button--raised">
//             Jump to bottom
//           </button>
//         </div>
//       </ScrollIntoView>
//       <div id="footer">Scroll target element</div>
//     </div>
//   )
// }

// export default About

export default class MainPage extends React.Component {
  state = { drawerOpen: false }
  drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }
  backdropClickHandler = () => {
    this.setState({
      drawerOpen: false
    })
  }
  render() {
    let backdrop
    if (this.state.drawerOpen) {
      backdrop = <Backdrop close={this.backdropClickHandler} />
    }
    return (
      <div>
        <div className="container">
          <div id="about">
            <div className="left">
              <div id="photo">PHOTO</div>
            </div>
            <div className="right">
              <div id="intro">
                <p className="line"></p>
                <h1 style={{ color: 'white', fontSize: '3em' }}>
                  Queenie Williams
                </h1>
                <h3>Front-end Developer</h3>
                <h2>Intro</h2>
                <img
                  src="https://i.ibb.co/ZLWQF3M/signature-copy.png"
                  width="300px"
                />
              </div>
            </div>
            <div className="navCircle">
              {/* <ScrollIntoView selector=".page"> */}
              <div id="circle1" onClick={this.drawerToggleClickHandler}></div>
              {/* </ScrollIntoView> */}
              <ScrollIntoView selector=".map">
                <div id="circle1"></div>
              </ScrollIntoView>
              <div id="circle1"></div>
              <SlideDrawer show={this.state.drawerOpen} />
              {backdrop}
            </div>
          </div>
        </div>
        <div className="map">
          <div>
            <h3>My Footprint</h3>
          </div>
          <div id="map">
            <Footprint />
          </div>
        </div>
      </div>
    )
  }
}
