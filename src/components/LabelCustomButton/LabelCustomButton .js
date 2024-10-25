import React from 'react';
import './LabelCustomButton .css';
const LabelCustomButton = ({ textshow, children }) => {
  return (
    <label className="custom-file-label">
      <span className="button-bg"></span>
      <span className="button-gradient"></span>
      <div className="button-content">
        <span>{textshow}</span>
        <svg viewBox="0 0 20 20" fill="currentColor" className="button-icon">
          <path
            clipRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
      {children}
    </label>
  );
};

export default LabelCustomButton;
