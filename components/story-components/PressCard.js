import React from 'react';
import Image from 'next/image';
import extractMediaURL from '../../helpers/general/extractMediaURL';
import Title from '../ui/Title';

const PressCard = ({ story }) => {
  const linkTitle = Object.keys(story.links)[0] || '';
  const linkAddress = story.links[linkTitle];

  return (
    <div className="bg-dark cursor-pointer h-full border-2 border-dark">
      <a href={linkAddress} target="_blank" rel="noopener noreferrer">
        <Image
          width={400}
          height={400}
          alt={story.name}
          src={extractMediaURL(story.media)}
          className="object-cover"
        ></Image>
        <div className="p-4 text-center text-white flex flex-col items-center">
          <Title size={'text-md'}>{story.name}</Title>
          <div className="line w-[50px]"></div>
        </div>
      </a>
    </div>
  );
};

export default PressCard;
