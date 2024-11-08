import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
} from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';
import { useModal } from 'hooks/useModal';
import Link from 'next/link';
import { useEffect } from 'react';
import Body from './Body';

const ConfirmModal = ({ config, story }) => {
  const { isOpen, modalContent, openModal, closeModal } = useModal();

  useEffect(() => {
    const { alwaysDisplay, expirationDate, modalKey, hideForGoodOnClose } =
      config;

    // Check if the modal should be displayed based on the config props
    const shouldDisplayModal =
      alwaysDisplay ||
      (modalKey && !localStorage.getItem(modalKey)) ||
      (expirationDate && new Date(expirationDate) > new Date());
    const extractedStory = story ? extractStory(story) : null;

    if (!extractedStory) return;

    const { links } = extractedStory;
    if (shouldDisplayModal) {
      const content = (
        <>
          <ModalHeader fontFamily={'heading'}>
            {extractedStory.title}
          </ModalHeader>
          <ModalBody>
            <Body body={extractedStory.body} color="white" lineHeight={1.5} />
          </ModalBody>
          <ModalFooter>
            {links &&
              Object.entries(links).map(([label, link], index) => {
                const isExternalLink = link.startsWith('https');
                const href = isExternalLink ? link : `/${link}`;
                const target = isExternalLink ? '_blank' : null;
                return (
                  <Button
                    key={label}
                    as={Link}
                    href={href}
                    target={target}
                    variant={label === 'Purchase Now' ? 'outline' : null}
                    mr={label === 'Purchase Now' ? 0 : 4}
                  >
                    {label}
                  </Button>
                );
              })}
            <Button
              onClick={() => {
                if (hideForGoodOnClose && modalKey) {
                  localStorage.setItem(modalKey, 'true');
                }
                closeModal();
              }}
              variant={links ? null : 'outline'}
              ml={links ? 4 : 0}
            >
              Close
            </Button>
          </ModalFooter>
        </>
      );
      openModal(content);
    }
  }, []);

  return (
    <Box position={'fixed'} zIndex={99}>
      <Box>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>{modalContent}</ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default ConfirmModal;
