import React from 'react';
import PropTypes from 'prop-types';

const FormInputNumber = ({ value, handleChange, name }) => (
  <input
    type="number"
    name={name}
    value={value}
    className="input-control"
    onChange={handleChange}
    required
  />
);

export default FormInputNumber;

FormInputNumber.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
