import Image from 'next/image';
import { Box } from '@chakra-ui/react';

const HeroImage = ({ cloudinaryId, name, description, ...rest }) => (
  <Box position="relative" {...rest}>
    <Image
      key={cloudinaryId}
      alt={name || description}
      src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
      objectFit="cover" // This corresponds to the CSS property object-fit
      //   quality={90} // Adjust the quality as needed
      width={1800}
      height={1080}
      style={{
        height: '100%',
        objectFit: 'cover',
      }}
    />
  </Box>
);

export default HeroImage;
