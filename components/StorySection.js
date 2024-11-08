import findStoryByName from 'helpers/findStoryByName';
import SideBySideImage from 'components/story-components/SideBySideImage';
import LargeContentContainer from 'components/story-components/LargeContentContainer';

const StorySection = ({ storiesData, storiesConfig }) => (
  <section className="relative lg:py-24">
    {storiesConfig.map((storyConfig, index) => (
      <SideBySideImage
        key={index}
        config={storyConfig.config}
        story={findStoryByName(storyConfig.storyName, storiesData)}
        svgSrc={storyConfig.svgSrc}
      />
    ))}
  </section>
);

export default StorySection;
