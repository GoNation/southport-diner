import React, { useState } from 'react';
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Link,
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import NextLink from 'next/link';

const defaultStyles = {
  locationSwitcherBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bg: 'rgba(0,0,0,.2)',
    p: 2,
    borderBottom: '1px solid',
    borderColor: 'primary',
  },
  iconFill: '#ffffff',
  locationText: {
    ml: 2,
    fontSize: 'xs',
    _hover: {
      color: 'primary',
    },
  },
  modalContent: {
    bg: 'background',
    color: 'white',
    border: '2px solid',
    borderColor: 'white',
    borderRadius: 'md',
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  locationButton: {
    as: Link,
    w: 'full',
    mb: 4,
    bg: 'dark',
    color: 'white',
    borderBottom: '1px solid',
    borderColor: 'primary',
    _hover: { bg: 'primary' },
  },
};

export default function LocationSwitcher({
  options,
  currentLocation,
  logo,
  styleProps = {},
}) {
  const [locationSelectorIsOpen, setLocationSelectorIsOpen] = useState(false);
  // Merge nested style objects correctly
  const mergedStyles = {
    ...defaultStyles,
    ...styleProps,
    locationButton: {
      ...defaultStyles.locationButton,
      ...styleProps.locationButton,
    },
  };
  if (!options) return null;
  const { locationSwitcherOptions } = options;
  if (!locationSwitcherOptions) return null;

  const handleLocationClick = () => {
    setLocationSelectorIsOpen(!locationSelectorIsOpen);
  };

  return (
    <>
      <Box {...mergedStyles.locationSwitcherBox} onClick={handleLocationClick}>
        {options.locationSwitcherIconVisibility && (
          <FaMapMarkerAlt fill={mergedStyles.iconFill} />
        )}
        <Text {...mergedStyles.locationText}>
          <button>{currentLocation}</button>
        </Text>
      </Box>

      <Modal
        isOpen={locationSelectorIsOpen}
        onClose={() => setLocationSelectorIsOpen(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent {...mergedStyles.modalContent}>
          <ModalHeader {...mergedStyles.modalHeader}>
            <Image src={logo} alt="Logo" mb={4} width={200} height={250} />
            <Text fontSize={'2xl'} fontFamily={'heading'}>
              Our Locations
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {locationSwitcherOptions.map((option, index) => (
              <NextLink key={index} href={option.path} passHref>
                <Button {...mergedStyles.locationButton}>{option.label}</Button>
              </NextLink>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
