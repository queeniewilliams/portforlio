import React from 'react'
import '../css/About.css'
import ScrollIntoView from 'react-scroll-into-view'
import SlideDrawer from './SlideDrawer'
import Backdrop from './Backdrop'
import Map from './Map'

export default class About extends React.Component {
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
              <img
                id="photo"
                src="https://i.ibb.co/DLkdbsc/headshot.jpg"
                alt="headshot"
                width="400px"
              />
            </div>
            <div className="right">
              <div id="intro">
                <p className="line"></p>
                <h1 style={{ color: 'black', fontSize: '3em' }}>
                  Queenie Williams
                </h1>
                <h3 style={{ color: 'black' }}>Front-end Developer</h3>
                <h4 style={{ color: 'black', marginTop: '40px' }}>
                  I am a front-end software engineer with an interest in
                  JavaScript and the front-end of applications. My previous
                  background in interior design brought me close to my true
                  passion: building web applications. I wasn’t satisfied with
                  only being involved in the visual aspect, and wanted a deeper
                  involvement in building out applications. In the next phase of
                  my career, I not only want to use my design skills to make the
                  application look beautiful, but I also want to work on the
                  technically challenging facets of the application too. I seek
                  a role as a software developer at a company where I can learn,
                  grow, and continue to master the craft.
                </h4>
                <img
                  src="https://i.ibb.co/PgqmHSr/signature-copy-2.png"
                  alt="signature"
                  width="300px"
                />
                <br></br>
                <img
                  src="https://i.ibb.co/ZJg2gCJ/kisspng-linkedin-computer-icons-business-advertising-compa-grey-background-5acab17806b152-7517612915.png"
                  alt="icon"
                  width="50px"
                />
                <img
                  src="https://i.ibb.co/ZmChxdM/pngfind-com-github-png-2562232.png"
                  alt="icon"
                  width="47px"
                />
              </div>
            </div>
            <div className="navCircle">
              <img
                id="menu-icon"
                src="https://i.ibb.co/kHKpM6V/hamburger-menu-icon-png-53.png"
                alt="menu"
                width="50px"
                onClick={this.drawerToggleClickHandler}
              />
              <SlideDrawer show={this.state.drawerOpen} />
              {backdrop}
              {/* <ScrollIntoView selector=".page"> */}
              <ScrollIntoView selector=".page">
                <div id="circle1"></div>
              </ScrollIntoView>
              {/* </ScrollIntoView> */}
              <ScrollIntoView selector=".map">
                <div id="circle1"></div>
              </ScrollIntoView>
              <ScrollIntoView selector=".projects">
                <div id="circle1"></div>
              </ScrollIntoView>
            </div>
          </div>
        </div>
        <div className="map">
          <div>
            <h3 id="my-footprint">
              Minimalism<br></br>at its finest.
            </h3>
          </div>
          <div id="map-secton">
            <Map />
            <div className="navCircle">
              <img
                id="menu-icon"
                src="https://i.ibb.co/kHKpM6V/hamburger-menu-icon-png-53.png"
                alt="menu"
                width="50px"
                onClick={this.drawerToggleClickHandler}
              />
              <SlideDrawer show={this.state.drawerOpen} />
              {backdrop}
              <ScrollIntoView selector=".page">
                <div id="circle1"></div>
              </ScrollIntoView>
              <ScrollIntoView selector=".container">
                <div id="circle1"></div>
              </ScrollIntoView>
              {/* </ScrollIntoView> */}
              <ScrollIntoView selector=".projects">
                <div id="circle1"></div>
              </ScrollIntoView>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
