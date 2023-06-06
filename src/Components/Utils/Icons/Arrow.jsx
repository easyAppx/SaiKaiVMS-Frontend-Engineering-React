import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ direction, className }) => {
  let rotate = '';

  switch (direction) {
    case 'left':
      rotate = 'rotate-90';
      break;

    case 'right':
      rotate = '-rotate-90';
      break;

    case 'top':
      rotate = 'rotate-180';
      break;

    case 'bottom':
    default:
      rotate = 'rotate-0';
      break;
  }

  return (
    <svg
      className={`origin-center ${rotate} ${className}`}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6.5 8L12 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Arrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
  className: PropTypes.string
};

export default memo(Arrow);
