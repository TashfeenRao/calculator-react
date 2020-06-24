import React from 'react';
import PropsTypes from 'prop-types';

const Button = ({
  name, value, onClick, wide,
}) => {
  const inlineStyle = {
    width: wide ? '350px' : '175px',
  };
  return (
    <button
      type="button"
      name={name}
      value={value}
      onClick={onClick}
      style={inlineStyle}
    >
      {value}
    </button>
  );
};
Button.propTypes = {
  name: PropsTypes.string.isRequired,
  value: PropsTypes.string.isRequired,
  onClick: PropsTypes.func.isRequired,
  wide: PropsTypes.bool.isRequired,
};
export default Button;
