import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { name, value, onClick } = this.props;
        return(
            <div>
                <button name={name} value={value} onClick={onClick}>{value}</button>
            </div>
        )
    }
}
export default Button;