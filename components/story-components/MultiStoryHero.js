import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Image,
  Button,
} from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';

// Animation variants
const fadeVariants = {
  enter: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Styles
const styles = {
  linkWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 'full',
    height: 'full',
    p: 4,
  },
  flexContainer: {
    direction: 'column',
    align: 'center',
    justify: 'center',
    height: 'full',
    textAlign: 'center',
  },
  heading: {
    fontSize: { base: 'lg', sm: 'xl', md: '3xl', lg: '5xl' },
    color: 'white',
    textTransform: 'uppercase',
    mb: [8, 4, 2, 0],
    px: 12,
    py: 4,
    fontWeight: 'bold',
  },
  text: {
    fontSize: ['sm', 'sm', 'lg'],
    fontWeight: 'bold',
    color: 'white',
    py: 1,
    px: [4, 12],
  },
  heroBox: {
    position: 'relative',
    width: 'full',
    height: '100%',
    overflow: 'hidden',
    bgColor: 'black',
    mt: ['110px', '', '', '200px'],
  },
  image: {
    width: 'full',
    height: 'full',
    objectFit: 'cover',
    height: ['80vh', '80vh'],
  },
  button: {
    variant: 'primary',
    fontSize: ['sm', 'sm', 'lg'],
    py: [5, 7],
  },
  buttonContainer: {
    mt: 4,
  },
};

const SlideContent = ({ title, subtitle, linkTitle, linkAddress }) => (
  <Box {...styles.linkWrapper}>
    <Flex {...styles.flexContainer}>
      <Box>
        <Heading {...styles.heading}>{title}</Heading>
        {subtitle && <Text {...styles.text}>{subtitle}</Text>}
      </Box>
      <Box {...styles.buttonContainer}>
        <Link
          href={linkAddress}
          target={linkAddress.includes('http') ? '_blank' : '_self'}
        >
          <Button {...styles.button}>{linkTitle}</Button>
        </Link>
      </Box>
    </Flex>
  </Box>
);

export default function MultiStoryHero({
  stories = [],
  slideDuration = 4000,
  transitionDuration = 0.3,
  imageSize = 1920,
  imgClassName = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.8); // Initial opacity

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % stories.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [stories.length, slideDuration]);

  useEffect(() => {
    // Transition opacity from 0.8 to 0.3 over 5 seconds
    const timeout = setTimeout(() => setBackgroundOpacity(0.3), 2500);
    return () => clearTimeout(timeout);
  }, []);

  if (!stories.length) return null;

  const { title, subtitle } = stories[activeIndex];
  const extractedStory = extractStory(stories[activeIndex]);
  const { linkTitle, linkAddress } = extractedStory;

  return (
    <Box {...styles.heroBox}>
      {/* <Box bg={'rgba(0,0,0,.8)'} pos={'absolute'} w={'full'} h={'full'} /> */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: backgroundOpacity }}
          transition={{ duration: 2.5 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0)',
          }}
        />
        <motion.div
          key={activeIndex}
          variants={fadeVariants}
          initial="enter"
          animate="visible"
          exit="exit"
          transition={{ duration: transitionDuration }}
        >
          <Image
            src={`https://res.cloudinary.com/gonation/w_${imageSize}/q_auto/f_auto/${extractedStory?.firstImage?.cloudinaryId}`}
            alt="Current Slide"
            className={imgClassName}
            {...styles.image}
          />
          <SlideContent
            title={title}
            subtitle={subtitle}
            linkTitle={linkTitle}
            linkAddress={linkAddress}
          />
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
