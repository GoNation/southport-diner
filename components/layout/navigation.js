import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, VStack, Text } from '@chakra-ui/react';

import MobileNavigation from './MobileNavigation';
import CTABar from 'components/CTABar';
import Dropdown from './Dropdown';
import LinkItem from './LinkItem';
import NavLogo from './NavLogo';
import Hamburger from './Hamburger';

import buildAvatar from 'helpers/general/buildAvatar';
import slugifyLower from 'helpers/printing/slugifyLower';
import LocationSwitcher from './LocationSwitcher';
import printAddress from 'helpers/printing/printAddress';
import getGoogleString from 'helpers/printing/getGoogleString';

const Navigation = ({
  business,
  navLayout,
  navPosition,
  routes,
  navigationSettings,
  hideLogo,
}) => {
  const router = useRouter();
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropdownVisibility, setDropdownVisibility] = useState({});
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setHasScrolled(scrollPosition > 4);
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const firstSlug = router.asPath.split('/')[1];
  const routeIsActive = useCallback(
    route => route === `/${firstSlug}`,
    [firstSlug]
  );

  const groupedRoutes = useMemo(
    () => groupRoutes(routes),
    [routes, hasScrolled]
  );
  const logo = useMemo(() => buildAvatar(business), [business]);

  const toggleDropdown = label => {
    setDropdownVisibility(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const renderDropdown = useCallback(
    (label, children) => (
      <Box position={'relative'}>
        <Text
          display={'inline-flex'}
          alignItems={'center'}
          py={0}
          px={[4, 4, 2, 4]}
          color={hasScrolled ? 'accent' : 'accent'}
          borderColor="none"
          fontFamily="accent"
          fontSize={['xs', 'xs', 'lg']}
          fontWeight="black"
          textTransform="uppercase"
          letterSpacing={[1]}
          fontStyle={'italic'}
          cursor={'pointer'}
          _hover={{
            color: hasScrolled ? 'primary' : 'primary',
            textDecoration: hasScrolled ? 'underline' : 'none',
          }}
          onClick={() => toggleDropdown(label)}
        >
          {label}
          <Box ml={1} as="span">
            <FaAngleDown color={primaryColor} />
          </Box>
        </Text>

        <Dropdown
          children={children}
          isDropdownVisible={dropdownVisibility[label]}
        />
      </Box>
    ),
    [dropdownVisibility]
  );

  const renderRoute = useCallback(
    route =>
      route.dropdownLabel ? null : (
        <Box
          key={slugifyLower(route.name)}
          position="relative"
          display="group"
          cursor={route.children ? 'pointer' : 'pointer'}
        >
          {route.children ? (
            <>
              <Text
                as="span"
                color="white"
                textTransform="uppercase"
                display="flex"
                alignItems="center"
                fontFamily="body"
                onClick={() => setIsDropdownVisible(!isDropdownVisible)}
              >
                {route.name}
                <Box ml={1}>
                  <FaAngleDown color="#ffffff" />
                </Box>
              </Text>
              {isDropdownVisible && (
                <Dropdown
                  children={route.children}
                  isDropdownVisible={isDropdownVisible}
                />
              )}
            </>
          ) : (
            <LinkItem
              route={route}
              py={route.navVisibility.isPrimaryCalledToAction ? 1 : 0}
              px={
                route.navVisibility.isPrimaryCalledToAction
                  ? [4, 4, 8]
                  : [4, 4, 2]
              }
              mx={[0, 0, 0, 1]}
              display={route.hidden ? 'none' : 'block'}
              color={
                route.navVisibility.isPrimaryCalledToAction
                  ? hasScrolled
                    ? 'primary'
                    : 'white'
                  : hasScrolled
                  ? 'white'
                  : 'white'
              }
              fontSize={['xs', 'xs', 'md', 'lg']}
              fontFamily="accent"
              fontWeight="black"
              textTransform="uppercase"
              letterSpacing={[1]}
              textDecoration={routeIsActive(route.path) ? 'underline' : 'none'}
              bg={
                route.navVisibility.isPrimaryCalledToAction
                  ? hasScrolled
                    ? 'white'
                    : 'primary'
                  : hasScrolled
                  ? ''
                  : ''
              }
              borderColor={
                route.navVisibility.isPrimaryCalledToAction ? 'primary' : 'none'
              }
              borderWidth={
                route.navVisibility.isPrimaryCalledToAction ? '2px' : '0'
              }
              _hover={{
                color: hasScrolled ? 'dark' : 'primary',
                bg:
                  route.navVisibility.isPrimaryCalledToAction && hasScrolled
                    ? 'white'
                    : 'transparent',
                textShadow: 'none',
                transition: 'all 0.3s ease-in-out',
              }}
            />
          )}
        </Box>
      ),
    [isDropdownVisible, hasScrolled]
  );

  const renderNavItems = useCallback(
    route => {
      return (
        <Flex
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          justifyContent={'flex-end'}
          width={'100%'}
          py={[0, 0, 4]}
          alignItems={'center'}
        >
          {Object.entries(groupedRoutes).map(([label, routes]) =>
            label === 'noDropdown'
              ? routes
                  .filter(
                    route =>
                      !route.navVisibility.hidden &&
                      !route.navVisibility.hideInHamburger
                  )
                  .sort((a, b) =>
                    a?.navVisibility?.order > b?.navVisibility?.order ? 1 : -1
                  )
                  .map(route => renderRoute(route))
              : renderDropdown(label, routes)
          )}
        </Flex>
      );
    },
    [groupedRoutes, hasScrolled]
  );

  const renderLogo = useCallback(
    () =>
      !hideLogo && (
        <NavLogo
          logo={logo}
          business={business}
          hasScrolled={scrollPosition > 4}
        />
      ),
    [hideLogo, logo, business, scrollPosition]
  );

  const renderLocationSwitcher = useCallback(locationSwitcher => {
    if (locationSwitcher?.locationSwitcherVisibility) {
      return (
        <Box
          display={['block', '', '', 'none']}
          pos={'absolute'}
          top={5}
          left={3}
          color={'white'}
          zIndex={99}
        >
          <LocationSwitcher
            options={locationSwitcher}
            currentLocation={business.city}
            logo={buildAvatar(business)}
          />
        </Box>
      );
    }
  }, []);

  const renderNavigationContent = useCallback(() => {
    const { locationSwitcher } = navigationSettings;
    switch (navLayout) {
      case 'logoLeft':
        return (
          <Flex
            w="full"
            justifyContent={['flex-start', 'flex-start']}
            alignItems={['center', '', '', '']}
          >
            {renderLocationSwitcher(locationSwitcher)}
            {renderLogo()}
            {renderNavItems(routes)}
          </Flex>
        );
      case 'logoRight':
        return (
          <Flex justifyContent="space-between" alignItems="center">
            {renderNavItems(routes)}
            {renderLogo()}
          </Flex>
        );
      case 'logoCentered':
        return (
          <Flex justifyContent="space-between" alignItems="center" w="full">
            <Flex flex={[0, 0, 1, 1]} justifyContent="flex-start">
              {renderNavItems(leftRoutes)}
            </Flex>
            <Box w={{ base: '200px', lg: '200px', xl: '300px' }} mx="auto">
              {/* Adjust the width as needed */}
              {renderLogo()}
            </Box>
            <Flex flex={1} justifyContent="flex-end">
              {renderNavItems(rightRoutes)}
            </Flex>
          </Flex>
        );
      case 'stacked':
        return (
          <VStack width={'100%'}>
            {renderNavItems(routes)}
            {renderLogo()}
          </VStack>
        );
      default:
        return (
          <>
            {renderLogo()}
            {renderNavItems(routes)}
          </>
        );
    }
  }, [navLayout, routes, renderLogo, renderNavItems]);

  return (
    <>
      {navigationSettings?.fixedNavigationCTABar?.displayFixedBarCTA && (
        <CTABar
          content={navigationSettings.fixedNavigationCTABar.displayFixedBarCTA}
          businessId={business.businessId}
        />
      )}
      <Box
        position={navPosition}
        top={[0, 0]}
        w="full"
        zIndex={999}
        transition="all 0.3s ease-in-out"
        px={[0, '', 4]}
        py={[1, 2, '', 4]}
        bg={
          hasScrolled
            ? 'primary'
            : ['primary', 'dark', 'dark', 'rgba(0,0,0,.0)']
        }
        display={['block', '', '', 'flex']}
        flexDir={'column'}
        boxShadow={hasScrolled && '2xl'}
        borderBottom={hasScrolled && ['', '4px solid']}
        borderTop={hasScrolled && ['', '4px solid']}
        borderColor={'dark'}
        // boxShadow={'0 0 25px rgba(0,0,0,0.5)'}
      >
        <Flex
          w="full"
          px={2}
          alignItems={['center', '', '']}
          justifyContent="space-between"
        >
          {renderNavigationContent()}
          <Hamburger
            navIsOpen={navIsOpen}
            setNavIsOpen={setNavIsOpen}
            navigationSettings={navigationSettings}
            hamburgerSettings={navigationSettings?.hamburgerSettings}
            hasScrolled={hasScrolled}
            business={business}
            locationSwitcher={navigationSettings?.locationSwitcher}
          />
          {navIsOpen && (
            <MobileNavigation
              close={() => setNavIsOpen(false)}
              business={business}
              logo={logo}
              routes={routes}
              hasScrolled={hasScrolled}
              locationSwitcher={navigationSettings?.locationSwitcher}
            />
          )}
        </Flex>
        <Flex
          fontSize={'xs'}
          color={'white'}
          justify={'space-evenly'}
          borderTop={['1px solid']}
          borderBottom={hasScrolled && ['unset', '', '', '1px solid']}
          borderColor={'primary!important'}
          order={hasScrolled && -1}
          cursor={'pointer'}
          display={'none'}
        >
          <Text
            p={1}
            py={2}
            _hover={{
              color: ['primary', '', '', 'white'],
              bg: ['dark', '', '', 'primary'],
              transition: 'all .5s ease',
            }}
            flex={['unset', '', '', 1]}
            textAlign={'center'}
          >
            <a href={getGoogleString(business)} target="_blank" rel="noopener">
              {printAddress(business, false)}
            </a>
          </Text>
          <Text
            p={1}
            py={2}
            _hover={{
              color: ['primary', '', '', 'white'],
              bg: ['dark', '', '', 'primary'],
              transition: 'all .5s ease',
            }}
            flex={['unset', '', '', 1]}
            textAlign={'center'}
          >
            <a href={`tel:${business.phone}`}>{business.phone}</a>
          </Text>
        </Flex>
      </Box>
    </>
  );
};

// Grouping routes by dropdownLabel and no label
const groupRoutes = routes => {
  const groupedRoutes = { noDropdown: [] };
  routes.forEach(route => {
    const label = route?.navVisibility?.dropdownLabel || 'noDropdown';
    if (!groupedRoutes[label]) {
      groupedRoutes[label] = [];
    }
    groupedRoutes[label].push(route);
  });
  return groupedRoutes;
};

export default Navigation;
