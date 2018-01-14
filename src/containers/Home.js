import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import { MainSection } from '../components/MainSection';
import Footer from '../components/Footer';
import { AddressInput } from '../components/AddressInput';
import { AddressTable } from '../components/AddressTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AddressActions from '../actions';
import PropTypes from 'prop-types'

const Home = ({addresses, actions}) => (
  <Fragment>
    <NavBar/>
    <MainSection title='Address Management'>
      <AddressInput actions={actions}/>
      <AddressTable addresses={addresses}/>
    </MainSection>
    <Footer/>
  </Fragment>
);

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