import { Col, Row } from 'react-grid-system';
import React from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types'

export class AddressFieldInput extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = props.address;
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    // TODO: Revise call because .setState is asynchronous
    this.props.onChange(this.state);
  }

  validateInput() {
    // TODO: implement validator
  }

  render() {
    const {street, ward, district, city, country} = this.state;

    return (
      <Row>
        <Col xs={12}>
          <TextField
            fullWidth={true} hintText="Street Name" name='street' onChange={this.handleInputChange} value={street}
            // errorText="This field is required"
          />
        </Col>
        <Col md={6}>
          <TextField
            fullWidth={true} hintText="Ward" name='ward' onChange={this.handleInputChange} value={ward}
            // errorText="This field is required"
          />
        </Col>
        <Col md={6}>
          <TextField
            fullWidth={true} hintText="District" name='district' onChange={this.handleInputChange} value={district}
            // errorText="This field is required"
          />
        </Col>
        <Col md={6}>
          <TextField
            fullWidth={true} hintText="City" name='city' onChange={this.handleInputChange} value={city}
            // errorText="This field is required"
          />
        </Col>
        <Col md={6}>
          <TextField
            fullWidth={true} hintText="Country" name='country' onChange={this.handleInputChange} value={country}
            // errorText="This field is required"
          />
        </Col>
      </Row>
    );
  }
}

AddressFieldInput.propertyTypes = {
  address: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};