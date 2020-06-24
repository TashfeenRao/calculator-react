/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends Component {
  render() {
    const { onClick } = this.props;
    const bool = true;
    const color = '#fd9032';
    return (
      <div className="buttonPanel">
        <div className="Group">
          <Button name="Button" value="AC" onClick={onClick} />
          <Button name="Button" value="+/-" onClick={onClick} />
          <Button name="Button" value="%" onClick={onClick} />
          <Button name="Button" value="÷" onClick={onClick} color={color} />
        </div>
        <div className="Group">
          <Button name="Button" value="7" onClick={onClick} />
          <Button name="Button" value="8" onClick={onClick} />
          <Button name="Button" value="9" onClick={onClick} />
          <Button name="Button" value="x" onClick={onClick} color={color} />
        </div>
        <div className="Group">
          <Button name="Button" value="4" onClick={onClick} />
          <Button name="Button" value="5" onClick={onClick} />
          <Button name="Button" value="6" onClick={onClick} />
          <Button name="Button" value="-" onClick={onClick} color={color} />
        </div>
        <div className="Group">
          <Button name="Button" value="1" onClick={onClick} />
          <Button name="Button" value="2" onClick={onClick} />
          <Button name="Button" value="3" onClick={onClick} />
          <Button name="Button" value="+" onClick={onClick} color={color} />
        </div>
        <div className="Group o-btn">
          <Button name="Button" value="0" onClick={onClick} wide={bool} />
          <Button name="Button" value="." onClick={onClick} />
          <Button name="Button" value="=" onClick={onClick} color={color} />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  onClick: PropsTypes.func.isRequired,
};
export default ButtonPanel;
