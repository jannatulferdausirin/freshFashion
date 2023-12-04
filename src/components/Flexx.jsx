import React from 'react';

const Flexx = ({ children, className }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Flexx;