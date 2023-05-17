import React from 'react';
import PropTypes from 'prop-types';

export default function FormInputEmail({ value, handleChange }) {
  return (
    <input
      type="text"
      name="email"
      value={value}
      className="input-control"
      onChange={handleChange}
      required
    />
  );
}

FormInputEmail.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
