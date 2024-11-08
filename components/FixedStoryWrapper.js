import React from 'react';
import { Box } from '@chakra-ui/react';

export default function FixedStoryWrapper({
  src = 'https://images.unsplash.com/photo-1546238232-20216dec9f72?q=80&w=3268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  children,
}) {
  return (
    <Box
      backgroundAttachment={['scroll', 'scroll', 'fixed']}
      backgroundImage={src}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      backgroundRepeat={'no-repeat'}
      backgroundColor={['background', 'unset']}
    >
      {children}
    </Box>
  );
}
