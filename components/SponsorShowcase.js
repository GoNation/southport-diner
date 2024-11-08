import { Box, Flex, Text, Image, Heading, Button } from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';
import Link from 'next/link';

const SponsorShowcase = ({ stories, config }) => {
  return (
    <Box
      bg="white"
      color="dark"
      fontFamily="body"
      p={5}
      textAlign={'center'}
      py={[4, 8, 12]}
    >
      <Heading
        as="h1"
        fontSize="5xl"
        fontFamily="heading"
        color="primary"
        mb={3}
      >
        {config.title}
      </Heading>
      <Text fontSize="xl" fontFamily="accent" color="secondary" mb={6}>
        {config.subtitle}
      </Text>
      <Flex wrap="wrap" justify="center" gap={6}>
        {stories.map((artist, index) => {
          const extractedStory = extractStory(artist);
          const { title, images } = extractedStory;
          return (
            <Box
              key={index}
              position="relative"
              width={['100%', '250px', '300px']}
              height={['auto']}
            >
              <Image
                src={images[0]}
                alt={title}
                objectFit="cover"
                borderRadius="lg"
                boxShadow="xl"
                style={{ height: '100%' }}
              />
              <Text
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                bg="rgba(0, 0, 0, 0.8)"
                color="light"
                textAlign="center"
                p={2}
                fontWeight="bold"
                fontFamily="links"
                fontSize="lg"
              >
                {title}
              </Text>
            </Box>
          );
        })}
      </Flex>
      <Box textAlign={'center'} mt={8}>
        <Button variant="primary">
          <Link href={config.linkAddress}>{config.linkTitle}</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default SponsorShowcase;
