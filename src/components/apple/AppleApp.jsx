/**
  AppleApp.jsx
**/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/actions';
import AppleBasket from './AppleBasket';

class AppleApp extends Component {
  render() {

  }
}

const mapStateToProps = ({ apple }) => ({ apple });

const mapActionToProps = (dispatch) => ({
  actions
});
