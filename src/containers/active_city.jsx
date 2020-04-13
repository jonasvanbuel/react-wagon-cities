// Packages
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions/actions';

class ActiveCity extends Component {
  render() {
    // debugger
    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>16 Villa Gaudelet, 75011 Paris</p>
        <img src='https://kitt.lewagon.com/placeholder/cities/paris' alt='paris' />
      </div>
    );
  }
}

// Outside class description
// Make actions available to be called by componens, or by 'componentWillMount()'
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setActiveCity: setActiveCity },
//     dispatch
//   );
// }

// Make Redux state available to other components / props?
function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
