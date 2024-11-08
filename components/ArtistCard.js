import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function ArtistCard({
  title,
  subtitle,
  images,
  index,
  linkAddress,
}) {
  const styleAsPremiumCard = title && subtitle;

  const renderLink = () => {
    if (linkAddress) {
      return (
        <Link href={linkAddress} target="_blank" rel="noopenner noreferrer">
          <Text
            color="white"
            textAlign="center"
            fontWeight="bold"
            fontFamily="accent"
            fontSize={['lg', 'xl']}
            display={'inline-flex'}
            alignItems={'center'}
          >
            <Box as="span" mr={2}>
              {title}
            </Box>{' '}
            <FaInstagram fill="#ffffff" />
          </Text>

          <Text>{subtitle}</Text>
        </Link>
      );
    } else {
      return (
        <>
          <Text
            color="white"
            textAlign="center"
            fontWeight="bold"
            fontFamily="accent"
            fontSize={['lg', 'xl']}
            display={'inline-flex'}
            alignItems={'center'}
          >
            <Box as="span" mr={2}>
              {title}
            </Box>{' '}
            <FaInstagram fill="#ffffff" />
          </Text>

          <Text>{subtitle}</Text>
        </>
      );
    }
  };

  return (
    <Box
      key={index}
      position="relative"
      height={['100%']}
      border={'8px solid'}
      borderColor={'primary'}
      rounded={'lg'}
      shadow={'lg'}
    >
      <Image src={images[0]} alt={title} objectFit="cover" layout="fill" />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        pt={2}
        textTransform={'uppercase'}
        bg={'primary'}
      >
        {styleAsPremiumCard ? (
          <Box
            bg={'white'}
            border={'2px solid'}
            borderColor={'secondary'}
            rounded={'lg'}
          >
            <Text color={'primary'} fontFamily={'accent'}>
              {title}
            </Text>
            <Text
              color={'secondary'}
              fontWeight={'bold'}
              fontFamily={'heading'}
            >
              {subtitle}
            </Text>
          </Box>
        ) : (
          renderLink()
        )}
      </Box>
    </Box>
  );
}
