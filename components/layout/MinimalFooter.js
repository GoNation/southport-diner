import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import { FaPhone, FaMapPin } from 'react-icons/fa';
import { formatPhone } from 'helpers';
import getGoogleString from 'helpers/printing/getGoogleString';
import printAddress from 'helpers/printing/printAddress';
import GNPoweredBy from 'components/GNPoweredBy';

const InfoSection = ({ icon, href, children }) => (
  <Flex color="white" pl={[2, 4]} py={2} my={2}>
    <Box pt={1} pr={2}>
      <Box as={icon} color="white" />
    </Box>
    <Box as="a" href={href} color="white">
      {children}
    </Box>
  </Flex>
);

export default function MinimalFooter({ business }) {
  return (
    <Box bg="primary" color="white" p={[2, 4, 8]}>
      <Flex
        direction={['column', 'row']}
        align="center"
        justify="space-between"
      >
        <Box>
          <InfoSection>
            &copy; {new Date().getFullYear()} {business.name} All Rights
            Reserved
          </InfoSection>
        </Box>

        <Box mt={[4, 0]}>
          <InfoSection icon={FaMapPin} href={getGoogleString(business)}>
            {printAddress(business)}
          </InfoSection>

          <InfoSection icon={FaPhone} href={`tel:${business.phone}`}>
            {formatPhone(business.phone)}
          </InfoSection>
        </Box>

        <Box mt={[4, 0]}>
          <Box py={2} px={8}>
            <GNPoweredBy fill={'#fff'} height="18px" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
