import React from 'react';
import { Box } from '@chakra-ui/react';
import { Divide as HamburgerJS } from 'hamburger-react';

const Burger = ({
  navIsOpen,
  setNavIsOpen,
  burgerStyles,
  hasScrolled,
  navStyles,
}) => {
  // Define a default style if navStyles is not provided
  const defaultStyles = {
    position: 'absolute',
    zIndex: 999999,
    top: 0,
    right: 0,
    color: hasScrolled ? '#fff' : '#fff',
    size: 24, // default size
  };

  // Use provided styles or default styles
  const styles = navStyles?.burgerStyles || defaultStyles;

  return (
    <Box {...styles}>
      <HamburgerJS
        toggled={navIsOpen}
        toggle={setNavIsOpen}
        color={styles.color}
        size={styles.size}
        rounded={styles.rounded}
        distance="sm"
      />
    </Box>
  );
};

export default Burger;
