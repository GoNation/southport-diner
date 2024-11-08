import React from 'react';
import { Box, Heading, Text, VStack, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function Sponsors() {
  const stories = [
    {
      name: 'Sysco',
      title: 'Sysco',
      img: 'sysco.png',
      tags: ['sponsor', 'Title Sponsor'],
      subtitle: '',
      body: '',
    },

    {
      name: 'GoNation',
      title: 'GoNation',
      onWhite: false,
      img: 'gonation.png',
      tags: ['sponsor', 'Presenting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Foxwoods',
      title: 'Foxwoods',
      img: 'foxwoods.webp',
      tags: ['sponsor', 'Presenting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Powerstation Events',
      title: 'Powerstation Events',
      img: 'powerstation.png',
      tags: ['sponsor', 'Presenting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Performance Foodservice',
      title: 'Performance Foodservice',
      img: 'performance-foodservice.png',
      onWhite: true,
      tags: ['sponsor', 'Dinner Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Connecticut Distributors, Inc.',
      title: 'Connecticut Distributors, Inc.',
      img: 'ct-distributors.png',
      onWhite: true,
      tags: ['sponsor', 'Reception Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Brescome Barton',
      title: 'Brescome Barton',
      img: 'brescome.png',
      tags: ['sponsor', 'After-Party Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Pernod Ricard',
      title: 'Pernod Ricard',
      img: 'pernard-ricard.png',
      tags: ['sponsor', 'Registration Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'The Hartford',
      title: 'The Hartford',
      img: 'the-hartford.jpeg',
      tags: ['sponsor', 'Photo Booth Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Doordash',
      title: 'Doordash',
      img: 'doordash.png',
      tags: ['sponsor', 'Reception Lounge Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'SpotOn',
      title: 'SpotOn',
      img: 'spoton.jpg',
      tags: ['sponsor', 'Reception Lounge Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'US Foods',
      title: 'US Foods',
      img: 'us-foods.png',
      tags: ['sponsor', 'Reception Lounge Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Pullman & Comley',
      title: 'Pullman & Comley',
      img: 'pullman.svg',
      tags: ['sponsor', 'Reception Lounge Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Imperial Dade',
      title: 'Imperial Dade',
      img: 'imperial-dade.jpeg',
      tags: ['sponsor', 'Reception Lounge Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Datapay',
      title: 'Datapay',
      img: 'datapay.webp',
      tags: ['sponsor', 'Voting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'IHeartMedia',
      title: 'IHeartMedia',
      img: 'ihc.png',
      tags: ['sponsor', 'Media Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'The Beverage Journal',
      title: 'The Beverage Journal',
      img: 'beverage-journal.png',
      tags: ['sponsor', 'Media Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Ecolab',
      title: 'Ecolab',
      img: 'ecolab.png',
      tags: ['sponsor', 'Allied Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: "The Chef's Warehouse",
      title: "The Chef's Warehouse",
      img: 'chefs-warehouse.png',
      tags: ['sponsor', 'Allied Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Opici Family Distributing',
      title: 'Opici Family Distributing',
      img: 'opici.jpeg',
      tags: ['sponsor', 'Allied Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: "Tito's Vodka",
      title: "Tito's Vodka",
      img: 'titos.png',
      tags: ['sponsor', 'Allied Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Garden Catering Group',
      title: 'Garden Catering Group',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Liberty Bank',
      title: 'Liberty Bank',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'CohnReznick LLP',
      title: 'CohnReznick LLP',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: "J. Timothy's Taverne",
      title: "J. Timothy's Taverne",
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Mill Restaurant Group',
      title: 'Mill Restaurant Group',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Coracora Restaurant',
      title: 'Coracora Restaurant',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Market Hospitality Group',
      title: 'Market Hospitality Group',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'DBP/Caputo | Craveable Hospitality Group',
      title: 'DBP/Caputo | Craveable Hospitality Group',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Slocum & Sons Distributors',
      title: 'Slocum & Sons Distributors',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: '110 Grill Restaurant Group',
      title: '110 Grill Restaurant Group',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Eder Brothers Inc.',
      title: 'Eder Brothers Inc.',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Fire by Forge',
      title: 'Fire by Forge',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Falvey Linen & Uniform Supply, Inc.',
      title: 'Falvey Linen & Uniform Supply, Inc.',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'The Amber Room Colonnade',
      title: 'The Amber Room Colonnade',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'The Charles',
      title: 'The Charles',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'ClarkHirth',
      title: 'ClarkHirth',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Gordon Food Service',
      title: 'Gordon Food Service',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Brown-Forman',
      title: 'Brown-Forman',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: '85th Day Food Community',
      title: '85th Day Food Community',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Molson Coors Beverage Co.',
      title: 'Molson Coors Beverage Co.',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Dockside Brewery',
      title: 'Dockside Brewery',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Allan S. Goodman, Inc.',
      title: 'Allan S. Goodman, Inc.',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Hartford Distributors, Inc.',
      title: 'Hartford Distributors, Inc.',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Fresh Sald at Saybrook Point Resort & Marina',
      title: 'Fresh Sald at Saybrook Point Resort & Marina',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Restaurant City Warehouse',
      title: 'Restaurant City Warehouse',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Flanders Fish Market & Restaurant',
      title: 'Flanders Fish Market & Restaurant',
      tags: ['sponsor', 'Diamond Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Marcia Selden Catering',
      title: 'Marcia Selden Catering',
      tags: ['sponsor', 'Supporting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'For The Food',
      title: 'For The Food',
      tags: ['sponsor', 'Supporting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Tanda Hospitality',
      title: 'Tanda Hospitality',
      tags: ['sponsor', 'Supporting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'MyCTSavings',
      title: 'MyCTSavings',
      tags: ['sponsor', 'Supporting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: "Toad's Place",
      title: "Toad's Place",
      tags: ['sponsor', 'Supporting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Sprague Energy',
      title: 'Sprague Energy',
      tags: ['sponsor', 'Supporting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Napoli Foods, Inc',
      title: 'Napoli Foods, Inc',
      tags: ['sponsor', 'Supporting Sponsor'],
      subtitle: '',
      body: '',
    },
    {
      name: 'Brinker International',
      title: 'Brinker International',
      tags: ['sponsor', 'Supporting Sponsor'],
      subtitle: '',
      body: '',
    },
  ];

  // Function to group stories by the second tag (sponsorship level)
  const groupBySponsorshipLevel = stories => {
    const groups = {};
    stories.forEach(story => {
      const level = story.tags[1]; // Get the second tag
      if (!groups[level]) {
        groups[level] = [];
      }
      groups[level].push(story);
    });
    return groups;
  };

  const groupedStories = groupBySponsorshipLevel(stories);

  return (
    <Container maxW={1200} mx={'auto'} py={[32, 40]}>
      {Object.entries(groupedStories).map(([level, sponsors]) => (
        <Box key={level} mb={10}>
          <Heading mb={4} size={['lg', 'xl', '2xl']}>
            {level}
          </Heading>
          <Flex
            spacing={3}
            align="start"
            flexWrap={'wrap'}
            alignItems={'center'}
          >
            {sponsors.map(sponsor => (
              <Box pr={[4, 12]} py={[4, 8]} width={['100%', '50%', '33%']}>
                {(sponsor.img || sponsor.imgUrl) && (
                  <Box
                    bg={sponsor.onWhite ? 'white' : ''}
                    p={sponsor.onWhite && 4}
                  >
                    <Image
                      style={{
                        maxHeight: 200,
                        objectFit: 'contain',
                      }}
                      width={400}
                      height={300}
                      src={
                        sponsor.imgUrl
                          ? sponsor.imgUrl
                          : `/sponsors/${sponsor.img}`
                      }
                      alt={sponsor.name}
                    />
                  </Box>
                )}
                {sponsor.img || sponsor.imgUrl ? (
                  ''
                ) : (
                  <Text key={sponsor.name} color={'white'}>
                    {sponsor.name}
                  </Text>
                )}
              </Box>
            ))}
          </Flex>
        </Box>
      ))}
    </Container>
  );
}
