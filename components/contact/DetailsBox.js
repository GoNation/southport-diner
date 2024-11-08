import React from 'react';
import { Box, Heading, Link, Text } from '@chakra-ui/react';
import getGoogleString from '../../helpers/printing/getGoogleString';
import printAddress from '../../helpers/printing/printAddress';
import Phone from './Phone';
import SocialLinks from '../ui/SocialLinks';

const DetailsBox = ({ aboutData, title = 'Contact Us' }) => {
  return (
    <Box
      fontFamily="body"
      backgroundColor="light"
      mt={2}
      ml={2}
      px={{ base: 4, md: 8 }}
      py={2}
      pr={{ md: 10 }}
      border={'3px solid '}
      borderColor={'primary'}
    >
      <Box textAlign="left">
        <Heading
          as="h4"
          fontFamily="heading"
          fontWeight="light"
          textTransform="none"
          fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}
          mb={2}
          maxW={400}
          color="dark"
        >
          {title}
        </Heading>
        <Text mb={1} fontSize="sm" color="dark" fontWeight={'light'}>
          <Link
            href={getGoogleString(aboutData)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {printAddress(aboutData)}
          </Link>
        </Text>
        <Box mb={2} fontWeight={'light'}>
          <Phone {...aboutData} color={'seconary'} fontSize="sm" />
        </Box>
        <Box mb={1} display="flex" justifyContent="start">
          <SocialLinks links={aboutData.links} fill="#000" />
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsBox;
