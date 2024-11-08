import React from 'react';
import shortid from 'shortid';
import splitSectionChildren from '../../helpers/menu/splitSectionChildren';
import MenuCell from './menuCell';
import { Grid, GridItem } from '@chakra-ui/react';

const Cells = ({ menuData, onCellClick, mode }) => {
  const { childSections } = splitSectionChildren(menuData);

  const isLastItemFullSpan = (index, total) => {
    // Check if it's the last item and odd number of items
    return index === total - 1 && total % 2 !== 0;
  };

  const renderChildSections = () => {
    return childSections.map(({ section, inventory }, idx) => {
      if (section.name.trim() === 'Testimonials') {
        return null;
      }

      return (
        <GridItem
          key={shortid.generate()}
          colSpan={
            isLastItemFullSpan(idx, childSections.length) ? { sm: 1, md: 3 } : 1
          }
        >
          <MenuCell
            section={section}
            inventory={inventory}
            onCellClick={onCellClick}
            numSections={childSections.length}
            mode={mode}
          />
        </GridItem>
      );
    });
  };

  return (
    <div>
      <Grid
        className="cellContainer"
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)', // 2 columns from the "sm" breakpoint
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)', // 3 columns from the "lg" breakpoint
        }}
        gap={4}
      >
        {renderChildSections()}
      </Grid>
    </div>
  );
};

export default React.memo(Cells);
