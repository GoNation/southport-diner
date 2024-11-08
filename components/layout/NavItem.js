import React from 'react';
import Link from 'next/link';
import { Box, border } from '@chakra-ui/react';
import slugifyLower from 'helpers/printing/slugifyLower';
import { handleGlobalLink } from 'helpers';

const NavItem = ({ route, styles, closeNav, isPrimary }) => {
  const { name } = route;
  const { path } = route.basicInfo;

  // Use the path if it exists, otherwise slugify the name
  const href = path || `/${slugifyLower(name)}`;

  const primaryStyles = isPrimary
    ? {
        color: 'white',
        bg: 'primary',
        ml: 2,
        px: 8,
        borderRadius: 'md',
        border: '1px solid!important',
        borderColor: 'primary',
        textAlign: 'center',
        mb: [4, 0, 0, 0, 0],
        ml: [0, 0, 0, 0, 4],
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        _hover: {
          color: 'primary',
          bg: 'white',
        },
      }
    : {};

  return (
    <Box
      as="li"
      sx={{
        ...styles,
        ...primaryStyles,
      }}
    >
      <Link
        onClick={closeNav}
        {...handleGlobalLink(href)}
        style={{
          // take the shape of the parent
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      >
        {name}
      </Link>
      {/* Additional logic for submenus or special styles */}
    </Box>
  );
};

export default NavItem;
