import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, useMediaQuery, useBreakpointValue } from '@chakra-ui/react';

export default function NavLogo({ logo, business, hasScrolled }) {
  // Check if the screen size is mobile
  const logoSize = useBreakpointValue([100, 100, 100, 225]);
  const logoSizeScrolled = useBreakpointValue([100, 100, 90]);
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  // Set logo dimensions based on screen size
  const logoWidth = isMobile ? 75 : 300;
  const logoHeight = isMobile ? 75 : 100;
  const logoWidthScrolled = hasScrolled && isMobile ? 75 : 125;
  const logoHeightScrolled = hasScrolled && isMobile ? 75 : 125;

  return (
    <Flex
      justifyContent={['flex-start', 'flex-start', 'center', 'center']}
      //   py={2}
      //   px={4}
      rounded="sm"
      top={0}
      left={0}
      position={['relative']}
      order={-1} // make logo first / above in stacked layout
    >
      <Box>
        <Link href={'/'}>
          <Image
            src={logo}
            alt={business.name}
            width={400}
            height={200}
            style={{
              transition: 'all 0.3s ease-in-out',
            }}
          />
        </Link>
      </Box>
    </Flex>
  );
}
