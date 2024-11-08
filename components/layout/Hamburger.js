import React from 'react';
import { Box } from '@chakra-ui/react';
import { Divide as HamburgerJS } from 'hamburger-react';
import { useTheme } from '@emotion/react';
import LocationSwitcher from './LocationSwitcher';
import buildAvatar from 'helpers/general/buildAvatar';

export default function Hamburger({
  hamburgerStyles,
  navIsOpen,
  setNavIsOpen,
  hamburgerSettings,
  hasScrolled,
  locationSwitcher,
  business,
}) {
  let displayStyle;
  const theme = useTheme();
  const primaryColor = theme?.colors?.primary;
  const secondaryColor = theme?.colors?.secondary;
  const accentColor = theme?.colors?.accent;

  const colors = {
    primary: primaryColor,
    secondary: secondaryColor,
    accent: accentColor,
    white: '#fff',
  };

  // Determine display style based on hamburgerVisibility setting
  switch (hamburgerSettings?.hamburgerVisibility) {
    case 'mobile':
      displayStyle = { base: 'block', md: 'none' };
      break;
    case 'tablet':
      displayStyle = { base: 'block', lg: 'none' };
      break;
    case 'largeDisplays':
      displayStyle = { base: 'block', xl: 'none' };
      break;
    case 'alwaysVisible':
      displayStyle = { base: 'block' };
      break;
    default:
      displayStyle = { base: 'block' }; // default visibility
  }

  // Calculate top and right position
  let positionStyle = { top: [1], right: 4 };
  //   if (navIsOpen && !hasScrolled) {
  //     positionStyle = { top: 0, right: 0 };
  //   } else if (!navIsOpen && !hasScrolled) {
  //     positionStyle = { top: 28, right: 8 };
  //   } else if (navIsOpen && hasScrolled) {
  //     positionStyle = { top: 2, right: 0 };
  //   } else if (!navIsOpen && hasScrolled) {
  //     positionStyle = { top: [2, 2, 4], right: 0 };
  //   }

  // Determine color

  return (
    <Box
      position={['absolute', 'absolute', 'absolute', 'relative']}
      sx={{ ...hamburgerStyles }}
      ml={[0, 0, 0, 4]}
      display={displayStyle}
      //   position="absolute"
      zIndex={9999999}
      {...positionStyle}
    >
      <Box display={['none', '', '', 'block']}>
        <LocationSwitcher
          options={locationSwitcher}
          currentLocation={business.city}
          logo={buildAvatar(business)}
          styleProps={{
            locationText: {
              color: 'white',
              mt: 2,
            },
          }}
        />
      </Box>
      <Box p={1}>
        <HamburgerJS
          toggled={navIsOpen}
          toggle={setNavIsOpen}
          color={
            navIsOpen ? colors['white'] : colors['white']

            // hasScrolled
            //   ? theme?.colors?.dark
            //   : hamburgerSettings?.hamburgerColor || 'white'
          }
          rounded={false}
          size={hamburgerSettings?.hamburgerSize}
        />
      </Box>
    </Box>
  );
}
