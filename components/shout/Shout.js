import React, { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';

const Shout = ({ data, width, hideShoutImage = true }) => {
  const [showFullPhoto, setShowFullPhoto] = useState(false);
  const { text } = data;
  const { isDefault } = data.image;
  const { cloudinaryId } = data.image.image;

  const linkTitle = data.ctas ? Object.keys(data.ctas)[0] || '' : '';
  const linkAddress = linkTitle.length ? data.ctas[linkTitle] : '';

  const renderLinks = () => (
    <ChakraLink
      href={`${linkAddress}`}
      color="primary"
      textDecoration={'underline'}
      target={linkAddress?.includes('http') ? '_blank' : ''}
    >
      {linkTitle}
    </ChakraLink>
  );

  return (
    <Box color="white" p={4} w={width}>
      <Grid templateColumns="1fr" gap={4} alignItems="center">
        {!isDefault && !hideShoutImage ? (
          <Button
            onClick={() => setShowFullPhoto(true)}
            p={0}
            bg="transparent"
            height={32}
          >
            <Box
              borderRadius="13px"
              overflow="hidden"
              position="relative"
              height="100%"
              width="100%"
            >
              <Image
                objectFit="cover"
                layout="fill"
                src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
                alt="Recent Shout!"
              />
            </Box>
          </Button>
        ) : null}

        <Box>
          <Heading
            as="h4"
            fontSize="lg"
            textAlign={'center'}
            mb={4}
            color="secondary"
            fontWeight={'light'}
          >
            Recent Shout
          </Heading>
          <Text
            fontSize="lg"
            mb={4}
            color={'primary'}
            textAlign={'center'}
            fontWeight={'bold'}
            boxShadow={'1px 1px 11px 1px #00FFE4'}
            px={8}
            py={4}
          >
            {text} {linkTitle && linkAddress ? renderLinks() : ''}
          </Text>
        </Box>

        {/* Modal for Lightbox functionality */}
        <Modal
          isOpen={showFullPhoto}
          onClose={() => setShowFullPhoto(false)}
          size="xl"
        >
          <ModalOverlay />
          <ModalContent bg="transparent" boxShadow="none">
            <ModalCloseButton color="white" />
            <ModalBody p={0}>
              <Image
                src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
                alt={text}
                width={800}
                height={600}
                layout="responsive"
              />
              <Text mt={2} color="white" textAlign="center">
                {text}
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Grid>
    </Box>
  );
};

export default Shout;
