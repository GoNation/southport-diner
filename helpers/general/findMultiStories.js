export default (ids = [], stories = []) =>
  stories.filter(story => ids.includes(story.id));
