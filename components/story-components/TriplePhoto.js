import React from 'react';
import extractStory from 'helpers/extractStory';

const TriplePhoto = ({ story, solidBg, hideIcon = false }) => {
  const extractedStory = extractStory(story);

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      <div className="col-span-2 sm:col-span-1 sm:row-span-2">
        <img
          alt={extractedStory.description}
          className="h-full w-full object-cover"
          src={extractedStory.images[0]}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <img
          alt={extractedStory.description}
          className="h-full w-full object-cover"
          src={extractedStory.images[1]}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <img
          alt={extractedStory.description}
          className="h-full w-full object-cover"
          src={extractedStory.images[2]}
        />
      </div>
    </div>
  );
};

export default TriplePhoto;
