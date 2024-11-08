export default (tag, stories = []) => {
  const results = stories.filter(story => {
    return story?.tags
      ?.map(t => t.trim().toLowerCase())
      .includes(tag.trim().toLowerCase());
  });

  return results;
};
