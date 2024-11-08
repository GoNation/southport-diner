import { Box } from '@chakra-ui/react';

const PixiLine = ({ starColor = 'black' }) => {
  return (
    <Box
      className="pixcode  pixcode--separator  separator separator--line-flower separator_color--light"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        className="line  line--left"
        flex="1"
        height="1px"
        bg="white"
        position="relative"
        width={32}
      >
        <Box
          className="arrow arrow--left"
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          borderLeft="10px solid white"
          borderTop="5px solid transparent"
          borderBottom="5px solid transparent"
        ></Box>
      </Box>

      <Box className="star" mx="2" color={starColor}>
        &#10043;
      </Box>

      <Box
        className="line  line--right"
        flex="1"
        height="1px"
        bg="white"
        position="relative"
        width={32}
      >
        <Box
          className="arrow arrow--right"
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          borderRight="10px solid white"
          borderTop="5px solid transparent"
          borderBottom="5px solid transparent"
        ></Box>
      </Box>
    </Box>
  );
};

export default PixiLine;
