import React from 'react';

export default function SVG({
  src = '',
  wrapperClass = 'absolute bottom-24 md:bottom-0 md:right-0 left:0 ',
  alt = '',
  imageClass = 'w-60 h-60',
}) {
  if (!src) return null;
  return (
    <div className={wrapperClass}>
      <img src={src} alt={alt || 'SVG'} className={imageClass} />
    </div>
  );
}
