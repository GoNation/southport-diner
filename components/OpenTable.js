import React, { useEffect, useRef } from 'react';
import { Flex, Box } from '@chakra-ui/react';

export default function OpenTable({ restaurantId }) {
  const openTableRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `//www.opentable.com/widget/reservation/loader?rid=${restaurantId}&type=standard&theme=tall&color=1&dark=false&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website&cfe=true`;
    openTableRef.current.appendChild(script);
  }, [restaurantId]); // Re-run the effect only if the restaurantId changes

  return (
    <Box bg={'light'} p={8}>
      <Flex
        ref={openTableRef}
        justifyContent={'center'}
        px={4}
        py={24}
        maxWidth={'xl'}
        mx={'auto'}
      ></Flex>
      {/* This div will contain the OpenTable widget */}
    </Box>
  );
}
