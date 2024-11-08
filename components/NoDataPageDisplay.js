import React from 'react';
import Link from 'next/link';
import { Heading, Box, Flex, Text, Button } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import ParticlesWrapper from './ParticlesWrapper';

export default function NotFoundPage() {
  const maxW = {
    maxW: ['lg', 'xl', '2xl', '3xl'],
    mx: 'auto',
  };

  const BoxWrapper = ({ children }) => (
    <Box
      border="1px solid"
      borderColor="gray.200"
      bg="gray.50"
      p="5"
      borderRadius="md"
      mb="5"
      fontSize={['sm', 'md', 'lg', 'xl']}
      {...maxW}
    >
      {children}
    </Box>
  );

  return (
    <>
      <ParticlesWrapper
        id="particles"
        options={{
          background: {
            color: {
              value: '#111',
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Box minH={'100vh'} py={[10, 20, 40]} px={2} pos={'relative'}>
        <Box {...maxW}>
          <Heading as="h1" size="2xl" textAlign="center" mt="10">
            404 - Page Not Found 😢
          </Heading>
          <Heading as="h2" size="lg" textAlign="center" mt="10">
            Oops! Looks like this page doesn't exist. 🕵️‍♂️
          </Heading>
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt="10"
        >
          <BoxWrapper>
            <Text textAlign="center">
              Sorry, the page you are looking for could not be found. It might
              have been removed, renamed, or did not exist in the first place.
            </Text>
          </BoxWrapper>
          <BoxWrapper>
            <Flex justifyContent="center" alignItems="center" mt="4">
              <Link as="a" href="/" leftIcon={<FaHome />} size="lg">
                Back to Homepage
              </Link>
            </Flex>
          </BoxWrapper>
        </Flex>
      </Box>
    </>
  );
}
