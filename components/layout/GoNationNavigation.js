import React, { useState, useEffect } from 'react';
import { Flex, useTheme, Box, useBreakpoint } from '@chakra-ui/react';
import NavigationItems from './NavigationItems';
import BusinessLogo from 'components/BusinessLogo';
import buildAvatar from 'helpers/general/buildAvatar';
import Burger from './Burger';
import TopBarNav from './TopBarNav';
import SocialLinks from 'components/ui/SocialLinks';
import { useRouter } from 'next/router';
import Image from 'next/image';

const GoNationNavigation = ({ routes, business, navSettings }) => {
  const theme = useTheme();
  const router = useRouter();
  const isHome = router.pathname === '/';
  const { colors } = theme;
  const { primary } = colors;
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    }
    if (window.scrollY === 0) {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const avatarUrl = buildAvatar(business);
  const { name } = business;

  const navRoutesFiltered = routes
    .filter(rt => !rt.navVisibility.hidden)
    .sort((a, b) => {
      // sort by order, if order doesn't exist it should be first
      if (!a.navVisibility.order) {
        return -1;
      }
      if (!b.navVisibility.order) {
        return 1;
      }

      return a.navVisibility.order - b.navVisibility.order;
    });

  //   navRoutesUnfiltered that does the above minus the hidden check
  const navRoutesUnfiltered = routes.sort((a, b) => {
    // sort by order, if order doesn't exist it should be first
    if (!a.navVisibility.order) {
      return -1;
    }
    if (!b.navVisibility.order) {
      return 1;
    }

    return a.navVisibility.order - b.navVisibility.order;
  });

  const navConfiguration = {
    topBarConfig: {
      display: false,
      email: null,
      displayPhone: true,
      displayAddress: true,
      displaySocialLinks: false,
    },
  };

  const navStyles = {
    logoWidth: hasScrolled ? [75, 100, 120] : [150, 150, 200],
    logoHeight: hasScrolled ? [75, 100, 120] : [150, 150, 200],
    businessLogoContainerStyles: {
      display: 'flex',
      alignItems: 'center',
    },
    topBarNavStyles: {
      bg: 'dark',
      p: 2,
      innerContainer: {
        flexDir: ['column', '', '', '', 'row'],
        alignItems: 'center',
        color: 'white',
        fontSize: ['xs'],
        justifyContent: ['center', '', '', ''],
        px: [4, 4, 4, 8],
        fontWeight: 'light',
      },
      innerItemContainer: {
        my: 0,
        mx: [0, 0, 0, 4],
      },
    },
    burgerStyles: {
      position: 'absolute',
      top: hasScrolled ? [3, 3, 8] : 10,
      right: 5,
      color: navIsOpen || hasScrolled ? '#fff' : '#fff',
      zIndex: 999999999,
      size: 24, // default size
      display: ['block', '', '', '', ''],
      //   bg: hasScrolled ? 'white' : 'transparent',
      //   border: '2px solid',
      //   borderColor: hasScrolled ? 'primary' : 'transparent',
      transition: 'all 0.3s ease',
    },
    sharedNavItemsStyles: {
      listStyleType: 'none',
      // Other shared styles
    },
    mobileNavItemsStyles: {
      display: ['flex', '', '', ''],
      flexDir: 'column',
      textAlign: 'center',
      //   position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 999,
      width: '100%',
      bg: 'dark',
      height: '100vh',
      //   position: 'fixed',
      px: 3,

      justifyContent: 'center',
      alignItems: 'center',
      // Other mobile-specific styles
    },

    navItemStyles: {
      py: [3, 4, 4],
      color: ['white', '', 'white'],
      fontWeight: [600],
      textTransform: 'uppercase',
      fontSize: ['xl', '2xl', '', '2xl'],
      fontFamily: 'body',
      letterSpacing: '0.1em',
      ml: [0, 0, 0, 0, 4],

      _hover: {
        color: 'primary',
      },
    },
    bottomNavItemsStyles: {
      flexDir: 'row',
      justifyContent: 'flex-end',
      textAlign: 'center',
      color: 'dark',
      display: ['flex', '', '', '', 'flex'],
      fontSize: ['2xl', 'md', 'lg', 'sm'],
      // Other mobile-specific styles
    },
    largeNavItemsStyles: {
      display: ['none', '', '', '', ''],
      alignItems: 'center',

      // Other large screen-specific styles
    },
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <>
      <TopBarNav
        styles={navStyles.topBarNavStyles}
        business={business}
        config={navConfiguration.topBarConfig}
      />
      <Flex
        as="nav"
        justifyContent={'space-between'}
        alignItems="center"
        p={[2, 2, 4]}
        px={[2, 2, 8, 8, 8]}
        position={['fixed']}
        bg={hasScrolled ? 'rgba(0,0,0,.8)' : 'transparent'}
        width="100%"
        zIndex={999999}
        transition={'background-color 0.3s ease'}
        mt={0}
      >
        <BusinessLogo
          avatarUrl={avatarUrl}
          businessName={name}
          navStyles={navStyles}
        />
        {/* Conditionally render NavigationItems or Burger based on screen size or state */}
        <NavigationItems
          navItemStyles={navStyles.navItemStyles}
          routes={navRoutesFiltered.filter(
            rt => !rt.navVisibility.displayInFooter
          )}
          styles={{
            ...navStyles.sharedNavItemsStyles,
            ...navStyles.largeNavItemsStyles,
          }}
        />
        <Burger
          navIsOpen={navIsOpen}
          setNavIsOpen={setNavIsOpen}
          navStyles={navStyles}
          hasScrolled={false}
          business={business}
          display={{ base: 'flex', md: 'none' }}
        />
      </Flex>
      <Box
        pos="relative"
        display={['block', 'block', 'flex']}
        position={'fixed'}
        zIndex={99999}
        width={'100%'}
      >
        {navIsOpen && (
          <>
            <Box
              color={'white'}
              zIndex={9999}
              flex={1}
              display={['none', 'none', 'block']}
            >
              <Image
                src={
                  'https://res.cloudinary.com/gonation/image/upload/v1727282144/gonation.data.prod/ldhg3xpjlgyyfvzlprjc.webp'
                }
                width={900}
                height={1200}
                style={{
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Box flex={1} zIndex={999} height={'100vh'}>
              <NavigationItems
                navItemStyles={{
                  ...navStyles.navItemStyles,
                }}
                routes={navRoutesUnfiltered}
                styles={{
                  ...navStyles.sharedNavItemsStyles,
                  ...navStyles.mobileNavItemsStyles,
                }}
                closeNav={closeNav}
                business={business}
              />
            </Box>
          </>
        )}
      </Box>

      {/* Fixed bottom footer 	with nav items */}
      <Flex
        display={['none', 'none', 'none', 'none']}
        as="footer"
        bg="light"
        color="white"
        pos="fixed"
        bottom="0"
        left="0"
        right="0"
        zIndex="9999"
        alignItems={'center'}
        justifyContent={'space-between'}
        pl={[3, 8]}
        py={2}
      >
        <Flex>
          <SocialLinks links={business.links} fill={'#000'} />
        </Flex>
        <NavigationItems
          navItemStyles={navStyles.navItemStyles}
          routes={navRoutesFiltered.filter(
            rt => rt.navVisibility.displayInFooter
          )}
          styles={{
            ...navStyles.sharedNavItemsStyles,
            ...navStyles.largeNavItemsStyles,
            ...navStyles.bottomNavItemsStyles,
          }}
        />
      </Flex>
    </>
  );
};

export default GoNationNavigation;
