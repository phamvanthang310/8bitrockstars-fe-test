import React, { Fragment } from 'react';
import { Dialog, FlatButton, FontIcon, RaisedButton, Tab, Tabs } from 'material-ui';
import { AddressFieldInput } from './AddressFieldInput';
import { AddressMapInput } from './AddressMapInput';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import GoogleMapClient from '../providers/GoogleMapClient';

const initialAddress = {
  street: '',
  ward: '',
  district: '',
  city: '',
  country: ''
};

class AddressInput extends React.PureComponent {

  constructor(props) {
    super(props);
    this.selectedLocation = null;
    this.state = {
      isDialogOpen: false,
      isValid: false,
      address: Object.assign({}, initialAddress)
    };
  };

  handleSaveAddressField = () => {
    if (this.state.isValid) {
      this.props.actions.saveAddress(this.state.address);
      this.resetState();
    }
  };
  handleSaveAddressMap = () => {
    if (this.selectedLocation) {
      this.props.actions.saveAddress(this.selectedLocation);
      this.resetState();
    }
  };
  handleCancelClick = () => {
    this.resetState();
  };

  handleAddNewAddressClick = () => {
    this.setState({
      isDialogOpen: true
    });
  };
  handleUpdateSelectedAddress = () => {
    this.setState({
      isDialogOpen: true,
      address: this.props.selectedAddress
    })
  };
  handlePositionSelected = (position) => {
    GoogleMapClient.getGeoCoding(position).then(address => this.selectedLocation = address);
  };

  handleAddressInput = (address) => {
    this.setState({address});
  };

  handleValid = (isValid) => {
    this.setState({
      isValid
    });
  };

  resetState() {
    this.setState({
      isDialogOpen: false,
      isValid: false,
      address: Object.assign({}, initialAddress)
    });
  }

  render() {
    const {selectedAddress} = this.props;

    return (
      <Fragment>
        <div className='button-group'>
          <RaisedButton secondary={true} label='Add new address' onClick={this.handleAddNewAddressClick}
                        icon={<FontIcon className="fa fa-plus-circle"/>}/>
          <RaisedButton style={{marginLeft: '10px'}} secondary={true} label='Edit selected address'
                        onClick={this.handleUpdateSelectedAddress}
                        disabled={!selectedAddress.key} icon={<FontIcon className="fa fa-edit"/>}/>
        </div>
        <Dialog
          title="Add New Address"
          modal={true}
          open={this.state.isDialogOpen}>
          <p>Select a method you want to add: </p>
          <Tabs>
            <Tab label="Field Input">
              <AddressFieldInput address={this.state.address} onChange={this.handleAddressInput}
                                 onValid={this.handleValid}/>
              <div className='tab-action'>
                <FlatButton label="Cancel" primary={false} onClick={this.handleCancelClick}/>
                <FlatButton label="Save" primary={true} onClick={this.handleSaveAddressField}/>
              </div>
            </Tab>
            <Tab label="Map Input">
              <AddressMapInput onSelect={this.handlePositionSelected}/>
              <div className='tab-action'>
                <FlatButton label="Cancel" primary={false} onClick={this.handleCancelClick}/>
                <FlatButton label="Save" primary={true} onClick={this.handleSaveAddressMap}/>
              </div>
            </Tab>
          </Tabs>
        </Dialog>
      </Fragment>
    );
  }
}

AddressInput.propertyTypes = {
  actions: PropTypes.object.isRequired,
  selectedAddress: PropTypes.object
};

const mapStateToProps = state => ({
  selectedAddress: state.selectedAddress
});

export default connect(
  mapStateToProps,
)(AddressInput);
