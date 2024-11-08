import React from 'react';

const OpacityBG = ({ strength = 'bg-opacity-60', color = 'bg-black' }) => {
  return (
    <div
      className={`absolute top-0 bottom-0 left-0 h-full w-full ${color} ${strength} `}
    ></div>
  );
};

export default OpacityBG;
