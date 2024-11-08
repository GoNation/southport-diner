import React from 'react';
import Image from 'next/image';

import ShoutDate from 'components/ShoutDate';
import CardCallToAction from './CardCallToAction';

export default function StefShout({ shout }) {
  const { updatedAt, text } = shout;
  const { isDefault } = shout.image;
  const { cloudinaryId } = shout.image.image;
  const { ctas } = shout;
  return (
    <div className="shout-container">
      <div className="shout-title bg-white text-dark p-3 w-full font-bold h-full lg:text-xl">
        Recent Shout
      </div>
      <div className="shout-date bg-dark darlprimary w-full p-3 text-sm h-full lg:text-xl">
        <ShoutDate date={updatedAt}></ShoutDate>
      </div>
      <div className="shout-body w-full p-3 py-6 bg-secondary text-white text-xl">
        {text} <CardCallToAction ctas={ctas}></CardCallToAction>
        {isDefault ? (
          ''
        ) : (
          <div className="my-4 px-0 md:px-4">
            <Image
              // onClick={() => setShowFullImage(!showFullImage)}
              className={`object-contain w-full`}
              width={800}
              height={300}
              src={`https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/${cloudinaryId}`}
              alt={text}
            />
          </div>
        )}
      </div>
    </div>
  );
}
