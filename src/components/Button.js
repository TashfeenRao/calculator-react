import React, { Component } from 'react';

class Button extends Component {
    render() {
        return(
            <div>
                {this.props.buttonName}
            </div>
        )
    }
}
export default Button;