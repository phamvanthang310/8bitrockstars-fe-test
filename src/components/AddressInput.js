import React, { Fragment } from 'react';
import { Tab, Tabs } from 'material-ui';
import { AddressFieldInput } from './AddressFieldInput';
import { AddressMapInput } from './AddressMapInput';
import PropTypes from 'prop-types'

export class AddressInput extends React.PureComponent {
  constructor(props) {
    super(props);
    // console.log(FireBaseClient.writeAddress({
    //   street: 'street2',
    //   ward: 'ward2',
    //   district: 'district2',
    //   city: 'city2',
    //   country: 'country2'
    // }));
    // console.log(FireBaseClient.readAddresses());
    console.log('AddressInput', props);
  }

  render() {
    return (
      <Fragment>
        <h4>Address Input</h4>
        <p>Select a method you want to add new address: </p>
        <Tabs>
          <Tab label="Field Input">
            <AddressFieldInput actions={this.props.actions}/>
          </Tab>
          <Tab label="Map Input">
            <AddressMapInput/>
          </Tab>
        </Tabs>
      </Fragment>
    );
  }
}

AddressInput.propertyTypes = {
  actions: PropTypes.object.isRequired
};