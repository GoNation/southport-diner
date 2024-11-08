import Link from 'next/link';
import { Text } from '@chakra-ui/react';
import slugifyLower from 'helpers/printing/slugifyLower';
import { determineHref, determineRel, determineTarget } from 'helpers';

const LinkItem = ({ route, ...props }) => {
  const href = determineHref(route);
  const target = determineTarget(href);
  const rel = determineRel(target);
  return (
    <Link href={href} target={target} rel={rel}>
      <Text as="span" {...props}>
        {route.name}
      </Text>
    </Link>
  );
};

export default LinkItem;
