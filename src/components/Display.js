import PropTypes from 'prop-types';

import React from 'react';
// import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display">
    <h1>
      {result}
    </h1>
  </div>
);
Display.propTypes = {
  result: PropTypes.string.isRequired,
};
export default Display;
