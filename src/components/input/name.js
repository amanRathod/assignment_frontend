import React from 'react';
import PropTypes from 'prop-types';

export default function FormInputName({ value, handleChange, name }) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      className="input-control"
      onChange={handleChange}
      required
    />
  );
}

FormInputName.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
