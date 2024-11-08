import { Box, Flex, Text, Heading, Button, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import extractStory from 'helpers/extractStory';
import Link from 'next/link';
import ArtistCard from './ArtistCard';
import SponsorCard from './SponsorCard';

const ArtistShowcase = ({ stories, config }) => {
  // Default styles if styles is not attached.
  const styles = config.styles || {
    outerContainer: {
      bg: 'secondary',
      color: 'dark',
      fontFamily: 'body',
      p: 5,
      py: [5, 6, 12],
      textAlign: 'center',
      position: 'relative',
    },
    graphicContainer: {
      position: 'absolute',
      opacity: 0.1,
      overflow: 'hidden',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
    },
    graphic: {
      transform: 'rotate(12deg)',
    },
    gridContainer: {
      gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr'],
      gap: 6,
    },
    gridHeadingContainer: {
      gridColumn: 'span 2',
      py: 12,
      alignSelf: 'center',
    },
    heading: {
      fontSize: ['lg', '2xl', '3xl'],
      fontFamily: 'accent',
      color: 'white',
    },
    subtitle: {
      fontSize: ['xl', '4xl'],
      fontFamily: 'heading',
      color: 'primary',
      textTransform: 'uppercase',
    },
    cardContainer: {
      height: ['320px', '400px', '450px'],
    },
    buttonContainer: {
      textAlign: 'center',
      mt: 8,
    },
  };

  const renderCardType = (data, i) => {
    switch (config.cardType) {
      case 'artist':
        return <ArtistCard {...data} index={i} />;
      case 'sponsor':
        return <SponsorCard {...data} index={i} />;
      default:
        return <ArtistCard {...data} index={i} />;
    }
  };

  return (
    <Box {...styles.outerContainer}>
      <Box {...styles.graphicContainer}>
        <Image
          src={config.graphicSrc}
          width={config.graphicWidth}
          height={config.graphicHeight}
          style={styles.graphic}
        />
      </Box>
      <Grid {...styles.gridContainer}>
        <Box {...styles.gridHeadingContainer}>
          <Heading as={config.headingAs || 'h1'} {...styles.heading}>
            {config.title}
          </Heading>
          <Text {...styles.subtitle}>{config.subtitle}</Text>
        </Box>
        {stories.map((artist, index) => {
          const extractedStory = extractStory(artist);
          return (
            <Box {...styles.cardContainer}>
              {renderCardType(extractedStory, index)}
            </Box>
          );
        })}
      </Grid>
      <Box {...styles.buttonContainer}>
        {config?.linkAddress && config?.linkTitle && (
          <Button variant={config.buttonVariants || 'primary'}>
            <Link href={config.linkAddress}>{config.linkTitle}</Link>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ArtistShowcase;
