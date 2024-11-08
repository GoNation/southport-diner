import cloudinaryString from './cloudinary/cloudinaryString';
import findMultipleStoriesByNames from './findMultipleStoriesByNames';
export const dataFactory = (data, allStoriesData) => {
  const storiesData = findMultipleStoriesByNames(
    data.map(itm => (itm.name ? itm.name : itm)),
    allStoriesData,
    true
  );

  return storiesData.reverse().map((story, idx) => {
    const image = cloudinaryString(null, story.firstImage.cloudinaryId, 800);
    return {
      ...story,
      ...data[idx],
      image,
    };
  });
};
