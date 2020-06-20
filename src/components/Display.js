import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
        return( 
            <div>
                <h1>{props.result}</h1>
            </div>
        )
}
Display.propTypes = {
    result: PropTypes.string.isRequired
}
export default Display