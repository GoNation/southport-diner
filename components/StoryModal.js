import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Text,
  Flex,
  Button,
  Image,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import extractStory from 'helpers/extractStory';
import Body from './ui/Body';
import { AiOutlineClose } from 'react-icons/ai';

const StoryModal = ({ story, isOpen, onClose }) => {
  const { images, linkAddress, linkTitle } = extractStory(story);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent bg="primary" overflow="hidden">
        <AiOutlineClose
          size="1.5em"
          color="white"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
          onClick={onClose}
        />
        <ModalBody p={0}>
          <Flex align="stretch">
            <Box flex={1} position="relative">
              {images.length > 1 ? (
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showIndicators={true}
                  showThumbs={false}
                  infiniteLoop={true}
                >
                  {images.map((src, index) => (
                    <Box key={index}>
                      <Image src={src} alt={`story-image-${index}`} />
                    </Box>
                  ))}
                </Carousel>
              ) : (
                <Image
                  src={images[0] || '/card_default.png'}
                  alt="story-image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    maxHeight: ['unset', '', '500px'],
                    objectFit: 'cover',
                  }}
                />
              )}
            </Box>
            <Box flex={1} p={5} color="white">
              <Text fontSize="2xl" mb={3} color={'white'}>
                {story.title}
              </Text>
              <Text fontSize="xl" mb={3}>
                {story.subtitle}
              </Text>
              <Body body={story.body} color="white" />
              <Box>
                {linkAddress && linkTitle ? (
                  <Box
                    as="a"
                    href={linkAddress}
                    target="_blank"
                    rel="noopener"
                    mt={8}
                    display={'block'}
                  >
                    <Button bg="white" color="primary">
                      {linkTitle}
                    </Button>
                  </Box>
                ) : (
                  ''
                )}
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StoryModal;
