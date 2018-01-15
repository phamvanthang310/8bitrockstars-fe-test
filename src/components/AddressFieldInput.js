import { Col, Row } from 'react-grid-system';
import React from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types'

export class AddressFieldInput extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      address: props.address,
      errors: []
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const address = this.state.address;
    address[name] = value;

    this.setState({
      address
    }, () => {
      this.props.onChange(this.state.address);
      this.props.onValid(this.validate())
    });
  };

  validate() {
    const {street, ward, district, city} = this.state.address;
    const errors = [];
    if (street.trim() === '') {
      errors.push('Street cannot be blank!');
    }
    if (city.trim() === '') {
      if (ward.trim() === '') {
        errors.push('Ward cannot be blank!')
      } else if (district.trim() === '') {
        errors.push('District cannot be blank!')
      }
    }
    if (ward.trim() === '' && district.trim() === '' && city.trim() === '') {
      errors.push('City cannot be blank!')
    }

    this.setState({errors});
    return errors.length === 0;
  }

  render() {
    const {street, ward, district, city, country} = this.state.address;
    const errors = this.state.errors;

    return (
      <Row>
        <Col xs={12}>
          {errors.length > 0 ? (
            <ul className='errors'>
              {errors.map((error, index) => (<li className='message' key={index}>{error}</li>))}
            </ul>
          ) : ''}
        </Col>
        <Col xs={12}>
          <TextField
            fullWidth={true} hintText="Street Name" name='street' onChange={this.handleInputChange} value={street}
          />
        </Col>
        <Col md={6}>
          <TextField
            fullWidth={true} hintText="Ward" name='ward' onChange={this.handleInputChange} value={ward}
          />
        </Col>
        <Col md={6}>
          <TextField
            fullWidth={true} hintText="District" name='district' onChange={this.handleInputChange} value={district}
          />
        </Col>
        <Col md={6}>
          <TextField
            fullWidth={true} hintText="City" name='city' onChange={this.handleInputChange} value={city}
          />
        </Col>
        <Col md={6}>
          <TextField
            fullWidth={true} hintText="Country" name='country' onChange={this.handleInputChange} value={country}
          />
        </Col>
      </Row>
    );
  }
}

AddressFieldInput.propertyTypes = {
  address: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onValid: PropTypes.func.isRequired
};