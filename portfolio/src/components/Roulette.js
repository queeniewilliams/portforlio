import React from 'react'
import SlideDrawer from './SlideDrawer'
import Backdrop from './Backdrop'

const Roulette = (props) => {
  return (
    <div>
      <div className="rushhour-header" ref={props.element}>
        <SlideDrawer show={props.drawerOpen} />
        {props.drawerOpen ? (
          <Backdrop close={props.backdropClickHandler} />
        ) : null}
      </div>
      <img src="https://i.ibb.co/qxKfGKg/ezgif-com-gif-maker.gif" />
    </div>
  )
}

export default Roulette
