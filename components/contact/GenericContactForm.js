import {
  Box,
  Input,
  Textarea,
  Button,
  Grid,
  Text,
  Heading,
} from '@chakra-ui/react';
import NetlifyForm from './NetlifyForm';

export default function GenericContactForm({ title = 'Contact Form', desc }) {
  const inputFields = [
    { type: 'text', name: 'Name', placeholder: 'Name' },
    { type: 'tel', name: 'Phone', placeholder: 'Phone' },
    { type: 'email', name: 'Email', placeholder: 'Email' },
    { name: 'Message', placeholder: 'Your Message', isTextarea: true },
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
      py={{ lg: 12 }}
    >
      <NetlifyForm name="genericContactForm">
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: '2xl', lg: 'xl', xl: '4xl' }}
          mb={1}
          textTransform="uppercase"
          color="dark"
        >
          {title}
        </Heading>
        <Text mb={4} color="dark">
          {desc}
        </Text>
        <Grid gap={4} templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>
          {inputFields.map((field, index) => {
            if (field.isTextarea) {
              return (
                <Textarea
                  key={index}
                  name={field.name}
                  placeholder={field.placeholder}
                  rows={5}
                  gridColumn="span 2"
                />
              );
            }
            return (
              <Input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
              />
            );
          })}
        </Grid>
        <Button
          type="submit"
          mt={4}
          w="full"
          bg="primary"
          color="white"
          borderRadius="md"
          border={'1px solid'}
          borderColor="primary"
          _hover={{ bg: 'transparent', color: 'primary' }}
        >
          Submit
        </Button>
      </NetlifyForm>
    </Box>
  );
}
