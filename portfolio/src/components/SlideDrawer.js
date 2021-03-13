import React from 'react'
import '../css/About.css'
import ScrollIntoView from 'react-scroll-into-view'

export default class SlideDrawer extends React.Component {
  render() {
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
      drawerClasses = 'side-drawer open'
    }
    return (
      <div className={drawerClasses}>
        <div id="sideNav">
          <ScrollIntoView selector=".page">
            <img
              id="sideNav"
              src="https://i.ibb.co/4sPfHDV/Screen-Shot-2021-03-12-at-10-11-38-PM.png
              "
              alt="project-Logo"
              width="70em"
            />
          </ScrollIntoView>
          <ScrollIntoView selector=".projects">
            <img
              id="sideNav"
              src="https://i.ibb.co/T2vk8f9/Screen-Shot-2021-03-12-at-10-14-53-PM.png"
              alt="project-Logo"
              width="70em"
            />
          </ScrollIntoView>
        </div>
      </div>
    )
  }
}
