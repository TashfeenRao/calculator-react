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
          <Button name="AC" value="AC" onClick={onClick} />
          <Button name="+/-" value="+/-" onClick={onClick} />
          <Button name="%" value="%" onClick={onClick} />
          <Button name="÷" value="÷" onClick={onClick} color={color} />
        </div>
        <div className="Group">
          <Button name="7" value="7" onClick={onClick} />
          <Button name="8" value="8" onClick={onClick} />
          <Button name="9" value="9" onClick={onClick} />
          <Button name="x" value="x" onClick={onClick} color={color} />
        </div>
        <div className="Group">
          <Button name="4" value="4" onClick={onClick} />
          <Button name="5" value="5" onClick={onClick} />
          <Button name="6" value="6" onClick={onClick} />
          <Button name="-" value="-" onClick={onClick} color={color} />
        </div>
        <div className="Group">
          <Button name="1" value="1" onClick={onClick} />
          <Button name="2" value="2" onClick={onClick} />
          <Button name="3" value="3" onClick={onClick} />
          <Button name="+" value="+" onClick={onClick} color={color} />
        </div>
        <div className="Group o-btn">
          <Button name="0" value="0" onClick={onClick} wide={bool} />
          <Button name="." value="." onClick={onClick} />
          <Button name="=" value="=" onClick={onClick} color={color} />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  onClick: PropsTypes.func.isRequired,
};
export default ButtonPanel;
