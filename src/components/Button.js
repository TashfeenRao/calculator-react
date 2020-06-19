import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }
    render() {
        const { name, value, onClick } = this.props;
        return(
            <div>
                <button type='button' name={name} value={value} onClick={onClick}>{value}</button>
            </div>
        )
    }
}
export default Button;