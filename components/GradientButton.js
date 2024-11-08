import React from 'react';

function GradientButton({ buttonText }) {
  return (
    <button className="gradient-btn bg-transparent text-secondary py-2 px-8 font-bold uppercase text-base md:text-xl mt-2 border-secondary border-2 hidden md:block">
      {buttonText}
    </button>
  );
}

export default GradientButton;
