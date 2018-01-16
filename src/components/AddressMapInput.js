import React, { Fragment } from 'react';
import { RaisedButton } from 'material-ui';
import GoogleMapClient from '../providers/GoogleMapClient';

export class AddressMapInput extends React.PureComponent {

  constructor(props) {
    super(props);
    this.mapEl = {};
  }

  handleSelectPosition = (googleMap, marker, event) => {
    const position = event.latLng.toJSON();
    marker.setPosition(position);
    this.props.onSelect(position)
  };
  handleUseMyCurrentLocation = () => {
    this.getCurrentLocation().then(position => {
      this.props.onSelect(position);
      this.googleMap.panTo(position);
      this.marker.setPosition(position);
    })
  };

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

  componentDidMount() {
    this.getCurrentLocation().then(position => {
      this.initGoogleMap(position);
      this.props.onSelect(position)
    });
  }

  initGoogleMap(position) {
    const {googleMap, marker} = GoogleMapClient.initGoogleMap(this.mapEl, position);
    googleMap.addListener('click', (event) => this.handleSelectPosition(googleMap, marker, event));

    this.googleMap = googleMap;
    this.marker = marker;
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
