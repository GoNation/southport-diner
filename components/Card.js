import React from 'react';
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
import { handleGlobalLink } from 'helpers';

const Card = ({ story, aspectRatio = 4 / 3, index }) => {
  const extractedStory = extractStory(story);
  if (!extractedStory) return null;

  const { title, subtitle, body, images, linkAddress, linkTitle } =
    extractedStory;

  const styles = {
    cardContainer: {
      //   borderWidth: '1px',
      //   borderRadius: 'lg',
      overflow: 'hidden',
      p: [4, 4, 8],
      width: '100%',
      //   boxShadow: 'lg',
      borderRadius: 'lg',
      bg: 'white',
      display: 'flex',
      flexDirection: 'column',
      _hover: {
        bg: 'background',
        boxShadow: 'xl',
        transition: 'all 0.3s ease',
      },
    },
    imageAspectRatio: {
      ratio: aspectRatio,
    },
    title: {
      as: 'h3',
      fontSize: '2xl',
      color: 'gray.800',
      fontFamily: 'accent',
      textTransform: 'uppercase',
      my: [2, 2],
    },
    subtitle: {
      color: 'gray.800',
      fontSize: 'md',
      mt: 1,
    },
    bodyText: {
      mt: 0,
      color: 'gray.800',
      fontWeight: 500,
      fontSize: ['md', 'xl', 'xl', 'xl'],
    },
    button: {
      mt: 4,
      variant: 'primary',
      fontSize: 'md',
      px: 12,
      py: 6,
    },
  };

  return (
    <>
      <Box {...styles.cardContainer}>
        {images && images.length > 0 && (
          <AspectRatio {...styles.imageAspectRatio}>
            <Image src={images[0]} alt={title} objectFit="cover" fill />
          </AspectRatio>
        )}
        {title && <Heading {...styles.title}>{title}</Heading>}
        {subtitle && <Text {...styles.subtitle}>{subtitle}</Text>}
        {body && (
          <Box
            {...styles.bodyText}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        )}
        {linkAddress && (
          <Box mt={'auto'}>
            <Link {...handleGlobalLink(linkAddress)}>
              <Button {...styles.button}>{linkTitle || 'Learn More'}</Button>
            </Link>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Card;
