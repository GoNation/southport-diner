import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Box, useBreakpointValue } from '@chakra-ui/react';

const BusinessLogo = ({ avatarUrl, businessName, navStyles }) => {
  const { logoWidth, logoHeight } = navStyles;
  // Define responsive image sizes using Chakra UI's useBreakpointValue
  const imageWidth = useBreakpointValue(logoWidth || 300);
  const imageHeight = useBreakpointValue(logoHeight || 300);

  return (
    <Box {...navStyles.businessLogoContainerStyles}>
      <Link href={'/'}>
        <Image
          src={avatarUrl}
          alt={`${businessName} logo`}
          width={imageWidth || 300}
          height={imageHeight || 300}
          objectFit="cover" // or any other fitting style as per requirement
        />
      </Link>
      {/* Optional: Display business name next to the logo */}
      {/* <Text ml={2}>{businessName}</Text> */}
    </Box>
  );
};

BusinessLogo.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  businessName: PropTypes.string.isRequired,
};

export default BusinessLogo;
