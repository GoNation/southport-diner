import React from 'react';
import {
  Box,
  Text,
  VStack,
  Button,
  Heading,
  HStack,
  Flex,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';
import Link from 'next/link';
import { FaCartPlus, FaSmile, FaTruck, FaHeart } from 'react-icons/fa';

const defaultStyles = {
  bannerBox: {
    bg: 'primary',
    py: [8, 8, 24],
    my: [4, 8, 0, 0],
  },
  boxInner: {},
  heading: {
    fontSize: ['lg', 'lg'],
    fontFamily: 'heading',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 3,
    mt: 4,
  },
  subtitle: {
    fontFamily: 'body',
    color: 'primary',
    fontSize: 'sm',
  },
  contentBox: {
    textAlign: 'center',
  },
  buttonVariant: {
    variant: 'primary',
  },
};

const Icon = ({ iconName, size }) => {
  // get media query sizes for responsive size for the icon

  const iconLookup = {
    FaCartPlus,
    FaSmile,
    FaTruck,
    FaHeart,
  };

  const IconComponent = iconLookup[iconName];
  return <IconComponent size={size} color={'white'} />;
};

const IconBanner = ({ stories = [], config }) => {
  const size = useBreakpointValue({
    base: 96,
  });
  const styles = config?.styles ? config.styles : defaultStyles;
  return (
    <Box {...styles.bannerBox}>
      <Box {...styles.boxInner}>
        <Flex
          flexDirection={['column', 'column', 'row']}
          justifyContent={'center'}
          flexWrap={'wrap'}
        >
          {stories.map(story => {
            const extractedStory = extractStory(story);
            const { title, tags } = extractedStory;
            const iconName = tags?.length ? tags[0] : '';

            return (
              <Stack
                p={[2, 4]}
                px={[2, 4, 4, 14]}
                key={title}
                justifyContent={'center'}
                alignItems={'center'}
                justify={'center'}
                align={'center'}
                flexDir={'column'}
                flex={['1 1 100%', '1 1 100%', '1 1 50%', '1']} // 100% width for mobile, 50% for tablet and above
              >
                <Icon size={size} iconName={iconName} />
                <Heading {...styles.heading}>{title}</Heading>
              </Stack>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default IconBanner;
