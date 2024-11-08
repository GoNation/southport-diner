import React, { useState } from 'react';
import { Box, Button, VStack, IconButton } from '@chakra-ui/react';
import { FiPlus, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const styles = {
  container: {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    zIndex: '99',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  triggerButton: {
    variant: 'solid',
    colorScheme: 'primary',
    bg: 'primary',
    size: 'lg',
    boxShadow:
      '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.1)',
    border: '2px solid white',
    mb: 2,
  },
  actionButton: {
    variant: 'primary',
    size: 'xs',
    textTransform: 'none',
    fontFamily: 'body',
    fontWeight: 'light',
    border: '1px solid white',
    boxShadow:
      '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 'md',
  },
};

const GoNationQuickAction = ({ actions, defaultIcon = <FiPlus /> }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box {...styles.container}>
      <IconButton
        icon={isOpen ? <FiX /> : defaultIcon}
        onClick={handleToggle}
        aria-label="Toggle Actions"
        {...styles.triggerButton}
      />
      <AnimatePresence>
        {isOpen && (
          <VStack spacing={3} alignItems="flex-end">
            {actions.map((action, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  as={action.href ? 'a' : 'button'}
                  href={action.href || undefined}
                  onClick={action.onClick || undefined}
                  leftIcon={action.icon}
                  aria-label={action.name}
                  {...styles.actionButton}
                >
                  {action.name}
                </Button>
              </MotionBox>
            ))}
          </VStack>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default GoNationQuickAction;

// Example usage:
// import { FiPhone, FiNavigation } from 'react-icons/fi';

// const actions = [
//   { name: 'Call', icon: <FiPhone />, href: 'tel:123456789' },
//   { name: 'Directions', icon: <FiNavigation />, href: 'https://maps.google.com' },
// ];

// <GoNationQuickAction actions={actions} />
