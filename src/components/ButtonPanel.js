/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends Component {
  render() {
    const bool = true;
    const color = '#fd9032';
    const { clickHandler } = this.props;
    const handleClick = e => {
      clickHandler(e);
    };
    return (
      <div className="buttonPanel">
        <div className="Group">
          <Button name="AC" value="AC" clickHandler={handleClick} />
          <Button name="+/-" value="+/-" />
          <Button name="%" value="%" />
          <Button name="÷" value="÷" color={color} />
        </div>
        <div className="Group">
          <Button name="7" value="7" />
          <Button name="8" value="8" />
          <Button name="9" value="9" />
          <Button name="x" value="x" color={color} />
        </div>
        <div className="Group">
          <Button name="4" value="4" />
          <Button name="5" value="5" />
          <Button name="6" value="6" />
          <Button name="-" value="-" color={color} />
        </div>
        <div className="Group">
          <Button name="1" value="1" />
          <Button name="2" value="2" />
          <Button name="3" value="3" />
          <Button name="+" value="+" color={color} />
        </div>
        <div className="Group o-btn">
          <Button name="0" value="0" wide={bool} />
          <Button name="." value="." />
          <Button name="=" value="=" color={color} />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropsTypes.func.isRequired,
};
export default ButtonPanel;
