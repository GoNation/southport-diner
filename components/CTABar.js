import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import { useModal } from 'hooks/useModal';

export default function CTABar({ content, businessId }) {
  const { openModal } = useModal();
  const { label, url } = content;
  const [shout, setShout] = useState(null);
  useEffect(() => {
    const fetchShout = async () => {
      const shout = await fetchGoNationData({
        shout: true,
        businessId,
        useJSONP: true,
      });
      if (shout) {
        setShout(shout?.shoutData?.shout);
      }
    };
    fetchShout();
  }, []);

  const handleClick = () => {
    if (shout) {
      const modalContent = {
        title: shout.title,
        text: shout.text,
        imageUrl:
          shout.image && !shout.image.isDefault
            ? `https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${shout.image.image.cloudinaryId}`
            : null,
      };
      openModal(modalContent);
    }
  };

  return (
    <>
      <Box
        onClick={handleClick}
        bg="accent"
        textAlign={'center'}
        fontWeight={'bold'}
        py={2}
        px={1}
        color={'primary'}
        cursor={'pointer'}
        transition="all 0.3s ease" // Add a transition to make the hover animation smoother
        display={'flex'}
        justifyContent={'center'}
        textTransform={'uppercase'}
        fontSize={['xs']}
        w={'100%'}
        _hover={{
          bg: 'primary', // Set the background color to primary when hovered
          color: 'accent', // Set the text color to dark when hovered
        }}
      >
        {shout?.title} -{shout?.text}
      </Box>
    </>
  );
}
