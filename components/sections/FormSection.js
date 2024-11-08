import { Box } from '@chakra-ui/react';
import GenericContactForm from 'components/contact/GenericContactForm';

const FormSection = ({ desc }) => (
  <Box colSpan={{ md: 1 }}>
    <GenericContactForm desc={desc} />
  </Box>
);

export default FormSection;
