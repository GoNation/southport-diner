import slugifyLower from './printing/slugifyLower';

const buildNavItems = navRoutes => {
  const navItems = [];
  const dropdowns = {};

  // First pass: Collect all dropdowns
  navRoutes.forEach(route => {
    const { name, navVisibility, isDropdown } = route;

    if (isDropdown) {
      const { order } = navVisibility;
      const dropdown = {
        title: name,
        isDropdown: true,
        children: [],
        variant: 'default',
        order: order,
      };
      dropdowns[name] = dropdown;
    }
  });

  // Second pass: Attach children and add standalone items
  navRoutes.forEach(route => {
    const { name, basicInfo, navVisibility, isDropdown } = route;
    const { order } = navVisibility;
    const navItem = {
      title: name,
      url: basicInfo?.path ? basicInfo.path : `/${slugifyLower(name)}`,
      isDropdown: false,
      variant: route.variant || undefined,
      order: order,
      hidden: navVisibility?.hidden,
    };

    if (!isDropdown && navVisibility?.dropdownLabel) {
      // This is a child item, attach it to the appropriate dropdown
      const parentDropdown = dropdowns[navVisibility.dropdownLabel];
      if (parentDropdown) {
        parentDropdown.children.push(navItem);
      } else {
        console.warn(
          `Warning: Parent dropdown not found for: ${name} with label ${navVisibility.dropdownLabel}`
        );
      }
    } else if (!isDropdown) {
      // This is a standalone nav item, so add it directly
      navItems.push(navItem);
    }
  });

  // Add the dropdowns to the main navItems list
  Object.values(dropdowns).forEach(dropdown => {
    navItems.push(dropdown);
  });

  // Sort navItems by order
  navItems.sort((a, b) => (a.order || 0) - (b.order || 0));

  return navItems;
};

export const transformNavigationData = (navRoutes, logo) => {
  return {
    logo,
    items: buildNavItems(navRoutes),
  };
};
