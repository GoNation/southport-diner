import React from 'react';
import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import printAddress from 'helpers/printing/printAddress';
import Link from 'next/link';
import GNPoweredBy from 'components/GNPoweredBy';
import getGoogleString from 'helpers/printing/getGoogleString';
import SocialLinks from 'components/ui/SocialLinks';
import { formatPhone } from 'helpers';

export default function FixedFooter({ business, siteConfig }) {
  const theme = useTheme();

  const styles = {
    footerBox: {
      bg: 'dark',
      borderTop: '2px solid',
      borderColor: 'primary',
      color: 'white',
      py: [4, 4, 2],
      px: [2, 2, 4, 8],
      //   pb: [12, '', 2],
      textAlign: 'center',
      position: ['', ''],
      bottom: 0,
      left: 0,
      width: '100%',
    },
    justifyContentSpaceBetween: {
      justifyContent: 'space-between',
    },
    flexColumnRow: {
      flexDir: ['column', 'column', 'row'],
      alignItems: 'center',
    },
    hoverText: {
      fontSize: ['sm', 'md'],
      _hover: {
        color: 'white',
        textDecoration: 'underline',
        transition: 'all 0.2s ease-in-out',
      },
    },
    textSeparator: {
      as: 'span',
      mx: 2,
      display: ['none', '', 'inline'],
    },
    centerFlex: {
      bg: 'primary',
      justifyContent: 'center',
      py: [2, 0, 0, 3],
      borderTop: '1px solid #fff',
      //   mt: 4,
    },
  };

  return (
    <Box pb={[10, 10, 2]} bg={'primary'}>
      <Box {...styles.footerBox}>
        <Flex {...styles.justifyContentSpaceBetween} {...styles.flexColumnRow}>
          <Box>
            <Text fontFamily={'heading'} fontWeight={'bold'} fontSize={'xs'}>
              &copy; {new Date().getFullYear()} {business.name}
            </Text>
          </Box>
          <Flex {...styles.flexColumnRow}>
            <Text {...styles.hoverText} my={[3, 3, 0]} fontSize={'xs'}>
              <a href={getGoogleString(business)} target="_blank">
                {printAddress(business)}
              </a>
            </Text>
            <Text {...styles.textSeparator}>|</Text>
            <Text {...styles.hoverText} fontSize={'xs'}>
              <a href={`tel:${business.phone}`}>
                {formatPhone(business.phone)}
              </a>
            </Text>
            <Text {...styles.textSeparator}>|</Text>
            <Flex justifyContent={'center'} mt={[3, 3, 0]}>
              <SocialLinks links={business.links} size={12} />
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Flex {...styles.centerFlex}>
        <Link href={'https://www.gonation.com/'}>
          <GNPoweredBy fill={'#fff'} width={'190px'} />
        </Link>
      </Flex>
    </Box>
  );
}
