import getGoogleString from 'helpers/printing/getGoogleString';
import printAddress from 'helpers/printing/printAddress';
import React from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';

export default function AddressBox({ business }) {
  return (
    <div className="py-12 px-6 bg-secondary text-center">
      <p className="whitespace-pre">
        <a
          href={getGoogleString(business)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm md:text-base"
        >
          <span className="mr-2">
            <FaMapMarkerAlt />
          </span>
          {printAddress(business)}
        </a>
      </p>
    </div>
  );
}
