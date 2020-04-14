import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { setActiveCity } from '../actions/actions';

const City = ({ city, setActiveCity }) => {
  return (
    <li className="list-group-item" onClick={() => setActiveCity(city)}>{city.name}</li>
  );
};

// Make actions available
const mapDispatchToProps = {
  setActiveCity
};

export default connect(null, mapDispatchToProps)(City);
