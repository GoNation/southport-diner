import React from 'react';
import { Box, Text, useStyleConfig } from '@chakra-ui/react';

const Price = ({ variants, withDollar, styleVariant }) => {
  const styles = useStyleConfig('Price', { variant: styleVariant });
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Box display="flex" alignItems="center">
      {variants[0]?.labelTitle && (
        <Text {...styles.label}>{variants[0].labelTitle}</Text>
      )}
      {variants[0]?.label && <Text {...styles.label}>{variants[0].label}</Text>}
      <Text {...styles.price}>
        {withDollar && variants[0]?.price ? '$' : ''}
        {variants[0]?.price}
      </Text>
    </Box>
  );
};

export default Price;
