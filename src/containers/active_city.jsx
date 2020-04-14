// Packages
import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions/actions';

class ActiveCity extends Component {
  componentWillMount() {
    const { cities, setActiveCity } = this.props;
    setActiveCity(cities[0]);
  }

  render() {
    const { activeCity } = this.props;
    const imageUrl = `https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`;
    return (
      <div className="active-city">
        <h3>{activeCity.name}</h3>
        <p>{activeCity.address}</p>
        <img src={imageUrl} alt={activeCity.name} />
      </div>
    );
  }
}

// Make Redux state available to other components / props?
function mapStateToProps(state) {
  return {
    cities: state.cities,
    activeCity: state.activeCity
  };
}

// Make actions available
const mapDispatchToProps = {
  setActiveCity
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
