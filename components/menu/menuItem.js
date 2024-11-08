import React, { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Text,
  Grid,
  AspectRatio,
  useDisclosure,
  Tooltip,
  useStyleConfig,
} from '@chakra-ui/react';
import Price from './Price';
import PriceWithVariants from './PriceWithVariants';
import makeSentencesCapital from 'helpers/general/makeSentanceCapital';
import Lightbox from './Lightbox';
import { BsCamera } from 'react-icons/bs';
import { useTheme } from '@emotion/react';

const MenuItem = ({ item, withDollar, sectionImagesCount, variant = null }) => {
  const styles = useStyleConfig('MenuItem', { variant });
  const [lightboxSrc, setLightboxSrc] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();

  if (!item) return null;

  const { primaryColor } = theme.colors;

  const removeImageCopy = img =>
    img.includes('copy') ? img.substring(0, img.length - 5) : img;

  const imageCopy = removeImageCopy(item.imageUrl);
  const imageIsDefault = item.imageUrl.includes('default');
  const imageExists =
    !imageCopy.includes('default') && imageCopy !== '' && !imageIsDefault;

  const handleImageClick = () => {
    setLightboxSrc(imageCopy);
    onOpen();
  };

  const showCamera = false;

  return (
    <Box {...styles.container}>
      <Lightbox
        isOpen={isOpen}
        src={lightboxSrc}
        caption={item.name}
        onClose={onClose}
      />

      <Grid templateColumns={sectionImagesCount === 0 ? ['1fr'] : ['1fr']}>
        {/* todo will need to bring this back / handle props for conditional rendering inline images */}
        {/* {sectionImagesCount > 0 && (
          <Box {...styles.imageContainer}>
            <AspectRatio {...styles.imageAspectRatio}>
              <Image src={imageCopy} alt={item.name} {...styles.image} />
            </AspectRatio>
            <Box {...styles.imageText}>{item.name}</Box>
          </Box>
        )} */}

        <Box>
          <Grid
            templateColumns="1fr"
            gap={4}
            onClick={() => (imageExists ? handleImageClick() : null)}
            cursor={imageExists ? 'pointer' : 'default'}
          >
            <Tooltip
              label="Click to view image"
              fontSize="md"
              isDisabled={!imageExists}
            >
              <Box>
                {imageExists ? (
                  <Box my={2}>
                    <Image
                      src={imageCopy}
                      alt={item.name}
                      {...styles.image}
                      width={400}
                      height={400}
                    />
                  </Box>
                ) : (
                  ''
                )}

                <Text {...styles.heading}>
                  {item.name}{' '}
                  {imageExists && showCamera && (
                    <Box as="span" ml={2}>
                      <BsCamera color={primaryColor} size={18} />
                    </Box>
                  )}
                </Text>
              </Box>
            </Tooltip>
          </Grid>
          {item.desc && (
            <Text {...styles.description}>
              {makeSentencesCapital(item.desc)}
            </Text>
          )}
        </Box>

        <Box>
          {item.variants?.length === 1 && (
            <Price withDollar={true} variants={item.variants} />
          )}
          {item.variants?.length > 1 || item.variants?.[0]?.label !== '' ? (
            <PriceWithVariants
              withDollar={withDollar}
              variants={item.variants}
              gridRow="4"
            />
          ) : null}
        </Box>
      </Grid>
    </Box>
  );
};

export default MenuItem;
