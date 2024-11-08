export default (tag, stories = []) => {
  const result = stories.find(story => {
    return story?.tags
      ?.map(t => t.trim().toLowerCase())
      .includes(tag.trim().toLowerCase());
  });

  return result;
};
