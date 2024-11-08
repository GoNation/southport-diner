import extractStory from './extractStory';

function trimTrailingWhitespace(string) {
  return string.replace(/\s*$/, '');
}

const findMultipleStoriesByNames = (names = [], storiesData, useExtraction) => {
  // Check if names is a string and contains a comma
  if (typeof names === 'string' && names.includes(',')) {
    names = names.split(',').map(name => name.trim());
  }

  // Convert the names array to lowercase after trimming
  const trimmedNames = names.map(name =>
    trimTrailingWhitespace(name).toLowerCase()
  );

  const stories = storiesData.filter(story => {
    // Convert the story name to lowercase after trimming
    const trimmedStoryName = trimTrailingWhitespace(story.name).toLowerCase();
    return trimmedNames.includes(trimmedStoryName);
  });

  return useExtraction ? stories.map(story => extractStory(story)) : stories;
};

export default findMultipleStoriesByNames;
