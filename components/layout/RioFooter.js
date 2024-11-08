import React from 'react';
import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import Image from 'next/image';
import SocialLinks from 'components/ui/SocialLinks';
import { RiArrowDropUpLine } from 'react-icons/ri';
import printAddress from 'helpers/printing/printAddress';
import getGoogleString from 'helpers/printing/getGoogleString';
import buildAvatar from 'helpers/general/buildAvatar';

export default function RioFooter({ business }) {
  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Box bgColor="dark" textAlign="center" color="white" py={16} pb={24}>
        <Text
          color="white"
          textTransform="uppercase"
          mb={6}
          fontWeight={'bold'}
          fontSize={['2xl']}
        >
          Follow Along
        </Text>
        <Flex justifyContent="center">
          <SocialLinks links={business.links} fill="#ffffff" />
        </Flex>
      </Box>

      <Box
        bgColor="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        py={16}
        pb={8}
        position="relative"
        borderTopWidth={12}
        borderColor="primary"
      >
        <Box
          bgColor="black"
          p={4}
          borderRadius="150px"
          position="absolute"
          top="-40px"
          cursor="pointer"
          onClick={scrollToTop}
          width={75}
          height={75}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Icon as={RiArrowDropUpLine} fill="#fff" w={10} h={10} />
        </Box>
        <Box
          color="primary"
          fontWeight={'bold'}
          textTransform={'uppercase'}
          mb={4}
          fontSize={['2xl', '3xl', '4xl']}
          textAlign={'center'}
          display={'flex'}
          justifyContent={'center'}
        >
          <Image src={buildAvatar(business)} width={250} height={250} />
        </Box>

        <Flex alignItems="center" mb={2}>
          <Icon as={FaMapMarkerAlt} fill="#919191" mr={1} />
          <Text color="primary" as="a" href={getGoogleString(business)}>
            {printAddress(business)}
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Icon as={FaPhoneAlt} fill="#919191" mr={1} />
          <Text color="primary" as="a" href={`tel:${business.phone}`}>
            {business.phone}
          </Text>
        </Flex>

        <Flex justifyContent="center" alignItems="center" mt={8}>
          <Link href="https://www.gonation.com/" isExternal>
            <Image
              src="/gn-power-black.svg"
              alt="Powered by GoNation"
              width={270}
              height={50}
            />
          </Link>
        </Flex>
      </Box>
    </>
  );
}
