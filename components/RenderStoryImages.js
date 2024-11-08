import extractStory from 'helpers/extractStory';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function RenderStoryImages({ stories }) {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const renderImages = () => {
    return stories.map((story, index) => {
      const extractedStory = extractStory(story);
      const { images } = extractedStory;
      return (
        <motion.div
          key={index} // It's a good idea to use unique keys. If your story has an id, use that instead of the index.
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <Image src={images[0]} width={500} height={500} />
        </motion.div>
      );
    });
  };

  return (
    <div className="grid grid-cols-2 px-4 md:grid-cols-4 gap-4 py-4 max-w-7xl mx-auto">
      {renderImages()}
    </div>
  );
}
