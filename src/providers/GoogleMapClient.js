const geoTypeMapper = [{
  type: 'route',
  mapTo: 'street'
}, {
  type: 'administrative_area_level_3',
  mapTo: 'ward'
}, {
  type: 'administrative_area_level_2',
  mapTo: 'district'
}, {
  type: 'administrative_area_level_1',
  mapTo: 'city'
}, {
  type: 'country',
  mapTo: 'country'
}];

class GoogleMapClient {
  constructor() {
    this.geocoder = new window.google.maps.Geocoder();
  }

  initGoogleMap(el, position) {
    const googleMap = new window.google.maps.Map(el, {
      center: position,
      zoom: 13
    });

    const marker = new window.google.maps.Marker({
      position,
      map: googleMap,
      title: 'Click to zoom'
    });

    return {googleMap, marker};
  }

  getGeoCoding(location) {
    return new Promise(resolve => {
      this.geocoder.geocode({location}, (results, status) => {
        if (status === 'OK') {
          resolve(this.parseLocale(results));
        }
      });
    });
  }

  parseLocale(results) {
    const address = {};
    const addressComponents = results[0].address_components;

    geoTypeMapper.forEach(mapper => {
      const component = addressComponents.filter(component => component.types.indexOf(mapper.type) > -1);
      address[mapper.mapTo] = component[0] ? component[0].long_name : '';
    });

    return address;
  }
}

export default new GoogleMapClient();