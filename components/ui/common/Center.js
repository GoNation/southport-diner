import React from 'react';

const Center = ({ children, verticalOnly }) => {
  const base = `flex items-center h-full w-full`;
  if (verticalOnly) {
    return <div className={base}>{children}</div>;
  }

  return <div className={`${base} justify-center`}>{children}</div>;
};

export default Center;
