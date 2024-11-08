import { Button, Link } from '@chakra-ui/react';

const HeroContentLink = ({ linkTitle, linkAddress }) => (
  <Link
    href={linkAddress}
    style={{ padding: '0 .75rem', boxSizing: 'border-box' }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant={'primary'}
      bg={'primary'}
      border={'2px solid'}
      borderColor={'primary'}
      fontWeight={'bold'}
      _hover={{
        bg: 'white',
        color: 'primary',
        borderColor: 'primary',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      {linkTitle}
    </Button>
  </Link>
);

export default HeroContentLink;
