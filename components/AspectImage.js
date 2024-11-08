import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '@chakra-ui/react';

const AspectImage = ({ src, alt, ratio, layout, objectFit, ...rest }) => {
  return (
    <AspectRatio ratio={ratio} {...rest}>
      <Image
        src={src}
        alt={alt}
        layout={layout || 'fill'}
        objectFit={objectFit || 'cover'}
      />
    </AspectRatio>
  );
};

export default AspectImage;
