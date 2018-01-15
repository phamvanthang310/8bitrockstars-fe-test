import React, { Fragment } from 'react';
import { RaisedButton } from 'material-ui';

export class AddressMapInput extends React.PureComponent {

  constructor(props) {
    super(props);

    this.mapEl = {};
  }

  componentDidMount() {
    this.getCurrentLocation().then(position => {
      console.log(position);
      this.initGoogleMap(position);
    }, (error) => console.log(error));
  }

  initGoogleMap(position) {
    this.googleMap = new window.google.maps.Map(this.mapEl, {
      center: position,
      zoom: 13
    });

    this.marker = new window.google.maps.Marker({
      position,
      map: this.googleMap,
      title: 'Click to zoom'
    });

    this.googleMap.addListener('click', (event) => this.handleSelectPosition(this.googleMap, this.marker, event));
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

  handleSelectPosition = (googleMap, marker, event) => {
    const latLng = event.latLng.toJSON();
    console.log(latLng);

    marker.setPosition(latLng)
  };

  handleUseMyCurrentLocation() {
    this.getCurrentLocation().then(position => {
      console.log('handleUseMyCurrentLocation: ', position);
      this.googleMap.panTo(position);
      this.marker.setPosition(position);
    })
  }

  render() {
    return (
      <Fragment>
        <div className='map-view' ref={(el) => this.mapEl = el}/>
        <RaisedButton style={{marginTop: '15px'}} secondary={true} label="Use My Location"
                      onClick={this.handleUseMyCurrentLocation}/>
      </Fragment>
    );
  }
}
