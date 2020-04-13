// Packages
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { setCities } from '../actions/actions';
import { setActiveCity } from '../actions/actions';

// Components
import City from './city';

class CityList extends Component {
  componentWillMount() {
    // Before component gets mount, call action to receive props, which are
    // needed in the render()
    this.props.setCities();
  }

  render() {
    // debugger
    return (
      <ul className="list-group cities">
        {this.props.cities.map((city) => {
          return <City city={city} key={city.name} />;
        })}
      </ul>
    );
  }
}

// Outside class description
// Make actions available to be called by components
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities, },
    {setActiveCity: dispatch(setActiveCity())
    dispatch
  );
}

// Make Redux state available to other components
function mapStateToProps(state) {
  return {
    cities: state.cities,
    activeCity: state.activeCity,

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
