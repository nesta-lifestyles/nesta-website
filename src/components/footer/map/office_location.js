
import React from 'react'
import GoogleMapReact from 'google-map-react'
import styles from './map.module.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  const Map = ({ location, zoomLevel }) => (
    <div className={styles.maph2}>
      <h2 className={styles.maph2}>Come Visit Us At Our Campus</h2>
  
      <div className={styles.googleMap}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCuNE0cBH2XRyzDxnzDUl5ydwsbRRhPE8A' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )


  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

export default Map