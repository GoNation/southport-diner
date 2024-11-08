import React, { useState } from 'react';
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const CustomAccordion = ({ stories }) => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  if (!stories) return null;

  return (
    <>
      {/* Only render this Tabs component for large screens */}
      {isLargeScreen && (
        <Tabs
          isFitted
          variant="enclosed"
          align="center"
          w="full"
          mx={'auto'}
          px={[4, 8, 16, 32]}
          py={[4, 8, 24, 32]}
          maxW={'8xl'}
        >
          <TabList>
            {stories.map((item, index) => (
              <Tab
                key={index}
                borderRadius={'none'}
                _selected={{
                  color: 'secondary',
                  border: 'none',
                  borderTop: '2px solid',
                  borderColor: 'primary',
                  bg: 'background',
                }}
                bg="light"
              >
                <Text
                  fontFamily="heading"
                  fontSize={['lg', '']}
                  color={'secondary'}
                  fontWeight={'bold'}
                >
                  {item.title}
                </Text>
              </Tab>
            ))}
          </TabList>
          <TabPanels
            mb="1em"
            border={'2px solid'}
            borderTop={'none'}
            borderColor={'light'}
          >
            {stories.map((item, index) => (
              <TabPanel key={index} p={4}>
                <VStack align="start">
                  <Box
                    fontFamily="body"
                    fontSize={['sm', '', 'md', 'lg']}
                    lineHeight={[1.5, 1.75, 2]}
                    textAlign={'left'}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </VStack>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}

      {/* Mobile View - Vertical Layout */}
      {!isLargeScreen && (
        <Accordion allowToggle py={4}>
          {stories.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionButton _expanded={{ bg: 'primary', color: 'white' }}>
                <Box flex="1" textAlign="left">
                  <Text fontFamily="heading">{item.title}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} fontFamily="body">
                <Box dangerouslySetInnerHTML={{ __html: item.body }} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </>
  );
};

export default CustomAccordion;
