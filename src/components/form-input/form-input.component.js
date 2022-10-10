import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {label && (
        <label className={`${otherProps.value.length ? 'shrink' : null}`}>
          {label}
          <input className="form-input" {...otherProps} />
        </label>
      )}
    </div>
  );
};

export default FormInput;
