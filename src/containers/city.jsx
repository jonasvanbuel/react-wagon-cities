import React, { Component } from 'react';

const City = ({ city }) => {
  return (
    <li className="list-group-item">{city.name}</li>
  )
}

export default City;
