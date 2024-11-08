import extractStory from './extractStory';

const findStoryByName = (name = '', storiesData, useExtraction) => {
  if (!storiesData) return null;

  const story = storiesData.find(
    story =>
      trimTrailingWhitespace(story.name).toLowerCase() === name.toLowerCase()
  );

  return useExtraction && story ? extractStory(story) : story;
};

export default findStoryByName;

// function to trim trailing whitespace from a string
function trimTrailingWhitespace(string) {
  return string.replace(/\s*$/, '');
}
