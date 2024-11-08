import {
  Box,
  Button,
  Text,
  Link,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

export default function BrandGuide() {
  return (
    <>
      <Box mt={24}>
        {/* Welcome box with light background */}
        <Box bg="light" p={4}>
          <Heading fontFamily="heading" color="primary" fontSize="xl">
            Welcome to Biz Name
          </Heading>
          <Text fontFamily="body" color="secondary">
            Subtitle or body font
          </Text>
          <Link fontFamily="links" color="accent" href="/schedule">
            See Event Schedule
          </Link>
        </Box>
        {/* Call-to-action button with primary color */}
        <Button
          bg="primary"
          color="background"
          _hover={{ bg: 'accent', color: 'white' }}
          mt={4}
        >
          Get Your Tickets
        </Button>
        {/* Secondary button */}
        <Button
          bg="light"
          color="secondary"
          _hover={{ bg: 'coolAccent', color: 'white' }}
          mt={4}
        >
          View CTA
        </Button>
      </Box>

      {/* Section with primary background */}
      <Box bg="primary" p={4}>
        <Heading color="light" fontFamily="heading">
          Highlighted Heading
        </Heading>
        <Text color="light" fontFamily="body">
          Engage with the vibrant tattoo community.
        </Text>
      </Box>

      {/* Section with secondary background */}
      <Box bg="secondary" p={4}>
        <Heading color="light" fontFamily="heading">
          Artistry in Ink
        </Heading>
        <Text color="light" fontFamily="body">
          Discover unique styles and techniques.
        </Text>
      </Box>

      {/* Section with accent background */}
      <Box bg="accent" p={4}>
        <Heading color="light" fontFamily="heading">
          Upcoming Highlights
        </Heading>
        <Text color="light" fontFamily="body">
          Don't miss our featured....
        </Text>
      </Box>

      {/* Informational box with cool accent background */}
      <Box bg="coolAccent" p={4} color="secondary">
        <Text fontFamily="body">Join us for a....</Text>
      </Box>

      {/* Example of a dark mode toggle effect */}
      <Box bg={useColorModeValue('light', 'dark')} p={4} boxShadow="md">
        <Text fontFamily="body" color={useColorModeValue('secondary', 'light')}>
          Switch between light and dark modes for a different experience.
        </Text>
      </Box>
    </>
  );
}
