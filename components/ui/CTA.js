import React from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

const CTA = ({ children, url, variant = 'primaryFilled' }) => {
  const isExternalURL = url.toLowerCase().includes('.com');
  const target = isExternalURL ? '_blank' : '';

  return (
    <Link
      href={url}
      rel={target.length ? 'noopener noreferrer' : ''}
      target={target}
    >
      <Button variant={variant}>{children}</Button>
    </Link>
  );
};

export default CTA;
