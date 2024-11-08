import React from 'react';
import { Box, Heading, useStyleConfig } from '@chakra-ui/react';
import CellsAndAllIn from './CellsAndAllIn';
import TabsView from './tabsView';
import AllInOnce from './allIn';
import useMenu from 'hooks/useMenu';

const Menu = ({ menuData, mode, config = {}, business }) => {
  const variant = config;
  const styles = useStyleConfig('Menu', { variant });
  const { menu, isLoading } = useMenu(null, config?.poweredList || 3);

  const menuToRender = menu[0] ? menu[0] : null;

  const getRenderType = () => {
    switch (menuToRender.mode) {
      case 'allInOnce':
        return (
          <AllInOnce
            menuData={menuToRender}
            mode={menuToRender.mode}
            config={config}
            business={business}
            isLoading={isLoading}
          />
        );
      case 'cellsThenAllInOnce':
        return (
          <CellsAndAllIn
            menuData={menuToRender}
            mode={menuToRender.mode}
            business={business}
            config={config}
          />
        );
      case 'tabs':
        return (
          <TabsView
            menuData={menuToRender}
            mode={menuToRender.mode}
            isLoading={isLoading}
          />
        );
      case 'cellsThenTabs':
        if (menuToRender.mode) {
          return (
            <CellsAndAllIn
              mode={menuToRender.mode}
              menuData={menuToRender}
              isCellsAndTabs
            />
          );
        }

      default:
        return (
          <h1>Menu Could Not Be Loaded At This Time, please Try Again Later</h1>
        );
    }
  };

  return (
    <Box id="menu" as="section" {...styles.container}>
      <Heading {...styles.heading}>Menu</Heading>
      {menuToRender?.mode && getRenderType()}
    </Box>
  );
};

export default Menu;
