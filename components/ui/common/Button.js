import React from 'react';

const Button = ({ children, link = '#', fill }) => {
  if (fill) {
    return (
      <button className="bg-primary text-white px-8 py-3 border-2 border-white font-semibold uppercase text-lg  hover:text-white transition-all duration-500 w-full">
        <a href={link}>{children}</a>
      </button>
    );
  }
  return (
    <button className="bg-primary px-8 py-3 rounded-sm text-black font-semibold uppercase text-lg border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-500">
      <a href={link}>{children}</a>
    </button>
  );
};

export default Button;
