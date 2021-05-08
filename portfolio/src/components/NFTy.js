import React from 'react'
import SlideDrawer from './SlideDrawer'
import Backdrop from './Backdrop'

const NFTy = (props) => {
  return (
    <div>
      <div className="rushhour-header" ref={props.element}>
        <SlideDrawer show={props.drawerOpen} />
        {props.drawerOpen ? (
          <Backdrop close={props.backdropClickHandler} />
        ) : null}
      </div>
      <img src="https://i.ibb.co/TPxWH0g/ezgif-com-gif-maker-copy.gif" />
    </div>
  )
}
export default NFTy
