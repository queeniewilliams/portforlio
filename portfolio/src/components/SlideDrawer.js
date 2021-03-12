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
              src="https://i.ibb.co/X49ZrH7/Screen-Shot-2021-03-11-at-6-39-05-PM.png"
              alt="project-Logo"
              width="70em"
            />
          </ScrollIntoView>
          <ScrollIntoView selector="#projects">
            <img
              id="sideNav"
              src="https://i.ibb.co/0Xk0Kkm/Screen-Shot-2021-03-11-at-6-37-01-PM.png"
              alt="project-Logo"
              width="70em"
            />
          </ScrollIntoView>
        </div>
      </div>
    )
  }
}
