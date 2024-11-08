import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import SocialLinks from 'components/ui/SocialLinks';
import Address from 'components/Address';
import Email from 'components/Email';
import Phone from 'components/contact/Phone';

export default function TopBarNav({ styles, business = {}, config = {} }) {
  if (!config.display) return null;
  const businessHasLinks =
    business && Object.values(business.links).some(link => link);
  const { email, displayPhone, displayAddress, displaySocialLinks } = config;

  return (
    <Box {...styles}>
      <Flex {...styles.innerContainer}>
        {businessHasLinks && displaySocialLinks && (
          <Box {...styles.innerItemContainer}>
            <SocialLinks links={business.links} />
          </Box>
        )}

        {displayAddress && (
          <Box {...styles.innerItemContainer}>
            <Address business={business} />
          </Box>
        )}
        {email && (
          <Box {...styles.innerItemContainer}>
            <Email email={email} />
          </Box>
        )}

        {displayPhone && (
          <Box {...styles.innerItemContainer}>
            <Phone {...business} />
          </Box>
        )}
      </Flex>
    </Box>
  );
}
