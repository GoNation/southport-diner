// SimpleGrid.js
import React, { useState } from 'react';
import { Grid, Box } from '@chakra-ui/react';
import CleanCard from './CleanCard';
import StoryModal from 'components/StoryModal';
import buildAvatar from 'helpers/general/buildAvatar';

const SimpleGrid = ({ stories = [], business }) => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = story => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box p={8} py={[8]} px={[0, 4, 12]} bg="light">
        <Box
          p={[2, 4, 8]}
          maxW={{ base: '100%', md: '100%', lg: 1200 }}
          m="auto"
        >
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={{ base: 4, md: 8 }}
            display={{ base: 'block', md: 'grid' }}
            p={0}
          >
            {stories?.length &&
              stories.map((story, idx) => (
                <Box
                  gridColumn={['span 12', 'span 6', 'span 6', 'span 4']}
                  mb={[8, 0, 0]}
                  key={idx}
                >
                  <CleanCard
                    story={story}
                    index={idx}
                    onClick={() => handleCardClick(story)}
                    avatar={buildAvatar(business)}
                  />
                </Box>
              ))}
          </Grid>
        </Box>
      </Box>
      {isModalOpen && (
        <StoryModal
          story={selectedStory}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default SimpleGrid;
