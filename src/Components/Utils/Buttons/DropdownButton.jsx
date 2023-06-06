import React from 'react';
import PropTypes from 'prop-types';
import Arrow from 'Components/Utils/Icons/Arrow';

function DropdownButton(props) {
  const { className } = props;
  const newProps = {
    ...props,
    className: `inline-flex justify-center items-center ${className || ''}`
  };

  return (
    <span className="group">
      <button {...newProps}>
        {props.children}
        <span className="relative group-hover:top-1.5 transition-all ml-2">
          <Arrow direction="bottom" />
        </span>
      </button>
    </span>
  );
}

DropdownButton.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default DropdownButton;
