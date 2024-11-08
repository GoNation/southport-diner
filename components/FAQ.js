import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Spinner,
  Center,
  Text,
} from '@chakra-ui/react';
import useMenu from 'hooks/useMenu';

// Example questions and answers
const faqData = [
  // ... (faqData remains the same)
];

export default function FAQ() {
  const { menu, isLoading } = useMenu(null, 2);

  if (isLoading) {
    return (
      <Center p={5}>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!menu || !menu[0]) {
    return (
      <Center p={5}>
        <Text fontSize="lg" color="primary" fontFamily="body">
          Unable to get data. Please try again later.
        </Text>
      </Center>
    );
  }

  return (
    <Box p={5}>
      <Box maxW={'4xl'} mx={'auto'}>
        <Heading
          as="h2"
          fontSize="xl"
          color="primary"
          fontFamily="heading"
          mb={4}
        >
          Frequently Asked Questions
        </Heading>
        <Accordion allowToggle>
          {menu[0].inventory.map((faq, index) => (
            <AccordionItem key={index} border="none">
              <h2>
                <AccordionButton _expanded={{ bg: 'light', color: 'dark' }}>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {faq.item.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="dark" fontFamily="body">
                {faq.item.desc}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
}
