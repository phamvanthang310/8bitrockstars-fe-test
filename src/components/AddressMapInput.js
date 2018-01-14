import React, { Fragment } from 'react';
import { RaisedButton } from 'material-ui';

export class AddressMapInput extends React.PureComponent {

  constructor(props) {
    super(props);
    this.mapEl = {};
    this.error = '';
  }

  componentDidMount() {
    this.getCurrentLocation().then(position => {
      console.log(position);
      this.initGoogleMap(position);
    }, (error) => console.log(error));
  }

  initGoogleMap(position) {
    let googleMap = new window.google.maps.Map(this.mapEl, {
      center: position,
      zoom: 13
    });

    let marker = new window.google.maps.Marker({
      position,
      map: googleMap,
      title: 'Click to zoom'
    });

    googleMap.addListener('click', (event) => this.handleClickEvent(googleMap, marker, event));
  }

  getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        }));
      } else {
        reject(Error('Geolocation is not supported by this browser.'));
      }
    });
  }

  handleClickEvent(googleMap, marker, event) {
    const latLng = event.latLng.toJSON();
    console.log(latLng);

    marker.setPosition(latLng)
  }

  render() {
    return (
      <Fragment>
        <div className='map-view' ref={(el) => this.mapEl = el}/>
        <RaisedButton style={{marginTop: '15px'}} primary={true} label="Use My Location"/>
        <RaisedButton style={{marginTop: '15px'}} primary={true} label="Add Marked Location"/>
      </Fragment>
    );
  }
}
