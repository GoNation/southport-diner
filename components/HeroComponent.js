import React from 'react';
import {
  Box,
  Heading,
  Flex,
  useBreakpointValue,
  Image as ChakraImage,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Fade from 'react-reveal/Fade';

import Shout from 'components/shout/Shout';
import YouTubeEmbed from 'components/YouTubeEmbed';
import Countdown from 'components/events/Countdown';
import extractStory from 'helpers/extractStory';

import HeroImage from './HeroImage';
import BusinessInfo from './BusinessInfo';
import OpacityBG from './ui/OpacityBG';
import HeroContentLink from './HeroContentLink';
import LocalVideo from './LocalVideo';
import buildAvatar from 'helpers/general/buildAvatar';
import { ContentComponent } from 'gonation-components';
import { heroConfig } from 'component_configurations';

const HeroComponent = ({ story, business, config, event, shout }) => {
  const logoWidth = useBreakpointValue(
    config?.businessLogoWidth || [500, 500, 500, 700]
  );
  const logoHeight = useBreakpointValue(
    config?.businessLogoHeight || [500, 500, 500, 700]
  );
  const {
    heroContainerStyle,
    shoutBoxStyle,
    phoneDirectionsGradientStyle,
    shoutContainer,
    shouldShowPhoneAndDirections,
    shouldShowArrow,
    arrowConfig,
    videoId,
    callToActionVariant,
    heroImageContainer,
    heroImageStyle,
    heroImageContentContainer,
    carouselConfig,
    topGradientStyle,
    businessInfoStyle,
    youtubeEmbedStyle,
    video,
    showLogo,
    outer,
  } = heroConfig;

  const renderLocalVideoContent = () => (
    <Box {...heroContainerStyle}>
      <LocalVideo src={video} />
      <Box {...heroImageContentContainer}>
        <Box width={'100%'}>
          <HeroContentLink
            linkTitle={'Buy Tickets'}
            linkAddress={
              'https://web.ctrestaurant.org/events/2023-CRAzies-Awards--895/details'
            }
          />
        </Box>
      </Box>
    </Box>
  );

  const renderArrow = () => (
    <Box {...arrowConfig.wrapper}>
      <Box {...arrowConfig.container}>
        <BsChevronDown
          {...arrowConfig.iconStyle}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
        />
      </Box>
    </Box>
  );

  const extractedStory = extractStory(story);
  const title = extractedStory?.title;
  const linkAddress = extractedStory?.linkAddress;
  const linkTitle = extractedStory?.linkTitle;
  const subtitle = extractedStory?.subtitle;

  const renderHeroContent = () => (
    <Box {...heroContainerStyle}>
      {showLogo && (
        <Flex
          pos={'absolute'}
          zIndex={999}
          width={'100%'}
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={buildAvatar(business)}
            alt={business.name}
            width={logoWidth}
            height={logoHeight}
          />
        </Flex>
      )}

      <Box
        display={['none', 'none', 'none', 'none']}
        pos={'absolute'}
        left={0}
        top={0}
        zIndex={9}
        justifyContent={'center'}
        w={'full'}
      >
        <Image
          src={buildAvatar(business)}
          alt={business.name}
          width={300}
          height={300}
          objectFit="contain"
        />
      </Box>
      {shouldShowPhoneAndDirections && (
        <Box {...phoneDirectionsGradientStyle} />
      )}
      {shouldShowArrow && renderArrow()}
      {shouldShowPhoneAndDirections && (
        <BusinessInfo business={business} config={businessInfoStyle} />
      )}

      <Carousel {...carouselConfig} autoPlay={true}>
        {story.media.map((mediaItem, idx) => (
          <Box key={`${mediaItem.cloudinaryId}-${idx}`} {...heroImageContainer}>
            <HeroImage
              key={mediaItem.cloudinaryId}
              {...mediaItem}
              {...heroImageStyle}
            />
            <Box {...heroImageContentContainer}>
              <ContentComponent
                title={title}
                subtitle={subtitle}
                body={extractedStory?.body}
                links={Object.keys(extractedStory?.links).map(label => ({
                  label,
                  href: extractedStory?.links[label],
                }))}
                variation="hero"
              />
            </Box>
            <Box {...topGradientStyle}></Box>
          </Box>
        ))}
      </Carousel>

      {/* <OpacityBG strength="opacity-80"></OpacityBG> */}
    </Box>
  );

  const renderContent = () => {
    if (videoId?.length) {
      return renderYouTubeEmbedContent();
    } else if (video) {
      return renderLocalVideoContent();
    } else {
      return renderHeroContent();
    }
  };

  if (!story) return null;

  const renderYouTubeEmbedContent = () => {
    const extractedStory = extractStory(story);
    return (
      <Box {...heroContainerStyle}>
        <YouTubeEmbed videoId={videoId} />
        <YouTubeEmbedContent
          story={extractedStory}
          callToActionVariant={callToActionVariant}
          config={youtubeEmbedStyle}
        />
      </Box>
    );
  };

  const renderCountdown = () => (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      bottom={0}
      top={0}
      left={0}
      zIndex={9}
      width="100%"
      flexDir="column"
    >
      <Countdown targetDate={event.starts} onCompleteMessage="Happening Now!" />
      <Box {...shoutContainer}>
        <Shout data={shout} width={[400, 500]} />
      </Box>
    </Box>
  );

  if (videoId?.length) return renderYouTubeEmbedContent();
  if (!story) return null;

  return (
    <Box position={'relative'} {...outer}>
      {renderContent()}
      {event?.starts && renderCountdown()}
      {shouldShowArrow && renderArrow()}
      {shouldShowPhoneAndDirections && (
        <Box {...phoneDirectionsGradientStyle} />
      )}
      {shouldShowPhoneAndDirections && (
        <BusinessInfo business={business} config={businessInfoStyle} />
      )}
      <Box {...topGradientStyle}></Box>
      <OpacityBG strength="opacity-20"></OpacityBG>
    </Box>
  );
};

export default HeroComponent;
