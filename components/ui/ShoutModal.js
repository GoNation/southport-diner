import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
  Button,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useModal } from 'hooks/useModal';
import useShout from 'hooks/useShout';
import { handleGlobalLink } from 'helpers';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const ShoutModal = () => {
  const { isOpen, modalContent, closeModal } = useModal();
  const { shout, isLoading } = useShout();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedDate = localStorage.getItem('shoutSeenAt');
    const currentCreatedAt = shout?.shout?.createdAt;
    if (currentCreatedAt) {
      const isNewShout =
        !storedDate || dayjs(currentCreatedAt).isAfter(dayjs(storedDate));
      setShowModal(isNewShout && isOpen);
    }
  }, [shout, isOpen]);

  const closeAndRemember = () => {
    closeModal();
    if (shout?.shout?.createdAt) {
      localStorage.setItem('shoutSeenAt', shout.shout.createdAt);
    }
  };

  const formattedDate = shout?.shout?.createdAt
    ? dayjs(shout.shout.createdAt).format('MMMM D, YYYY h:mm A')
    : '';

  if (!showModal) {
    return null;
  }

  return (
    <Box position={'fixed'} zIndex={99}>
      <Modal isOpen={showModal} onClose={closeAndRemember}>
        <ModalOverlay />
        <ModalContent bg={'light'} color={'dark'} p={4}>
          {shout && !isLoading && (
            <>
              <ModalHeader
                pb={0}
                fontWeight={'bold'}
                fontFamily={'heading'}
                fontSize={['lg', '', '', '3xl']}
              >
                {shout?.shout?.title || 'Recent Shout'}
                <ModalCloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={closeAndRemember}
                />
              </ModalHeader>
              <ModalBody fontSize={'lg'}>
                {shout?.shout?.text}
                <Text fontSize={'sm'} fontStyle={'italic'} mt={1}>
                  Shouted On {formattedDate}
                </Text>
              </ModalBody>
              <ModalFooter>
                {shout?.shout?.ctas &&
                  Object.entries(shout.shout.ctas).map(([key, value]) => {
                    if (key !== 'cta1' && key !== 'cta2') {
                      return (
                        <Link key={value} {...handleGlobalLink(value)}>
                          <Button variant={'primary'} key={value}>
                            {key}
                          </Button>
                        </Link>
                      );
                    }
                    return null;
                  })}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ShoutModal;
