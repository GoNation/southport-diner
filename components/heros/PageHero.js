import React, { useEffect, useState } from 'react';
import { Box, Image, Heading, useStyleConfig } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const useZoomEffect = () => {
  const [shouldZoomOut, setShouldZoomOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setShouldZoomOut(false);
      setTimeout(() => setShouldZoomOut(true), 10);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router]);

  useEffect(() => setShouldZoomOut(true), []);

  return shouldZoomOut;
};

const getImageUrl = (storyPageHero, img) => {
  return storyPageHero?.images?.length === 1
    ? storyPageHero.images[0]
    : `https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${img?.cloudinaryId}`;
};

const PageHero = ({
  withLogo = true,
  img,
  pageTitle,
  description,
  avatar,
  businessName,
  storyPageHero,
}) => {
  const styles = useStyleConfig('PageHero'); // Get styles from theme file
  const imgURL = getImageUrl(storyPageHero, img);

  const hasImage = storyPageHero?.images?.length;
  return (
    <Box {...styles.outerWrapper}>
      <Box {...styles.containerStyles}>
        <Box {...styles.innerContainerStyles}>
          {hasImage && (
            <Image
              src={imgURL}
              alt={`${pageTitle} Page Hero`}
              layout="fill"
              style={styles.image} // Image style from theme
            />
          )}

          <Box {...styles.overlay}>
            <Box>
              <Heading {...styles.heading1}>
                {storyPageHero?.title || pageTitle}
              </Heading>
              <Heading {...styles.heading2}>{storyPageHero?.subtitle}</Heading>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageHero;
