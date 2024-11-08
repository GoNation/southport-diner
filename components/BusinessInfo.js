import { Flex, Link, Text } from '@chakra-ui/react';
import getGoogleString from 'helpers/printing/getGoogleString';
import printAddress from 'helpers/printing/printAddress';

const BusinessInfo = ({ business, config }) => (
  <Flex {...config.container}>
    <Link href={`tel:${business.phone}`} {...config.phoneStyle}>
      {business.phone}
    </Link>
    <Text {...config.separatorStyle}>|</Text>
    <Link href={getGoogleString(business)} {...config.addressStyle}>
      {printAddress(business)}
    </Link>
  </Flex>
);

export default BusinessInfo;
