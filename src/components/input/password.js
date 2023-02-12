/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export default function FormInputPassword({ value, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);
  return (
    <>
      <div className='relative mt-1'>

      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={value}
        className="input-control"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 p-1 mr-3"
        onClick={(e) => {
          e.preventDefault();
          togglePassword();
        }}
      >
        {showPassword ? (
          <HiEyeOff className="text-xl text-gray-base cursor-pointer hover:text-grey-eight" />
        ) : (
          <HiEye className="text-xl text-gray-base cursor-pointer hover:text-grey-eight" />
        )}
      </button>
      </div>
    </>
  );
}

FormInputPassword.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
