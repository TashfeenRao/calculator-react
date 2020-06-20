/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ name, value, onClick }) => (
  <div>
    <button
      type="button"
      name={name}
      value={value}
      onClick={onClick}
    >
      {value}
    </button>
  </div>
);
export default Button;
