import { Box, Button, Link } from '@chakra-ui/react';

const YouTubeEmbedContent = ({ story, callToActionVariant, config }) => (
  <Box {...config.container}>
    <Link href={story.link} isExternal {...config.linkStyle}>
      {story.content}
    </Link>
    <Button as="a" variant={callToActionVariant} {...config.buttonStyle}>
      Learn More
    </Button>
  </Box>
);

export default YouTubeEmbedContent;
