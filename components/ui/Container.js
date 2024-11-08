import React from 'react';

const Container = ({ children, size, customSize = '' }) => {
  if (size === 'small') {
    return <div className={`max-w-4xl m-auto`}>{children}</div>;
  }
  if (size === 'large') {
    return <div className={`max-w-6xl m-auto`}>{children}</div>;
  }
  return <div className={`m-auto ${customSize}`}>{children}</div>;
};

export default Container;
