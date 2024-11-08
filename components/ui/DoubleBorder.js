import React from 'react';

const DoubleBorder = ({
  outerColor = 'dark',
  outerWidth = '2',
  innerColor = 'dark',
  innerWidth = '2',
  children,
}) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="h-full  flex items-center justify-center flex items-center justify-center">
        <div
          className={` border-${outerColor} border-4 p-2 bg-background flex items-center justify-center`}
        >
          <div
            className={`border-${innerWidth} border-${innerColor} flex items-center justify-center`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleBorder;
