import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Body from './Body';
import { Box, Heading, Text, LinkOverlay, Button } from '@chakra-ui/react';

const clickableBoxStyles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    shadow: 'md',
    _groupHover: { transform: 'scale(1.10)' },
    height: ['auto', '100%'],
    px: 4,
    py: 4,
  },
  imageBox: {
    position: 'relative',
    height: [400, '100%'],
  },
  subtitle: {
    as: 'h2',
    size: 'sm',
    color: 'primary',
    mt: 0,
    textTransform: 'uppercase',
    borderBottom: '1px solid',
    borderColor: 'white',
    display: 'inline-block',
    width: 'auto',
    mb: 0,
    _hover: {
      borderColor: 'primary',
    },
  },
  title: {
    as: 'h4',
    fontSize: { base: 'lg' },
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'primary',
    mb: 4,
  },
  body: {
    fontSize: { base: 'md' },
    color: 'dark',
    maxWidth: 'lg',
  },
};

const ClickableBox = ({ story, noClick, idx }) => {
  if (!story) return null;
  const cloudinaryId = story?.media[0]?.cloudinaryId;
  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];
  const { url, title, subtitle, body } = story;

  const cardContent = (
    <Box {...clickableBoxStyles.card}>
      {cloudinaryId && (
        <Box {...clickableBoxStyles.imageBox}>
          <Image
            src={`https://res.cloudinary.com/gonation/w_800/q_auto/f_auto/${cloudinaryId}`}
            alt={story.title}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      )}

      <Box height={['auto', 'auto']} py={[1]} px="2">
        <Link href={url ? url : linkAddress?.toLowerCase() || '/'}>
          <Heading {...clickableBoxStyles.subtitle}>{subtitle}</Heading>
        </Link>
        <Heading {...clickableBoxStyles.title}>{title}</Heading>

        <Body body={body} lineHeight={[2, 1.5]} {...clickableBoxStyles.body} />
        <Link href={linkAddress || '#'}>
          <Button
            variant="unset"
            textDecoration={'underline'}
            px={0}
            color={'primary'}
            _hover={{ textDecoration: 'none', color: 'dark' }}
          >
            {linkTitle}
          </Button>
        </Link>
      </Box>
    </Box>
  );

  return (
    <>
      {noClick ? (
        cardContent
      ) : (
        <Link href={url ? url : linkAddress?.toLowerCase() || '/'}>
          {cardContent}
        </Link>
      )}
    </>
  );
};

export default ClickableBox;
