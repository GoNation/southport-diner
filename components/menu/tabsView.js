import React, { useState } from 'react';
import AllIn from './allIn';
import Tabs from './tabs';
import { Box } from '@chakra-ui/react';

const TabsView = ({ menuData, setModalActive, isLoading }) => {
  const [activeSection, setActiveSection] = useState({
    section: menuData.inventory[0].section,
    inventory: menuData.inventory[0].inventory,
  });

  const onCellClick = selection => {
    return e => {
      e.preventDefault();
      setActiveSection(selection);
    };
  };

  const childrenWithProps = () => (
    <AllIn
      menuData={activeSection}
      setModalActive={setModalActive}
      isLoading={isLoading}
    />
  );

  return (
    <Box p={4}>
      <Tabs
        menuData={menuData}
        onCellClick={onCellClick}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isLoading={isLoading}
      />
      {childrenWithProps()}
    </Box>
  );
};

export default TabsView;
