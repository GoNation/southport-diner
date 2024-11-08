import React from 'react';

const OpacButton = ({ children }) => {
  return (
    <button className="bg-primary bg-opacity-30 border-primary border-2 px-4 py-3 w-full hover:bg-opacity-100 transition-all duration-1000">
      {children}
    </button>
  );
};

export default OpacButton;
