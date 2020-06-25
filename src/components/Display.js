import React from 'react';
import PropTypes from 'prop-types';

const Display = ({total, next}) => {
  return (
    <div className="display">
      <h1>{total}</h1>
      <h1>{next}</h1>
    </div>
  );
};
Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};
export default Display;
