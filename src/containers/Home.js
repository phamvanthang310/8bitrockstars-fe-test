import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { AddressTable } from '../components/AddressTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AddressActions from '../actions';
import PropTypes from 'prop-types'
import AddressInput from '../components/AddressInput';
import MainSection from '../components/MainSection';
import GoogleMapClient from '../providers/GoogleMapClient';

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    GoogleMapClient.getGeoCoding({lat: 10.8036925, lng: 106.67986219999999});
  }

  render() {
    const {addresses, actions} = this.props;
    return (
      <Fragment>
        <NavBar/>
        <MainSection title='Address Management'>
          <AddressInput actions={actions}/>
          <AddressTable addresses={addresses} actions={actions}/>
        </MainSection>
        <Footer/>
      </Fragment>
    );
  }
}

Home.propertyTypes = {
  addresses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  addresses: state.addresses
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AddressActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);