import React from 'react';
import { Box, IconButton, VStack } from '@chakra-ui/react';
import { FiPhone, FiNavigation } from 'react-icons/fi';
import getGoogleString from 'helpers/printing/getGoogleString';

const FloatingActionButtons = ({ business }) => {
  const { phone } = business;

  const buttons = [
    {
      href: `tel:${phone}`,
      icon: <FiPhone />,
      ariaLabel: 'Call',
    },
    {
      href: getGoogleString(business),
      icon: <FiNavigation />,
      ariaLabel: 'Directions',
    },
  ];

  const styles = {
    container: {
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      zIndex: '99',
      display: ['block', 'block', 'block', 'none'],
    },
    button: {
      variant: 'primary',
      borderColor: 'white',
      size: ['sm'],
      m: 1,
    },
  };

  return (
    <VStack {...styles.container}>
      {buttons.map((button, index) => (
        <Box key={index}>
          <IconButton
            {...styles.button}
            icon={button.icon}
            as="a"
            href={button.href}
            target={
              // if external link _blank
              button.href.includes('http') ? '_blank' : '_self'
            }
            rel={
              // if external link nofollow
              button.href.includes('http') ? 'noreferrer' : ''
            }
            aria-label={button.ariaLabel}
          />
        </Box>
      ))}
    </VStack>
  );
};

export default FloatingActionButtons;
