import Image from 'next/image';
import React from 'react';
import formulateImage from '../helpers/printing/formulateImage';

const XLHeroShout = ({ shout }) => {
  const {
    imageBaseUrl,
    shout: {
      image: {
        image: { cloudinaryId },
      },
    },
  } = shout;

  return (
    <div className="flex h-full">
      <Image
        className="object-cover "
        src={formulateImage({ imageBaseUrl, cloudinaryId })}
        alt={shout.title || shout.text}
      />
    </div>
  );
};

export default XLHeroShout;
