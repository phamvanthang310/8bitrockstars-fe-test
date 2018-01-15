import React, { Fragment } from 'react';
import { Dialog, FlatButton, RaisedButton, Tab, Tabs } from 'material-ui';
import { AddressFieldInput } from './AddressFieldInput';
import { AddressMapInput } from './AddressMapInput';
import PropTypes from 'prop-types'

export class AddressInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      address: {
        street: '',
        ward: '',
        district: '',
        city: '',
        country: ''
      }
    };

    this.handleAddNewAddressClick = this.handleAddNewAddressClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleAddressInput = this.handleAddressInput.bind(this);
  }

  handleAddNewAddressClick() {
    this.setState({
      isDialogOpen: true
    });
  }

  handleCancelClick() {
    this.setState({
      isDialogOpen: false
    })
  }

  handleSaveClick() {
    console.log(this.state.address);
    this.props.actions.saveAddress(this.state.address);
  }

  handleAddressInput(address) {
    this.setState({address});
  }

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={false} onClick={this.handleCancelClick}/>,
      <FlatButton label="Save" primary={true} onClick={this.handleSaveClick}/>,
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
              <AddressFieldInput address={this.state.address} onChange={this.handleAddressInput}/>
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