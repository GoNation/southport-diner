import React from 'react';

export default function TextLogo({ name }) {
  if (!name) {
    return null;
  }
  return (
    <p className="text-xl md:text-2xl font-display uppercase text-white">
      {name}
    </p>
  );
}
