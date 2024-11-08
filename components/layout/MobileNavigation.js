import {
  Box,
  Flex,
  Image as ChakraImage,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import slugify from 'slugify';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import LinkItem from './LinkItem';
import SocialLinks from 'components/ui/SocialLinks';
import LocationSwitcher from './LocationSwitcher';
import buildAvatar from 'helpers/general/buildAvatar';

const MotionBox = motion(Box);

function MobileNavigation({
  navVariants,
  logo,
  closeMobileNav,
  routes = [],
  business,
  locationSwitcher,
  close,
}) {
  const theme = useTheme();
  const primaryColor = theme.colors.primary;
  const secondaryColor = theme.colors.secondary;
  return (
    <MotionBox
      initial="closed"
      animate="open"
      exit="closed"
      variants={navVariants}
      position="fixed"
      top={0}
      right={0}
      left={0}
      w={['100%', '', '320px']}
      bg={'primary'}
      zIndex={99}
      height="100vh"
    >
      <Flex
        direction="column"
        width={'100%'}
        height={'100%'}
        border={'3px solid'}
        borderColor={'secondary'}
      >
        <Flex
          direction="column"
          flex={1}
          overflowY="scroll"
          mt={{ md: 8 }}
          borderTop={2}
          p={0}
          justifyContent={'center'}
          align={'center'}
        >
          <Box>
            <Image src={buildAvatar(business)} width={220} height={220} />
          </Box>
          {routes
            .reduce((acc, route) => {
              if (route.children) {
                acc = acc.concat(route.children);
              } else {
                acc.push(route);
              }
              return acc;
            }, [])
            .sort((a, b) => {
              return (
                parseInt(a?.navVisibility?.order) -
                parseInt(b?.navVisibility?.order)
              );
            })
            .map(route => (
              <Box
                key={slugify(route.name, { lower: true })}
                py={1}
                textAlign={'right'}
              >
                <LinkItem
                  route={route}
                  color="white"
                  tracking="wide"
                  fontWeight={800}
                  textTransform="none"
                  fontSize={['3xl', '2xl', '3xl']}
                  letterSpacing={1}
                  _hover={{ textDecoration: 'underline' }}
                  fontFamily={'accent'}
                  onClick={close}
                ></LinkItem>
              </Box>
            ))}
          <Box>
            <LocationSwitcher
              options={locationSwitcher}
              currentLocation={business.city}
              logo={buildAvatar(business)}
              styleProps={{
                locationText: {
                  fontSize: 'sm',
                  color: 'white',
                  textTransform: 'capitalize',
                  ml: 2,
                  fontFamily: 'heading',
                },
              }}
            />
          </Box>
          <Flex
            mt={8}
            pt={8}
            borderTop={'2px solid'}
            borderColor={'light'}
            w={'full'}
            justify={'center'}
          >
            <SocialLinks size={38} {...business} />
          </Flex>
        </Flex>

        {/* <Box
          position="absolute"
          bottom={32}
          right={6}
          width="100%"
          maxWidth="170px"
          mx={'auto'}
        >
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              layout="responsive"
              width={350}
              height={100}
            />
          </Link>
        </Box> */}
      </Flex>
    </MotionBox>
  );
}

export default MobileNavigation;
