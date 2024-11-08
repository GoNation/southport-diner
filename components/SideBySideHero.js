import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';

const SideBySideHero = ({ story }) => {
  const extractedStory = extractStory(story);
  if (!extractedStory) return null;
  const { title, subtitle, body, images, linkAddress, linkTitle } =
    extractedStory;
  const firstImage = images[0];
  const hpHeroImage =
    'https://images.unsplash.com/photo-1605647533135-51b5906087d0?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <Box bg="white" mt={[0, 0, 8, 12]}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        position={'relative'}
      >
        <Image
          src={hpHeroImage}
          alt={title}
          position={'absolute'}
          left={0}
          top={0}
          bottom={0}
          right={0}
          width={'100%'}
          zIndex={0}
          objectFit={'cover'}
          height={'100%'}
        />
        <Box
          position={'absolute'}
          left={0}
          top={0}
          bottom={0}
          right={0}
          zIndex={1}
          //   backgroundImage={[
          //     '',
          //     `linear-gradient(to right, #142622 0%, #14262200 100%)`,
          //   ]}
          width={'50%'}
        />
        <Box flex="1" position={'relative'}>
          {/* Gradient Overlay */}
          <Box zIndex={2} width={'fit-content'}>
            <Box
              p={{ base: 4, md: 8 }}
              background={'rgba(0,0,0,.6)'}
              rounded={'md'}
            >
              <Heading
                as="h1"
                color={['primary', 'white']}
                fontSize={{ base: '4xl', md: '5xl' }}
                fontFamily="heading"
              >
                {title}
              </Heading>
              <Heading
                as="h2"
                color="white"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontFamily="heading"
                mt={4}
              >
                {subtitle}
              </Heading>
              <Text
                color="white"
                dangerouslySetInnerHTML={{ __html: body }}
                my={6}
                maxW={'2xl'}
              ></Text>
              <Button variant="primary" mt={6} fontFamily="links">
                <Link href={linkAddress}>{linkTitle}</Link>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box width={['100%', '30%']} p={{ base: 0 }} pos={'relative'}>
          <Image src={firstImage} alt={title} w="100%" h="auto" zIndex={2} />
        </Box>
      </Flex>
    </Box>
  );
};

export default SideBySideHero;
