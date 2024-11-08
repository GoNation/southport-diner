import React from 'react';
import Title from '../ui/Title';

export default function TextureContainer({ story }) {
  const { cloudinaryId, description } = story.media[0];
  const { title } = story;
  const texture = `https://res.cloudinary.com/gonation/w_800/q_auto/f_auto/${cloudinaryId}`;
  return (
    <div
      style={{ backgroundImage: `url(${texture})` }}
      className="min-h-[450px] flex justify-center items-center"
    >
      <Title size={'text-3xl lg:text-6xl text-white bg-primary p-3'}>
        {title}
      </Title>
    </div>
  );
}
