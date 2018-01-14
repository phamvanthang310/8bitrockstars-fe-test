import React, { Fragment } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table/index';
import PropTypes from 'prop-types'

export class AddressTable extends React.PureComponent {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const addresses = this.props.addresses;

    return (
      <Fragment>
        <h4>Available Addresses</h4>
        <Table selectable={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Street Name</TableHeaderColumn>
              <TableHeaderColumn>Ward</TableHeaderColumn>
              <TableHeaderColumn>District</TableHeaderColumn>
              <TableHeaderColumn>City</TableHeaderColumn>
              <TableHeaderColumn>Country</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderAddressRow(addresses)}
          </TableBody>
        </Table>
      </Fragment>
    );
  }

  renderAddressRow(addresses) {
    return addresses.map(address => (
      <TableRow>
        <TableRowColumn>{address.street}</TableRowColumn>
        <TableRowColumn>{address.ward}</TableRowColumn>
        <TableRowColumn>{address.district}</TableRowColumn>
        <TableRowColumn>{address.city}</TableRowColumn>
        <TableRowColumn>{address.country}</TableRowColumn>
      </TableRow>
    ))
  }
}

AddressTable.propertyTypes = {
  addresses: PropTypes.array.isRequired
};