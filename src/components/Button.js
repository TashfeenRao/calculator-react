/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      name, value, clickHandler, wide, color,
    } = this.props;
    const inlineStyle = {
      width: wide ? '350px' : '175px',
      background: color,
    };
    const handleClick = event => {
      clickHandler(event.target.name);
    };
    return (
      <button
        type="button"
        name={name}
        value={value}
        onClick={handleClick}
        style={inlineStyle}
      >
        {value}
      </button>
    );
  }
}
Button.propTypes = {
  name: PropsTypes.string.isRequired,
  value: PropsTypes.string.isRequired,
  clickHandler: PropsTypes.func.isRequired,
  wide: PropsTypes.bool,
  color: PropsTypes.string,
};
export default Button;
