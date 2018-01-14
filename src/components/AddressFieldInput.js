import { Col, Row } from 'react-grid-system';
import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

export class AddressFieldInput extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      street: '',
      ward: '',
      district: '',
      city: '',
      country: ''
    };
    console.log('AddressFieldInput', props);

    this.handleSaveAddress = this.handleSaveAddress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSaveAddress() {
    // TODO: implement validator
    console.log(this.props);
    console.log(this.state);
    this.props.actions.addAddress(this.state);
  }

  render() {
    const {street, ward, district, city, country} = this.state;

    return (
      <Row>
        <Col xs={12}>
          <TextField
            fullWidth={true} hintText="Street Name" name='street' onChange={this.handleInputChange} value={street}
            // value={this.address.street}
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
        <Col>
          <RaisedButton style={{marginTop: '15px'}} primary={true} label="Add" fullWidth={true}
                        onClick={this.handleSaveAddress}/>
        </Col>
      </Row>
    );
  }
}