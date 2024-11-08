import React, { useState } from 'react';
import MenuItem from './menuItem';
import shortid from 'shortid';
import slugify from 'slugify';
import {
  Box,
  Text,
  Button,
  Image as ChakraImage,
  Heading,
  useMediaQuery,
  Flex,
  Skeleton,
  useStyleConfig,
  Select,
} from '@chakra-ui/react';
import Section from './Section';
import Image from 'next/image';
import buildAvatar from 'helpers/general/buildAvatar';
import {
  ImageVisibilityProvider,
  useImageVisibility,
} from 'components/ImageVisibilityContext';

const AllIn = ({
  menuData,
  setModalActive,
  onBackClick,
  shouldHideFirstSection = true,
  config = {},
  business,
  isLoading,
}) => {
  const { variant } = config;
  const styles = useStyleConfig('AllIn', { variant });
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { showImages, setShowImages } = useImageVisibility();

  const splitSectionChildren = section => {
    return section.inventory.reduce(
      (acc, curr) => {
        if ('item' in curr) acc.childItems.push(curr);
        else if ('section' in curr) acc.childSections.push(curr);
        return acc;
      },
      { childItems: [], childSections: [] }
    );
  };

  const countSectionImages = childItems => {
    let count = 0;
    childItems.forEach(({ item }) => {
      if (!item.imageUrl.includes('default')) count++;
    });
    return count;
  };

  const handleImageToggle = e => {
    setShowImages(e.target.value === 'true');
  };

  return (
    <Skeleton isLoaded={!isLoading} width="100%">
      <Box {...styles.container}>
        {/* Optional Flex and Image, uncomment if needed */}
        {/* <Flex {...styles.flexAvatar}>
          <Image
            src={buildAvatar(business)}
            alt={business.name}
            width={300}
            height={300}
          />
        </Flex> */}
        <Box {...styles.imageBox}>
          {/* Optional background image */}
          {/* <Image
            src="/1.png"
            width={isLargerThan768 ? 500 : 300}
            height={isLargerThan768 ? 500 : 300}
            style={{
              opacity: 0.1,
              transform: 'rotate(12deg)',
            }}
          /> */}
        </Box>
        {onBackClick && (
          <Button onClick={() => onBackClick()} {...styles.backButton}>
            ← Back
          </Button>
        )}

        <Box maxW={210} mb={4}>
          <Select onChange={handleImageToggle} value={showImages}>
            <option value={true}>Show Images</option>
            <option value={false}>Hide Images</option>
          </Select>
        </Box>

        {menuData?.section?.desc && (
          <Section
            section={menuData.section}
            parsedSection={[]}
            countSectionImages={countSectionImages}
          />
        )}
        {menuData.inventory &&
          menuData.inventory.map(section => {
            if (!section?.section) return null;
            const parsedSection = splitSectionChildren(section);
            const isNested = parsedSection.childSections.length > 0;
            return (
              <Section
                section={section.section}
                parsedSection={parsedSection}
                countSectionImages={countSectionImages}
                isNested={isNested}
              />
            );
          })}

        {menuData?.inventory[0]?.item && (
          <Box {...styles.itemBox}>
            {menuData.inventory.map(({ item }) => (
              <MenuItem
                key={shortid.generate()}
                type={'default'}
                item={item}
                isSingleItem={menuData.inventory.length === 1}
                menuItemIndex={0}
                sectionImagesCount={1}
              />
            ))}
          </Box>
        )}
      </Box>
    </Skeleton>
  );
};

const AllInWithProvider = props => (
  <ImageVisibilityProvider>
    <AllIn {...props} />
  </ImageVisibilityProvider>
);

export default AllInWithProvider;
