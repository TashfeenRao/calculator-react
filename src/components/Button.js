import React from 'react';
import PropsTypes from 'prop-types';

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
Button.propTypes = {
  name: PropsTypes.string.isRequired,
  value: PropsTypes.string.isRequired,
  onClick: PropsTypes.func.isRequired,
};
export default Button;
