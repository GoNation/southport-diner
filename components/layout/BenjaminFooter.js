import React, { useMemo } from 'react';
import { Box, Text, Icon, Flex, useTheme } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from 'components/ui/SocialLinks';
import { formatPhone } from 'helpers';
import getGoogleString from 'helpers/printing/getGoogleString';
import printAddress from 'helpers/printing/printAddress';
import { FaPhone, FaMapPin } from 'react-icons/fa';
import GNPoweredBy from 'components/GNPoweredBy';
import buildAvatar from 'helpers/general/buildAvatar';
import { handleGlobalLink } from 'helpers';
import slugifyLower from 'helpers/printing/slugifyLower';
import buildCover from 'helpers/general/buildCover';

const CustomText = ({ children, ...props }) => (
  <Text
    fontSize={['md', 'md']}
    color={'white'}
    // fontFamily={'heading'}
    fontWeight={800}
    textTransform={'uppercase'}
    letterSpacing={2}
    _hover={{
      color: 'primary',
      textDecoration: 'underline',
      transitions: 'all 0.3s ease',
    }}
    {...props}
  >
    {children}
  </Text>
);

const StyledText = ({ children, href, as, ...props }) => {
  if (href) {
    return (
      <Link href={href} {...props}>
        <Text
          fontSize={['lg', 'lg', 'lg', '', '']}
          color={'white'}
          fontFamily={'body'}
          fontWeight={500}
          transition={'all 0.3s ease'}
          _hover={{
            textDecoration: 'underline',
            color: 'primary',
            transitions: 'all 0.3s ease',
          }}
        >
          {children}
        </Text>
      </Link>
    );
  }
  return null;
};

const InfoSection = ({ icon, href, children }) => (
  <Flex pl={[2, 4]} py={2} my={2}>
    <Box pt={1} pr={2}>
      <Icon as={icon} color={'primary'} />
    </Box>
    <StyledText href={href}>{children}</StyledText>
  </Flex>
);

export default function BenjaminFooter({ business, routes }) {
  const { colors } = useTheme();
  const { primary } = colors;
  const sortedRoutes = useMemo(() => {
    return [...routes].sort((a, b) => {
      // sort by order, if order doesn't exist it should be first
      if (!a.navVisibility.order) {
        return -1;
      }
      if (!b.navVisibility.order) {
        return 1;
      }

      return a.navVisibility.order - b.navVisibility.order;
    });
  }, [routes]);
  return (
    <Box
      borderTop={'2px solid'}
      borderColor={'primary'}
      py={[8, '', 0]}
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${buildCover(
        business
      )})`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      backgroundRepeat={'no-repeat'}
      //   backgroundAttachment={['none', '', '', 'fixed']}

      //   backgroundImage={`url("https://www.transparenttextures.com/patterns/paper.png")`}
      //   backgroundColor={'gray.700'}
    >
      <Flex flexDir={['column', '', '', 'row']}>
        <Box
          p={[2, 4, 8, 12, 24]}
          borderRight={'2px solid'}
          borderColor={'white'}
        >
          <Flex justify={'center'} align={'center'}>
            <Image
              src={buildAvatar(business)}
              width={300}
              height={300}
              alt={business.name}
            />
          </Flex>
        </Box>
        <Box flex={1} p={[2, 4, 8]}>
          <Flex flexWrap={'wrap'}>
            {sortedRoutes.map(route => {
              const href = route.path || `/${slugifyLower(route.name)}`;
              return (
                <Box key={route.id} py={2} px={4}>
                  <CustomText>
                    <Link {...handleGlobalLink(href)}>{route.name}</Link>
                  </CustomText>
                </Box>
              );
            })}
          </Flex>

          <InfoSection icon={FaMapPin} href={getGoogleString(business)}>
            {printAddress(business)}
          </InfoSection>

          <InfoSection icon={FaPhone} href={`tel:${business.phone}`}>
            {formatPhone(business.phone)}
          </InfoSection>

          <Flex pl={[2, 4]} my={2} py={2}>
            <SocialLinks links={business.links} size={32} fill={'#fff'} />
          </Flex>

          <Flex
            justify={'start'}
            align={'start'}
            pl={4}
            color={'white'}
            fontFamily={'heading'}
            fontWeight={500}
            my={4}
          >
            <Text fontSize={['lg']} color={'white'}>
              &copy; {new Date().getFullYear()} {business.name} All Rights
              Reserved
            </Text>
          </Flex>
          <Box pl={4} mt={12}>
            <GNPoweredBy fill={'#fff'} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
