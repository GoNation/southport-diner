import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import NavItem from './NavItem';

const NavDropdown = ({
  label,
  groupedRoutes,
  navItemStyles,
  closeNav,
  openDropdown,
  toggleDropdown,
}) => {
  const parentRef = useRef(null);
  const [dropdownStyles, setDropdownStyles] = useState({
    top: 0,
    left: 0,
    width: 'auto',
  });

  useEffect(() => {
    if (parentRef.current) {
      const rect = parentRef.current.getBoundingClientRect();
      setDropdownStyles({
        top: `${rect.bottom}px`, // Position directly below the parent item
        left: `${rect.left}px`, // Align with the left side of the parent item
        width: 'auto', // Adjust width as necessary, or use a specific value
      });
    }
  }, [parentRef.current]);

  return (
    <React.Fragment>
      <Box
        ref={parentRef}
        as="li"
        sx={{ ...navItemStyles, position: 'relative', cursor: 'pointer' }}
        onClick={e => {
          e.stopPropagation();
          toggleDropdown(label);
        }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-end'}
      >
        {label}
        <Box as="span" ml={2}>
          {openDropdown === label ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Box>
      </Box>
      {openDropdown === label && (
        <Box
          as="ul"
          sx={{
            position: ['static', '', '', 'absolute'],
            bg: 'dark',
            zIndex: 999,
            listStyle: 'none',
            ...dropdownStyles,
          }}
        >
          {groupedRoutes.map(route => (
            <NavItem
              key={route.basicInfo.path}
              route={route}
              styles={{
                ...navItemStyles,
                ...navItemStyles?.nestedNavItemStyles,
                fontSize: ['inherit', '', '', 'sm'],
              }}
              closeNav={
                // close nav and toggledropdown to null
                () => {
                  closeNav;
                  toggleDropdown(null);
                }
              }
            />
          ))}
        </Box>
      )}
    </React.Fragment>
  );
};

export default NavDropdown;
