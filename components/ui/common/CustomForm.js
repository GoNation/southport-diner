import {
  Box,
  Input,
  Textarea,
  Button,
  Grid,
  Text,
  Heading,
  InputGroup,
  InputLeftAddon,
  Select,
  VStack,
  useStyleConfig,
} from '@chakra-ui/react';
import NetlifyForm from 'components/contact/NetlifyForm';
import Address from 'components/Address';
import Phone from 'components/contact/Phone';

const CustomForm = ({
  fields,
  config,
  formName = 'customForm',
  showInfo = true,
  aboutData,
}) => {
  const { title = 'Contact Us', desc, styleVariant } = config;
  const styles = useStyleConfig('CustomForm', { variant: styleVariant });

  return (
    <Box {...styles.container}>
      <NetlifyForm name={formName} submitButtonStyles={styles?.submitButton}>
        <Heading {...styles.heading}>{title}</Heading>
        <Box>
          {showInfo && aboutData && (
            <>
              <VStack {...styles.infoSection}>
                <Address
                  business={aboutData}
                  style={styles.address}
                  fill={'#000'}
                />
                <Phone
                  phone={aboutData.phone}
                  color="dark"
                  fontSize={'lg'}
                  fill={'#000'}
                />
              </VStack>
            </>
          )}
        </Box>
        <Text {...styles.desc}>{desc}</Text>
        <Grid {...styles.grid}>
          {fields.map((field, index) => {
            switch (field.type) {
              case 'textarea':
                return (
                  <Textarea
                    key={index}
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={5}
                    {...styles.textarea}
                  />
                );
              case 'file':
                return (
                  <InputGroup key={index} gridColumn="span 2">
                    <InputLeftAddon color={'dark'}>{field.name}</InputLeftAddon>
                    <Input type="file" accept=".pdf,.doc,.docx" />
                  </InputGroup>
                );
              case 'select':
                return (
                  <Select
                    key={index}
                    name={field.name}
                    placeholder={field.placeholder}
                    {...styles.select}
                  >
                    {field.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                );
              default:
                return (
                  <Input
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    {...styles.input}
                  />
                );
            }
          })}
        </Grid>
      </NetlifyForm>
    </Box>
  );
};

export default CustomForm;
