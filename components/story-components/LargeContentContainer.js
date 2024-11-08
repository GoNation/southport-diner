import React from 'react';
import CTA from '../ui/CTA';
import Body from '../ui/Body';
import { Box, Heading } from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';

const getNavPosition = position => {
  const positions = {
    'top-left': { top: { md: '8' }, left: { md: '8' } },
    'top-center': { top: '2', left: '50%', transform: 'translateX(-50%)' },
    'top-right': { top: '2', right: '2' },
    'left-center': { top: '50%', left: '2', transform: 'translateY(-50%)' },
    center: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    'right-center': { top: '50%', right: '2', transform: 'translateY(-50%)' },
  };
  return positions[position] || positions['top-left'];
};

const ContentBox = ({
  solidBg,
  navPositioning,
  color = '#000000',
  opacityStrength = '80',
  children,
  styles,
}) => {
  if (!children) return null;
  const navPosition = getNavPosition(navPositioning);

  // Convert the color and opacityStrength to rgba format
  const rgbaColor = colorToRgba(color, opacityStrength / 100); // Assuming opacityStrength is between 0 and 100

  // Adjusted to linear gradient from left to right
  const gradientBg = solidBg ? { bg: rgbaColor } : styles.gradientBg;

  return (
    <Box {...styles.contentBox} {...gradientBg} {...navPosition}>
      {children}
    </Box>
  );
};

// Convert hex color and opacity to rgba
function colorToRgba(hex, opacity) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const LargeContentContainer = ({
  story,
  solidBg,
  navPositioning = 'top-left',
  color = '#000000',
  opacityStrength,
  borderStyle,
  config,
  isMultiStoryCompatable = false,
}) => {
  if (!story) return null;

  const { styles } = config;
  const backgroundImage = story?.[0]?.media?.[0]?.cloudinaryId
    ? `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${story[0].media[0].cloudinaryId})`
    : undefined;

  if (isMultiStoryCompatable) {
    return (
      <Box bgImage={backgroundImage} {...styles.container}>
        {story?.length &&
          story.map((storyItem, index) => {
            const { title, subtitle, body, links } = storyItem;
            const linkTitle = Object.keys(links || {})[0];
            const linkAddress = links?.[linkTitle];
            const extractedStory = extractStory(storyItem);

            return (
              <Box key={index} {...styles.innerBox}>
                <ContentBox
                  solidBg={solidBg}
                  navPositioning={navPositioning}
                  color={color}
                  opacityStrength={opacityStrength}
                  styles={styles}
                >
                  {title && <Heading {...styles.heading}>{title}</Heading>}
                  {subtitle && (
                    <Heading {...styles.subtitle}>{subtitle}</Heading>
                  )}
                  {body && (
                    <Box>
                      <Body body={body} {...styles.body} />
                    </Box>
                  )}
                  {extractedStory.linkTitle && (
                    <Box {...styles.cta}>
                      <CTA url={extractedStory.linkAddress} variant={'primary'}>
                        {extractedStory.linkTitle}
                      </CTA>
                    </Box>
                  )}
                </ContentBox>
              </Box>
            );
          })}
      </Box>
    );
  }

  const { title, subtitle, body, links } = story;
  const linkTitle = Object.keys(links || {})[0];
  const linkAddress = links?.[linkTitle];
  const singleBgImage = story?.media?.[0]?.cloudinaryId
    ? `url(https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${story.media[0].cloudinaryId})`
    : undefined;

  const shouldRenderContentBox = title || subtitle || linkAddress || linkTitle;

  return (
    <Box bgImage={singleBgImage} {...styles.container}>
      <Box {...styles.innerBox}>
        {shouldRenderContentBox && (
          <ContentBox
            solidBg={solidBg}
            navPositioning={navPositioning}
            color={color}
            opacityStrength={opacityStrength}
            styles={styles}
          >
            {title && <Heading {...styles.heading}>{title}</Heading>}
            {subtitle && <Heading {...styles.subtitle}>{subtitle}</Heading>}
            {body && (
              <Box>
                <Body body={body} {...styles.body} />
              </Box>
            )}
            {linkTitle && (
              <Box {...styles.cta}>
                <CTA url={linkAddress} variant="primary">
                  {linkTitle}
                </CTA>
              </Box>
            )}
          </ContentBox>
        )}
      </Box>
    </Box>
  );
};

export default LargeContentContainer;
