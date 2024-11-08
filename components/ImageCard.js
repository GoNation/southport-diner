import React, { useState } from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Link,
  AspectRatio,
} from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import extractStory from 'helpers/extractStory';

const ImageCard = ({ story, aspectRatio = 4 / 3, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const extractedStory = extractStory(story);
  if (!extractedStory) return null;

  const { title, subtitle, body, images, linkAddress, linkTitle } =
    extractedStory;

  const styles = {
    cardContainer: {
      //   borderWidth: '1px',
      //   borderRadius: 'lg',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      cursor: 'pointer',
      position: 'relative',
    },
    contentContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: 34,
    },
    imageAspectRatio: {
      ratio: aspectRatio,
    },
    title: {
      as: 'h3',
      size: ['lg', 'lg', 'lg', 'lg'],
      mt: 2,
      color: 'light',
      fontFamily: 'accent',
      textTransform: 'uppercase',
      bg: 'primary',
      width: 'auto',
      textAlign: 'center',
      p: 3,
      border: '2px solid',
      borderColor: 'dark',
      width: '100%',
      minHeight: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageStyle: isHovered
      ? { transform: 'scale(1.15)', transition: 'transform 0.9s ease-in-out' }
      : { transition: 'transform 0.9s ease-in-out' },
    subtitle: {
      color: 'gray.600',
      fontSize: 'md',
      mt: 1,
    },
    bodyText: {
      mt: 2,
    },
    button: {
      mt: 4,
      variant: 'primary',
      fontSize: 'md',
      px: 8,
      py: 2,
    },
  };

  return (
    <Fade bottom delay={0.25 * index * 1000}>
      <Link href={linkAddress}>
        <Box
          {...styles.cardContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images && images.length > 0 && (
            <AspectRatio {...styles.imageAspectRatio}>
              <Image
                style={styles.imageStyle}
                src={images[0]}
                alt={title}
                objectFit="cover"
              />
            </AspectRatio>
          )}
          <Box {...styles.contentContainer}>
            {title && <Heading {...styles.title}>{title}</Heading>}
            {subtitle && <Text {...styles.subtitle}>{subtitle}</Text>}
          </Box>
        </Box>
      </Link>
    </Fade>
  );
};

export default ImageCard;
