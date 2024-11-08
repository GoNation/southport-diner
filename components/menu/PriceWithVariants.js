import React from 'react';
import { Box, Text, useStyleConfig } from '@chakra-ui/react';

const Price = ({ variants, withDollar = true }) => {
  const styles = useStyleConfig('PriceWithVariants');

  const renderPrices = () => {
    return variants.map((variant, index) => (
      <Box key={index}>
        {variant.labelTitle && (
          <Text {...styles.labelTitle}>{variant.labelTitle}</Text>
        )}
        <Box display="flex" alignItems="center">
          <Text {...styles.label}>{variant.label}</Text>
          {variant.label.length && variant.price.length ? (
            <Box as="span" px={1}>
              -
            </Box>
          ) : (
            ''
          )}
          <Text {...styles.price}>
            {withDollar ? '$' : ''}
            {variant.price}
          </Text>
        </Box>
      </Box>
    ));
  };

  return <Box>{renderPrices()}</Box>;
};

export default Price;
