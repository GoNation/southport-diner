import React from 'react';
// import line from '../../assets/line.png';
import Image from 'next/image';

const Title = ({
  children,
  withBorder,
  classList,
  size = 'text-3xl',
  center = true,
  withCSSBorder,
}) => {
  if (withBorder) {
    return (
      <div className={`flex flex-col ${classList}`}>
        <h3 className={`${size} ${center ? 'text-center' : ''} `}>
          {children}
        </h3>
        {/* <Image
          width={500}
          height={75}
          className="rotate-180"
          layout="responsive"
          src={line}
          alt="border line"
        ></Image> */}
      </div>
    );
  }
  return (
    <h3
      className={` ${center ? 'text-center' : ''} ${size} ${classList} ${
        withCSSBorder ? 'border-b-4 border-secondary' : ''
      } `}
    >
      {children}
    </h3>
  );
};

export default Title;
