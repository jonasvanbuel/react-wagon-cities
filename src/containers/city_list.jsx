// Packages
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { setCities } from '../actions/actions';

// Components
import City from './city';

class CityList extends Component {
  componentWillMount() {
    // Before component gets mount, call action to receive props, which are
    // needed in the render()
    this.props.setCities();
  }

  render() {
    const { cities } = this.props;
    return (
      <ul className="list-group cities">
        {cities.map((city) => {
          return <City city={city} key={city.name} />;
        })}
      </ul>
    );
  }
}

// Outside class description
// Make Redux state available
function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

// Make actions available
const mapDispatchToProps = {
  setCities
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
