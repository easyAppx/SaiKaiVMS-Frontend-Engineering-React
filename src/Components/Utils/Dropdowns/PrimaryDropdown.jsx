import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

function PrimaryDropdown({ children, button, isLeft }) {
  const dropdownElements = useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    const className =
      'btn last:border-b-0 border-0 border-b border-primary-100 background btn-ghost hover:bg-primary-200 transition-colors rounded-none whitespace-nowrap';

    return childrenArray.map((child) => {
      return React.cloneElement(child, { ...child.props, className });
    });
  }, [children]);

  const className = `min-w-full hidden absolute group-hover:block transition-transform duration-1000 z-10 ${
    isLeft ? 'left-1' : 'right-1'
  }`;

  return (
    <div className="group min-w-max relative">
      {button}
      <div className={className}>
        <div className="border border-primary-400 btn-group btn-group-vertical bg-base-100 rounded-md overflow-hidden">
          {dropdownElements}
        </div>
      </div>
    </div>
  );
}

PrimaryDropdown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  button: PropTypes.any.isRequired,
  isLeft: PropTypes.bool
};

PrimaryDropdown.defaultProps = {
  isLeft: false
};

export default PrimaryDropdown;
