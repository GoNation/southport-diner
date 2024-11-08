import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  useTheme,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import MinimalHours from 'components/MinimalHours';
import SocialLinks from 'components/ui/SocialLinks';
import {
  determineHref,
  determineTarget,
  determineRel,
  formatPhone,
} from 'helpers';
import getGoogleString from 'helpers/printing/getGoogleString';
import printAddress from 'helpers/printing/printAddress';
import { FaRegEnvelope, FaRegClock, FaPhone, FaMapPin } from 'react-icons/fa';
import GNPoweredBy from 'components/GNPoweredBy';
import buildAvatar from 'helpers/general/buildAvatar';
import LocationSwitcher from './LocationSwitcher';

const Footer = ({ business, iframeURL, routes, siteConfig }) => {
  const iframe = `<iframe src="${iframeURL}"  style="width: 100%; height: 100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  const theme = useTheme();
  const primaryColor = theme.colors.primary;
  const secondaryColor = theme.colors.secondary;
  const accentColor = theme.colors.accent;

  const styles = {
    footerContainer: {
      bg: 'primary',
      color: 'dark',
      py: 10,
      pb: [24, 12],
      borderTop: '3px solid',
      borderColor: 'secondary',
    },
    grid: {
      columns: { base: 1, md: 2, lg: 3 },
      spacing: 8,
      justifyContent: 'start',
      justify: 'start',
      align: 'start',
      alignItems: 'start',
    },
    vStack: {
      align: 'center',
      spacing: 3,
      p: 4,
    },
    sectionTitle: {
      fontWeight: 'bold',
      color: 'dark',
      fontFamily: 'accent',
      fontSize: 'xl',
      fontWeight: 'black',
      borderBottom: '1px solid',
      borderColor: 'secondary',
      pb: 3,
      textTransform: 'uppercase',
    },
    hStack: {},
    link: {
      color: 'dark',
      textAlign: 'center',

      _hover: {
        color: 'accent',
      },
    },
    icon: {
      color: 'dark',
    },
    imageContainer: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      w: 'full',
    },
    footerBottomVStack: {
      mt: 10,
      py: [4, 4],
      spacing: 3,
      justify: 'space-between',
    },
    footerBottomText: {
      color: 'dark',
      fontFamily: 'heading',
    },
    poweredByLink: {
      href: 'https://www.gonation.com/',
      isExternal: true,
    },
    aboutText: {
      textAlign: 'center',
    },
  };

  const DiscoverLinks = ({ routes }) => {
    return (
      <VStack align="center" spacing={3}>
        <Text {...styles.sectionTitle}>Explore</Text>
        <Flex flexWrap={'wrap'} justifyContent={'center'}>
          {routes.map((route, index) => {
            const href = determineHref(route);
            const target = determineTarget(href);
            const rel = determineRel(target);
            return (
              <Link
                key={index}
                href={href}
                target={target}
                rel={rel}
                {...styles.link}
                mr={4}
                mb={4}
                textTransform={'uppercase'}
                fontWeight={'normal'}
              >
                {route.name}
              </Link>
            );
          })}
        </Flex>
      </VStack>
    );
  };

  return (
    <Box {...styles.footerContainer}>
      <img src="/footer.png" alt="" />
      <Container maxW="8xl">
        {/* Footer Bottom Links */}
        <VStack {...styles.footerBottomVStack}>
          <Text {...styles.footerBottomText}>
            &copy; {new Date().getFullYear()} {business.name}
          </Text>
          <Link {...styles.poweredByLink}>
            <GNPoweredBy fill={secondaryColor} />
          </Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
