import React from 'react'
import '../css/About.css'
import ScrollIntoView from 'react-scroll-into-view'
import SlideDrawer from './SlideDrawer'
import Backdrop from './Backdrop'

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
      <div id="about">
        <div className="left"></div>
        <div className="navCircle">
          {/* <ScrollIntoView selector=".page"> */}
          <div id="circle1" onClick={this.drawerToggleClickHandler}></div>
          {/* </ScrollIntoView> */}
          <ScrollIntoView selector="#projects">
            <div id="circle1"></div>
          </ScrollIntoView>
          <div id="circle1"></div>
          <SlideDrawer show={this.state.drawerOpen} />
          {backdrop}
        </div>
      </div>
    )
  }
}
