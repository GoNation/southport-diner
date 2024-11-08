import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Body from 'components/ui/Body';
import { Box, Heading, Text, LinkOverlay } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import extractStory from 'helpers/extractStory';

const clickableBoxStyles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    shadow: 'xl',
    _groupHover: { transform: 'scale(1.10)' },
    height: ['auto'],
    bg: 'white',
    p: 4,
    // boxShadow: '1px 1px 11px 1px #00FFE4',
    // borderColor: 'secondary',
  },
  imageBox: {
    position: 'relative',
    // height: [300],
  },
  subtitle: {
    as: 'h4',
    fontSize: { base: 'md' },
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'dark',
    textAlign: 'left',
  },
  title: {
    as: 'h2',
    size: 'sm',
    color: 'dark',
    mt: 2,
    textTransform: 'uppercase',
    borderBottom: '1px solid',
    borderColor: 'white',
    display: 'inline-block',
    width: 'auto',
    textAlign: 'left',
    mb: 1,
    fontSize: 'xs',
    _hover: {
      borderColor: 'primary',
    },
  },
  body: {
    fontSize: { base: 'md' },
    color: 'dark',
    p: {
      color: 'dark',
    },
  },
};

const CleanCard = ({ story, noClick, idx, onClick, avatar }) => {
  const cloudinaryId = story?.media[0]?.cloudinaryId;
  const linkTitle = story.links ? Object.keys(story.links)[0] || '' : '';
  const linkAddress = story.links ? story.links[linkTitle] : '';
  const { url, title, subtitle, body } = story;
  const { images } = extractStory(story);

  // This padding percentage results in a 9x17 aspect ratio
  const imageWrapperStyles = {
    position: 'relative',
    width: '100%',
    paddingTop: '118.88%', // (17 / 9) * 100 = 188.88%
  };

  const imageStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  const renderImages = () => {
    return images.length > 1 ? (
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
      >
        {images.map((src, index) => (
          <div key={index} style={imageWrapperStyles}>
            <Image
              src={src}
              alt={title}
              layout="fill"
              objectFit="cover"
              style={imageStyles}
            />
          </div>
        ))}
      </Carousel>
    ) : (
      <div style={imageWrapperStyles}>
        <Image
          src={images[0] || '/card_default.jpg'}
          alt={title}
          layout="fill"
          objectFit="cover"
          style={imageStyles}
        />
      </div>
    );
  };

  const cardContent = (
    <Box {...clickableBoxStyles.card}>
      <Box py={[2]} px="2" display={'flex'} alignItems={'center'}>
        <Box>
          <Image
            src={avatar}
            width={50}
            height={50}
            objectFit="contain"
          ></Image>
        </Box>
        <Box
          flex={1}
          display={'flex'}
          alignItems={'flex-start'}
          flexDir={'column'}
          pl={4}
          onClick={onClick}
          cursor={'pointer'}
        >
          <Heading {...clickableBoxStyles.subtitle}>{title}</Heading>
          <Heading {...clickableBoxStyles.title}>{subtitle}</Heading>

          {/* <Body
            body={body}
            lineHeight={[2, 1.5]}
            {...clickableBoxStyles.body}
          /> */}
        </Box>
      </Box>
      {renderImages()}

      {story?.tags?.length ? (
        <Box bg={'primary'} width={'100%'} py={4} px={1} fontWeight={'bold'}>
          <Text fontSize={'sm'}>{story?.tags[0]}</Text>
        </Box>
      ) : (
        ''
      )}
    </Box>
  );

  return <>{noClick ? cardContent : cardContent}</>;
};

export default CleanCard;
