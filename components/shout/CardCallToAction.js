import React from 'react';
import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';

export default function CardCallToAction({ ctas, showIcon = true }) {
  const filterOutNoLinks = () => {
    if (ctas) {
      const title = Object.keys(ctas)[1];
      return title !== 'cta1' && title !== 'cta2';
    }
    return false;
  };
  const linkTitle = ctas ? filterOutNoLinks() || '' : '';
  const linkAddress = linkTitle.length ? ctas[linkTitle] : '';
  if (filterOutNoLinks()) {
    const linkIsUrl = linkAddress.includes('http') ? '_blank' : '';
    return (
      <button className="absolute bottom-5 right-5 inline-flex items-center text-sm font-medium text-white bg-primary  hover:bg-primary rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2 grad">
        {showIcon ? <AiOutlineLink></AiOutlineLink> : ''}
        <Link href={linkAddress}>
          <a target={linkIsUrl} rel="noopener noreferrer">
            <span className="ml-2">{linkTitle}</span>
          </a>
        </Link>
      </button>
    );
  }
  return null;
}
