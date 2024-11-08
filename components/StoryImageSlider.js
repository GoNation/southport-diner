import { useMediaQuery, useTheme, Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// left and right icons from react-icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import extractStory from 'helpers/extractStory';

// import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StoryImageSlider = ({ story }) => {
  if (!story) return null;
  const extractedStory = extractStory(story);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const theme = useTheme();
  const primaryColor = theme.colors.primary;
  const images = extractedStory?.images || [];

  return (
    <Box position={'relative'} zIndex={99} pt={[4, 8]} maxW={'3xl'} mx={'auto'}>
      <Box
        fontSize={['sm', 'md', 'lg']}
        lineHeight={1.75}
        dangerouslySetInnerHTML={{
          __html: extractedStory?.body,
        }}
      ></Box>
      <Carousel
        showArrows={true}
        dynamicHeight={false}
        showStatus={false}
        showIndicators={false}
        showThumbs
        swipeable={true}
        emulateTouch={true}
        useKeyboardArrows={true}
        centerMode
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              zIndex: '999',
              border: 'none',
              background: 'transparent',
              outline: 'none',
              cursor: 'pointer',
              padding: '10px',
              backgroundColor: 'white',
            }}
          >
            <FaArrowRight fill={primaryColor} size={32} />
          </button>
        )}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              zIndex: '999',
              border: 'none',
              background: 'transparent',
              outline: 'none',
              cursor: 'pointer',
              padding: '10px',
              backgroundColor: 'white',
            }}
          >
            <FaArrowLeft fill={primaryColor} size={32} />
          </button>
        )}
      >
        {images.map((image, index) => (
          <Box p={[0, 0, 4]} key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default StoryImageSlider;
