import React, { Component } from 'react';
import Button from './Button';
import Proptypes from 'prop-types';

class ButtonPanel extends Component {
    static propTypes = {
        onClick: Proptypes.func.isRequired
    }
    render() {
        const { onClick } = this.props
        return(
            <div className='buttonPanel'>
                <div className='Group1'>
                    <Button name='Button' value='AC' onClick={onClick} /> 
                    <Button name='Button' value='+/-' onClick={onClick} />
                    <Button name='Button' value='%' onClick={onClick} />
                    <Button name='Button' value='÷' onClick={onClick} />
                </div>
                <div className='Group2'>
                    <Button name='Button' value='7' onClick={onClick} /> 
                    <Button name='Button' value='8' onClick={onClick} />
                    <Button name='Button' value='9' onClick={onClick} />
                    <Button name='Button' value='X' onClick={onClick} />
                </div>
                <div className='Group3'>
                    <Button name='Button' value='4' onClick={onClick} /> 
                    <Button name='Button' value='5' onClick={onClick} />
                    <Button name='Button' value='6' onClick={onClick} />
                    <Button name='Button' value='-' onClick={onClick} />
                </div>
                <div className='Group4'>
                    <Button name='Button' value='1' onClick={onClick} /> 
                    <Button name='Button' value='2' onClick={onClick} />
                    <Button name='Button' value='3' onClick={onClick} />
                    <Button name='Button' value='+' onClick={onClick} />
                </div>
                <div className='Group1'>
                    <Button name='Button' value='0' onClick={onClick} /> 
                    <Button name='Button' value='.' onClick={onClick} />
                    <Button name='Button' value='=' onClick={onClick} />
                </div>
            </div>
        )
    }
}
export default ButtonPanel