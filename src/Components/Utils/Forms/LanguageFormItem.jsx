import React, { memo } from 'react';
import PropTypes from 'prop-types';

function LanguageFormItem({ language, handleChange, flagImageUrl, isDefaultChecked, className }) {
  return (
    <label className={className}>
      <div className="flex flex-nowrap items-center justify-between gap-2 min-w-max w-full">
        <div className="flex-shrink-0 self-start">
          <img src={flagImageUrl} alt="flagImg" className="h-8 w-8 aspect-video object-cover" />
        </div>
        <div className="flex-grow w-full" style={{'marginTop':'-0.05rem'}}>{language}</div>  &nbsp;
        <div className="rounded-full w-6 h-6 border-2 border-primary-400 flex
              justify-center items-center flex-shrink-0 flex-grow-0 self-end" style={{'position':'relative', 'top':'-0.4rem'}}>
          <input
            name="language"
            type="radio"
            value={language}
            className="hidden peer"
            onChange={handleChange}
            defaultChecked={isDefaultChecked}
          />
          <span className="peer-checked:bg-primary-400 w-3 h-3 rounded-full border-2 border-primary-400">
            &nbsp;
          </span>
        </div>
      </div>
    </label>
  );
}

LanguageFormItem.propTypes = {
  language: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  isDefaultChecked: PropTypes.bool.isRequired,
  flagImageUrl: PropTypes.string.isRequired,
  className: PropTypes.string
};

LanguageFormItem.defaultProps = {
  isDefaultChecked: false,
  isChecked: false
};

export default memo(LanguageFormItem);
