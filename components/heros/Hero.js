import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { Box, Flex, Text, Button, Heading } from '@chakra-ui/react';
import OpacityBG from '../ui/OpacityBG';
import buildAvatar from 'helpers/general/buildAvatar';
import printAddress from 'helpers/printing/printAddress';
import getGoogleString from 'helpers/printing/getGoogleString';
import Shout from 'components/shout/Shout';
import { BsChevronDown } from 'react-icons/bs';
import YouTubeEmbed from 'components/YouTubeEmbed';
import extractStory from 'helpers/extractStory';
import Countdown from 'components/events/Countdown';

const HeroImage = ({ cloudinaryId, name, description, ...rest }) => (
  <Box
    as="img"
    key={cloudinaryId}
    alt={name || description}
    src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
    {...rest}
  />
);

const BusinessInfo = ({ business, config }) => (
  <Flex {...config.container}>
    <Link href={`tel:${business.phone}`} {...config.phoneStyle}>
      {business.phone}
    </Link>
    <Text {...config.separatorStyle}>|</Text>
    <Link href={getGoogleString({ ...business })} {...config.addressStyle}>
      {printAddress(business)}
    </Link>
  </Flex>
);

export const Hero = props => {
  const { story, business, config, event } = props;

  const {
    heroContainerStyle,
    shoutBoxStyle,
    phoneDirectionsGradientStyle,
    titleStyle,
    heroImageStyle,
    carouselConfig,
    topGradientStyle,
    showLogo,
    shouldShowPhoneAndDirections,
    businessInfoStyle,
    shouldShowArrow,
    arrowConfig,
    videoId,
    callToActionVariant,
    youtubeEmbedStyle,
    heroImageContentContainer,
    heroImageContainer,
    heroTitle,
    shoutContainer,
  } = config;

  if (videoId?.length) {
    const extractedStory = extractStory(story);

    return (
      <Box {...heroContainerStyle}>
        <Box {...youtubeEmbedStyle.container}>
          <Box>
            <Heading {...youtubeEmbedStyle.headingTitle}>
              {extractedStory?.title}
            </Heading>
          </Box>
          <Box>
            <Heading {...youtubeEmbedStyle.headingSubtitle}>
              {extractedStory?.subtitle}
            </Heading>
          </Box>
        </Box>
        <YouTubeEmbed videoId={videoId} />
        <Box {...youtubeEmbedStyle.callToActionButton}>
          <Link
            href={extractedStory?.linkAddress}
            target={
              extractedStory?.linkAddress?.includes('http') ? '_blank' : ''
            }
          >
            <Button
              variant={callToActionVariant || callToActionConfig.defaultVariant}
            >
              {extractedStory?.linkTitle}
            </Button>
          </Link>
        </Box>
      </Box>
    );
  }

  if (!story) return null;

  const extractedStory = extractStory(story);
  const linkTitle = extractedStory?.linkTitle;
  const linkAddress = extractedStory?.linkAddress;

  return (
    <Box {...heroContainerStyle}>
      <Box {...shoutBoxStyle}>
        {/* todo 400 and 500 probably shouldn't be hardcoded. */}
      </Box>

      {event?.starts && (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          position={'absolute'}
          bottom={0}
          top={0}
          left={0}
          zIndex={9}
          width={'100%'}
          flexDir={'column'}
        >
          <Countdown
            targetDate={event.starts}
            onCompleteMessage={'Happening Now!'}
          />
          <Box {...shoutContainer}>
            <Shout data={props.shout} width={[400, 500]} />
          </Box>
        </Box>
      )}

      {shouldShowPhoneAndDirections && (
        <Box {...phoneDirectionsGradientStyle}></Box>
      )}
      {shouldShowArrow && (
        <Box {...arrowConfig.wrapper}>
          <Box {...arrowConfig.container}>
            <BsChevronDown
              {...arrowConfig.iconStyle}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth',
                });
              }}
            />
          </Box>
        </Box>
      )}
      {shouldShowPhoneAndDirections && (
        <BusinessInfo business={business} config={businessInfoStyle} />
      )}
      <Carousel {...carouselConfig}>
        {story.media.map((mediaItem, idx) => (
          <Box key={`${mediaItem.cloudinaryId}-${idx}`} {...heroImageContainer}>
            <HeroImage
              key={mediaItem.cloudinaryId}
              {...mediaItem}
              {...heroImageStyle}
            />
            <Box {...heroImageContentContainer}>
              <Link
                href={linkAddress}
                passHref
                style={{
                  width: '100%',
                  padding: '0 .25rem',
                }}
              >
                <Button
                  as="a"
                  variant="primary"
                  fontWeight="light"
                  py={7}
                  width="100%"
                  isFullWidth
                  target={linkAddress?.includes('http') ? '_blank' : '_self'}
                >
                  {linkTitle}
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </Carousel>
      <Box {...topGradientStyle}></Box>
      {/* <OpacityBG strength="opacity-20"></OpacityBG> */}
    </Box>
  );
};
