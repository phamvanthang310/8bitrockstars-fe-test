import React, { Fragment } from 'react';
import { Dialog, FlatButton, RaisedButton, Tab, Tabs } from 'material-ui';
import { AddressFieldInput } from './AddressFieldInput';
import { AddressMapInput } from './AddressMapInput';
import PropTypes from 'prop-types'

const initialAddress = {
  street: '',
  ward: '',
  district: '',
  city: '',
  country: ''
};

export class AddressInput extends React.PureComponent {
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
  handleSaveClick = () => {
    if (this.state.isValid) {
      this.props.actions.saveAddress(this.state.address);
      this.setState({
        isDialogOpen: false,
        isValid: false,
        address: Object.assign({}, initialAddress)
      });
    }
  };
  handleAddressInput = (address) => {
    this.setState({address});
  };
  handleValid = (isValid) => {
    this.setState({
      isValid
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      isValid: false,
      address: props.address || Object.assign({}, initialAddress)
    };
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={false} onClick={this.handleCancelClick}/>,
      <FlatButton label="Save" primary={true} onClick={this.handleSaveClick}/>
    ];

    return (
      <Fragment>
        <RaisedButton secondary={true} label='Add new address' onClick={this.handleAddNewAddressClick}/>
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
  actions: PropTypes.object.isRequired
};