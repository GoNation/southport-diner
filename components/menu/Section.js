import React from 'react';
import MenuItem from './menuItem';
import shortid from 'shortid';
import slugify from 'slugify';
import {
  Box,
  Text,
  Image as ChakraImage,
  Heading,
  useStyleConfig,
} from '@chakra-ui/react';
import splitSectionChildren from 'helpers/menu/splitSectionChildren';

const Section = ({
  section,
  parsedSection,
  countSectionImages,
  config,
  isNested,
  styleVariant,
}) => {
  const styles = useStyleConfig('Section', { variant: styleVariant });
  const sectionClass = section && slugify(section.name, { lower: true });
  const isHidden = section && [].includes(section.name.toLowerCase());

  return (
    <Box
      key={shortid.generate()}
      className={sectionClass}
      {...styles.container}
      display={isHidden ? 'none' : 'block'}
    >
      <Box>
        {section?.name && <Heading {...styles.heading}>{section.name}</Heading>}
        {section?.desc && <Text {...styles.description}>{section.desc}</Text>}
        <Box display="flex" flexWrap="wrap">
          {parsedSection?.childItems &&
            parsedSection.childItems.map(({ item }, index) => (
              <MenuItem
                key={shortid.generate()}
                type={'default'}
                item={item}
                isSingleItem={parsedSection.childItems.length === 1}
                menuItemIndex={index}
                sectionImagesCount={countSectionImages(
                  parsedSection.childItems
                )}
              />
            ))}
        </Box>
      </Box>
      {/* child sections */}
      {parsedSection?.childSections &&
        parsedSection.childSections.map(childSection => {
          return (
            <Section
              section={childSection.section}
              parsedSection={splitSectionChildren(childSection)}
              countSectionImages={countSectionImages}
              config={config}
            />
          );
        })}
    </Box>
  );
};

export default Section;
