import React, { Fragment } from 'react';
import { Dialog, FlatButton, RaisedButton, Tab, Tabs } from 'material-ui';
import { AddressFieldInput } from './AddressFieldInput';
import { AddressMapInput } from './AddressMapInput';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const initialAddress = {
  street: '',
  ward: '',
  district: '',
  city: '',
  country: ''
};

class AddressInput extends React.PureComponent {

  handleSaveClick = () => {
    if (this.state.isValid) {
      console.log(this.state.address);
      this.props.actions.saveAddress(this.state.address);
      this.setState({
        isDialogOpen: false,
        isValid: false,
        address: Object.assign({}, initialAddress)
      });
    }
  };

  handleAddNewAddressClick = () => {
    this.setState({
      isDialogOpen: true
    });
  };

  handleCancelClick = () => {
    this.setState({
      isDialogOpen: false,
      isValid: false,
      address: Object.assign({}, initialAddress)
    });
  };
  handleSelectedAddress = () => {
    this.setState({
      isDialogOpen: true,
      address: this.props.selectedAddress
    })
  };

  handleAddressInput = (address) => {
    this.setState({address});
  };

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      isValid: false,
      address: Object.assign({}, initialAddress)
    };
  };

  handleValid = (isValid) => {
    this.setState({
      isValid
    });
  };

  render() {
    const {selectedAddress} = this.props;
    const actions = [
      <FlatButton label="Cancel" primary={false} onClick={this.handleCancelClick}/>,
      <FlatButton label="Save" primary={true} onClick={this.handleSaveClick}/>
    ];

    return (
      <Fragment>
        <RaisedButton secondary={true} label='Add new address' onClick={this.handleAddNewAddressClick}/>
        <RaisedButton secondary={true} label='Edit selected address' onClick={this.handleSelectedAddress}
                      disabled={!selectedAddress.key}/>
        <Dialog
          title="Add New Address"
          actions={actions}
          modal={true}
          open={this.state.isDialogOpen}>
          <p>Select a method you want to add: </p>
          <Tabs>
            <Tab label="Field Input">
              <AddressFieldInput address={this.state.address} onChange={this.handleAddressInput}
                                 onValid={this.handleValid}/>
            </Tab>
            <Tab label="Map Input">
              <AddressMapInput/>
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
