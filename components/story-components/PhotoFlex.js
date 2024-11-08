import extractStory from 'helpers/extractStory';
import React from 'react';

export default function PhotoFlex({ story }) {
  const extractedStory = extractStory(story);
  const { images } = extractedStory;
  //    render images stacked on mobile and flex on medium and up using tailwind css
  return (
    <div className="flex flex-wrap">
      {images.map(image => (
        <div className="w-1/2 md:flex-1">
          <img
            src={image}
            alt={image?.title}
            className=" h-60 md:h-96 object-cover w-full"
          />
        </div>
      ))}
    </div>
  );
}
