import React, { useState, Fragment } from 'react'
import ReactMap, { Marker, Popup } from 'react-map-gl'
import { cities } from '../assets/cities.json'
import '../css/mapbox.css'

const PopupCurrent = ({ coordinate, city }) => (
  <Popup
    longitude={coordinate[0]}
    latitude={coordinate[1]}
    closeButton={false}
    anchor="bottom-right"
  >
    <div className="popup-text">Current</div>
    <div>
      {city}
      <span className="flag" role="img" aria-label="US">
        🇺🇸
      </span>
    </div>
  </Popup>
)

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '80vw',
    height: '70vh',
    latitude: 30,
    longitude: -60
  })

  const CURRENT = 'Los Angeles'

  return (
    <ReactMap
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/queeniew329/ckm6m23ii0dtd17pcut9evzjy"
      onViewportChange={(viewport) => setViewport(viewport)}
      maxZoom={3.5}
      minZoom={1.6}
    >
      {cities.map(
        ({ geometry: { coordinates }, properties: { name } }, index) => (
          <Fragment key={index}>
            <Marker longitude={coordinates[0]} latitude={coordinates[1]}>
              <div className={name === CURRENT ? 'marker-current' : 'marker'} />
            </Marker>
            {name === CURRENT && (
              <PopupCurrent coordinate={coordinates} city={CURRENT} />
            )}
          </Fragment>
        )
      )}
      <div className="footprint">
        <div className="marker" />
        <span id="footprint">My Footprint</span>
      </div>
    </ReactMap>
  )
}

export default Map
