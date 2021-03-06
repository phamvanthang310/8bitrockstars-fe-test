import React, { Fragment } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table/index';
import PropTypes from 'prop-types'

export class AddressTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selectedAddress = {};
  }

  componentDidMount() {
    this.props.actions.fetchAddresses();
  }

  handleRowSelection = (event) => {
    const index = event[0];
    const address = this.props.addresses[index];
    this.props.actions.selectAddress(address);
  };

  render() {
    const addresses = this.props.addresses;

    return (
      <Fragment>
        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Street Name</TableHeaderColumn>
              <TableHeaderColumn>Ward</TableHeaderColumn>
              <TableHeaderColumn>District</TableHeaderColumn>
              <TableHeaderColumn>City</TableHeaderColumn>
              <TableHeaderColumn>Country</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} deselectOnClickaway={false}>
            {this.renderAddressRow(addresses)}
          </TableBody>
        </Table>
      </Fragment>
    );
  }

  renderAddressRow(addresses) {
    return addresses.map(address => (
      <TableRow key={address.key}>
        <TableRowColumn>{address.street}</TableRowColumn>
        <TableRowColumn>{address.ward}</TableRowColumn>
        <TableRowColumn>{address.district}</TableRowColumn>
        <TableRowColumn>{address.city}</TableRowColumn>
        <TableRowColumn>{address.country}</TableRowColumn>
      </TableRow>
    ));
  }
}

AddressTable.propertyTypes = {
  addresses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};