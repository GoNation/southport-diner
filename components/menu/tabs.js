import React from 'react';
import splitSectionChildren from '../../helpers/menu/splitSectionChildren';
import MenuTab from './menuTab';
import { Box, Skeleton } from '@chakra-ui/react';

const Tabs = ({
  menuData,
  onCellClick,
  activeSection,
  setActiveSection,
  hasNestedTabs,
  displayedCellSection,
  setDisplayedCellSection,
  isLoading,
}) => {
  const { childSections } = splitSectionChildren(menuData);

  const renderChildSections = () => {
    if (hasNestedTabs) {
      return activeSection.inventory.map(({ section, inventory }, index) => {
        return (
          <MenuTab
            key={`menuTab-${index}`}
            section={section}
            inventory={inventory}
            onCellClick={onCellClick}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            displayedCellSection={displayedCellSection}
            hasNestedTabs
            setDisplayedCellSection={setDisplayedCellSection}
            isLoading={isLoading}
          />
        );
      });
    } else {
      return childSections.map(({ section, inventory }) => (
        <MenuTab
          key={section._id}
          section={section}
          inventory={inventory}
          onCellClick={onCellClick}
          setActiveSection={setActiveSection}
          activeSection={activeSection}
          displayedCellSection={displayedCellSection}
          setDisplayedCellSection={setDisplayedCellSection}
          isLoading={isLoading}
          isTabs
        />
      ));
    }
  };

  return (
    <Skeleton isLoaded={!isLoading} width="100%">
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        py={8}
        maxW={'6xl'}
        mx={'auto'}
      >
        {activeSection && renderChildSections()}
      </Box>
    </Skeleton>
  );
};

export default Tabs;
