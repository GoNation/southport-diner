import React from 'react';
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
} from '@chakra-ui/react';
import Section from './Section';
import Image from 'next/image';
import buildAvatar from 'helpers/general/buildAvatar';

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

        {menuData.inventory[0].item && (
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

export default AllIn;
