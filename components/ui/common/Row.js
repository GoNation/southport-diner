import React from 'react';

const Row = ({ classList, children }) => {
  return <div className={`flex ${classList}`}>{children}</div>;
};

export default Row;
