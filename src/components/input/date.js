import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

const Date = ({ value, handleChange, name }) => (
  <input
    type="date"
    name={name}
    value={value}
    className={`${name === 'dateOfBirth' ? 'input-control' : 'input-name'}`}
    onChange={handleChange}
    required
  />
);

export default Date;

Date.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
