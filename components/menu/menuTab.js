import { Button, Skeleton } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const MenuTab = ({
  section,
  inventory,
  setActiveSection,
  setDisplayedCellSection,
  isTabs,
  activeSection,
  isLoading,
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  const isActive = activeSection.section._id === section._id;

  // Separate out the styles for clarity
  const styles = {
    base: 'flex-1 xl:flex-none min-w-[221px] xl:min-w-[290px] text-center px-4 md:py-5 font-regular py-3 mb-2 md:m-2 md:mb-4 md:mt-0 text-xs uppercase cursor-pointer transition-all duration-200 font-display',
    hover: 'hover:bg-secondary hover:text-white',
    active: 'bg-secondary text-white',
    notActive: 'bg-transparent border-2 border-primary text-dark',
  };

  let classes = `${styles.base} ${styles.hover}`;

  // Determine active or not active styles
  if (isActive) {
    classes += ` ${styles.active}`;
  } else {
    classes += ` ${styles.notActive}`;
  }

  return (
    <Skeleton isLoaded={!isLoading} borderRadius="md">
      <Button
        id="menuTab"
        onClick={() =>
          isTabs
            ? setActiveSection({ section, inventory })
            : setDisplayedCellSection({
                section,
                inventory,
              })
        }
        bg={'transparent'}
        color={'dark'}
        textTransform={'uppercase'}
        fontFamily={'accent'}
        letterSpacing={2}
        fontWeight={800}
        fontSize={['xl', 'xl', '2xl', '3xl']}
        borderRadius={0}
        _hover={{
          color: 'accent',
          borderBottom: `1px solid`,
          borderColor: 'accent',
        }}
        borderBottom={isActive ? `1px solid` : 'none'}
        borderColor={'accent'}
      >
        {section.name}
      </Button>
    </Skeleton>
  );
};

export default MenuTab;
