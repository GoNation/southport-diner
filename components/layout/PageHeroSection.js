import PageHero from 'components/heros/PageHero';
import { retrievePageHeroImage } from 'helpers';
import buildAvatar from 'helpers/general/buildAvatar';
const PageHeroSection = ({
  hidePageHero,
  asPath,
  customPageHero,
  poweredImagesData,
  pageHeroTitle,
  visiblePageDescription,
  pageDescription,
  aboutData,
  storyPageHeroData,
}) => {
  // Return PageHero component with appropriate props
  const retrieveStoryPageHero = (asPath, customPageHero, storyPageHeroData) => {
    // as path
    const pathNameWithoutSlash = asPath.replace('/', '');
    return storyPageHeroData.find(storyPageHero => {
      if (storyPageHero.name.toLowerCase().includes(pathNameWithoutSlash)) {
        return storyPageHero;
      }
    });
  };
  return (
    !hidePageHero && (
      <PageHero
        storyPageHero={retrieveStoryPageHero(
          asPath,
          customPageHero,
          storyPageHeroData
        )}
        key={asPath}
        img={retrievePageHeroImage(asPath, customPageHero, poweredImagesData)}
        pageTitle={pageHeroTitle}
        description={visiblePageDescription && pageDescription}
        avatar={buildAvatar(aboutData)}
        businessName={aboutData?.name}
      />
    )
  );
};

export default PageHeroSection;
