import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

const ImageComponent = props => {
  const {
    img,
    containerStyle,
    relativeContainerStyle,
    imageStyle,
    collageStyle,
    size = 800,
    alt = 'Small Business Website Image',
    images,
  } = props;

  const renderImages = () => {
    if (images.length === 2) {
      return (
        <Box style={collageStyle}>
          <Box sx={{ ...collageStyle.imgWrapper, ...collageStyle.img1 }}>
            <Image
              src={`https://res.cloudinary.com/gonation/w_${size}/q_auto/f_auto/${images[0].cloudinaryId}`}
              objectFit="contain"
              width={500}
              height={500}
              alt={alt}
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ ...collageStyle.imgWrapper, ...collageStyle.img2 }}>
            <Image
              src={`https://res.cloudinary.com/gonation/w_${size}/q_auto/f_auto/${images[1].cloudinaryId}`}
              objectFit="contain"
              width={500}
              height={500}
              alt={alt}
              style={{ width: '100%' }}
            />
          </Box>
        </Box>
      );
    } else {
      return images.map((img, index) => (
        <Box key={index} {...relativeContainerStyle}>
          <Image
            src={`https://res.cloudinary.com/gonation/w_${size}/q_auto/f_auto/${img.cloudinaryId}`}
            width={500}
            height={800}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              ...imageStyle,
            }}
          />
        </Box>
      ));
    }
  };

  return <Box {...containerStyle}>{renderImages()}</Box>;
};

export default ImageComponent;
