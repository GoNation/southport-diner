import React, { useState } from 'react';
import NavItem from './NavItem';
import { Box } from '@chakra-ui/react';
import NavDropdown from './NavDropdown';

const NavigationItems = ({ routes, styles, navItemStyles, closeNav }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Identify dropdown parents and group children under them
  const dropdownParents = routes.filter(route => route.isDropdown);
  const childrenForDropdowns = routes.reduce((acc, route) => {
    const label = route.navVisibility.dropdownLabel;
    if (label) {
      const parentName = dropdownParents.find(
        parent => parent.name.toLowerCase() === label.toLowerCase()
      )?.name;
      if (parentName) {
        acc[parentName]
          ? acc[parentName].push(route)
          : (acc[parentName] = [route]);
      }
    }
    return acc;
  }, {});

  const toggleDropdown = label => {
    // Check if the current openDropdown is the same as the one being toggled
    // and close it if so. Otherwise, open the new one.
    setOpenDropdown(
      openDropdown?.toLowerCase() === label.toLowerCase() ? null : label
    );
  };

  return (
    <Box as="ul" sx={styles}>
      {routes.map((route, idx) => {
        if (route.isDropdown) {
          return (
            <>
              <NavDropdown
                key={route.name}
                label={route.name}
                groupedRoutes={childrenForDropdowns[route.name] || []}
                navItemStyles={navItemStyles}
                closeNav={closeNav}
                isOpen={
                  openDropdown?.toLowerCase() === route.name.toLowerCase()
                }
                openDropdown={openDropdown}
                toggleDropdown={() => toggleDropdown(route.name)}
              />
            </>
          );
        } else if (!route.navVisibility.dropdownLabel) {
          // Render as a normal NavItem if not a child of a dropdown
          return (
            <NavItem
              key={route.basicInfo.path}
              route={route}
              styles={navItemStyles}
              closeNav={closeNav}
              isPrimary={route?.navVisibility?.isPrimaryCalledToAction}
            />
          );
        }
        // Do not render children here; they are rendered within their respective NavDropdown
        return null;
      })}
    </Box>
  );
};

export default NavigationItems;
