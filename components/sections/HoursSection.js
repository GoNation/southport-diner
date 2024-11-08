import { Box, Text, Heading } from '@chakra-ui/react';
import HoursDisplay from 'components/hours/hoursDisplay';

const HoursSection = props => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    p={4}
    textAlign="left"
    bg="secondary"
  >
    <Box
      w="full"
      h="full"
      p={8}
      display="flex"
      flexDirection="column"
      fontSize={{ base: 'lg', lg: 'xl' }}
      color="dark"
      px={[8, 8, 8]}
    >
      <Heading
        as="h4"
        fontSize={{ base: '3xl', md: '4xl', xl: '5xl' }}
        textTransform="capitalize"
        color={'white'}
        mb={4}
        textAlign={'center'}
      >
        Hours
      </Heading>
      <HoursDisplay {...props.aboutData} />
    </Box>
  </Box>
);

export default HoursSection;
