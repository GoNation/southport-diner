import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import Countdown from './events/Countdown';

export default function CountdownBanner({ event }) {
  const { name, starts } = event;
  return (
    <Box>
      <Grid templateColumns={['1fr', '3fr 6fr']}>
        <Box
          py={[4, 4, 6]}
          px={[4, 4, 8]}
          bg="primary"
          color={'white'}
          textTransform={'uppercase'}
        >
          <Text fontSize={['lg', 'xl', 'xl']} fontFamily={'heading'}>
            Days Until:
          </Text>
          <Text fontSize={['lg', '2xl', '3xl', '5xl']} fontFamily={'accent'}>
            {name}
          </Text>
        </Box>
        <Box
          p={[4, 8]}
          bg="secondary"
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Countdown
            targetDate={starts}
            onCompleteMessage={'Event has started!'}
          />
        </Box>
      </Grid>
    </Box>
  );
}
