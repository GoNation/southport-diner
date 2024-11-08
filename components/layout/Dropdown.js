import { Box } from '@chakra-ui/react';
import LinkItem from './LinkItem';

import slugifyLower from 'helpers/printing/slugifyLower';

const Dropdown = ({ children, isDropdownVisible }) => (
  <Box
    position="absolute"
    left={-20}
    top={14}
    mt={0}
    bg="primary"
    shadow="md"
    py={1}
    display={{ base: 'none', md: 'flex' }}
    flexDirection="column"
    alignItems="flex-start"
    width={64}
    opacity={isDropdownVisible ? 1 : 0}
    transition="opacity 0.3s ease-in-out"
  >
    {children.map(child => (
      <Box mb={3}>
        <LinkItem
          key={slugifyLower(child.name)}
          route={child}
          px={4}
          py={2}
          hoverBg="secondary"
          color="white"
          hoverColor="white"
          fontFamily="heading"
          textTransform="uppercase"
          _hover={{
            color: 'light',
            textDecoration: 'underline',
          }}
        />
      </Box>
    ))}
  </Box>
);

export default Dropdown;
