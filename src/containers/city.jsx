import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions/actions';

class City extends Component {
  changeCity = () => {
    console.log("Clicked...");
  }

  render() {
    const { city } = this.props;
    return (
      <li className="list-group-item" onClick={this.props.setActiveCity}>{city.name}</li>
    );
  }
}

// To make actions available to be called by components, or by 'componentWillMount()'
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: dispatch(setActiveCity()) },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
