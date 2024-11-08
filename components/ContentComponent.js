import React from 'react';
import Image from 'next/image';
import {
  Box,
  Heading,
  Text,
  Button,
  useTheme,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import Body from './ui/Body';

const ContentComponent = ({
  title,
  subtitle,
  body,
  links = {},
  contentConfig,
  multiFontConfig,
  assetA,
  assetAWidth,
  assetAHeight,
  assetB,
}) => {
  const {
    containerStyle,
    titleStyle,
    subtitleStyle,
    bodyContainerStyle,
    showStar,
    button,
    assetAStyle,
    assetBStyle,
  } = contentConfig;
  const theme = useTheme();
  const width = useBreakpointValue({ base: 130, md: 230 });
  const height = useBreakpointValue({ base: 130, md: 230 });
  const primaryColor = theme.colors.primary;
  const accentColor = theme.colors.accent;

  const renderCta = () => {
    if (
      !links ||
      typeof links !== 'object' ||
      Object.keys(links).length === 0
    ) {
      return null;
    }

    const label = Object.keys(links)[0];
    const url = links[label];

    if (!url) {
      console.error('URL is not defined for label:', label);
      return null;
    }

    return (
      <Link
        href={url}
        target={url.startsWith('http') ? '_blank' : '_self'} // Checking if the URL starts with 'http'
        rel="noopener noreferrer"
      >
        <Button {...button}>{label}</Button>
      </Link>
    );
  };

  return (
    <Box {...containerStyle}>
      {title && <Heading {...titleStyle}>{title}</Heading>}
      {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
      {showStar && (
        <Text color="gray.500" fontSize="3xl" textAlign="center" my={4}>
          *
        </Text>
      )}
      <Box maxW={'xl'}>
        {body && <Body {...bodyContainerStyle} body={body} />}
      </Box>

      <Box textAlign={'center'}>{links && renderCta()}</Box>
      {assetA && (
        <Box {...assetAStyle.container}>
          <Image
            width={200}
            height={200}
            src={assetA}
            style={assetAStyle.img}
            alt="Illustration Graphic"
          ></Image>
        </Box>
      )}
      <Box {...assetBStyle.container}>
        {assetB && (
          <Image
            src={assetB}
            width={width}
            height={height}
            style={assetBStyle.img}
          />
        )}
      </Box>
    </Box>
  );
};

export default ContentComponent;
