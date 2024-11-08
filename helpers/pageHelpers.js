import slugifyLower from 'helpers/printing/slugifyLower';
import { retrievePageHeroImage } from 'helpers';

export const computePageData = (
  pageConfig,
  aboutData,
  pathname,
  poweredImagesData
) => {
  const { name: pageName, basicInfo, heroConfig } = pageConfig || {};
  const { name: aboutName, desc: aboutDesc } = aboutData || {};

  // Compute page title with fallbacks
  const pageTitle = pageName ? `${pageName} | ${aboutName}` : pathname;

  // Simplify accessing nested properties
  const {
    seoPageTitle: basicSeoPageTitle,
    pageDescription: basicPageDescription,
  } = basicInfo || {};
  const {
    customPageHero: heroCustomPageHero,
    hidePageHero: heroHidePageHero,
    customPageHeroTitle,
    visiblePageDescription,
  } = heroConfig || {};

  // Default values for SEO title and page description
  const seoPageTitle = basicSeoPageTitle || pageTitle;
  const pageDescription = basicPageDescription || aboutDesc;

  // Handle hero image configuration
  const customPageHero =
    heroCustomPageHero ||
    (pageName ? `${slugifyLower(pageName)}-pagehero` : null);
  const hidePageHero = pageConfig?.hidePageHero || heroHidePageHero || false;
  const pageHeroTitle = customPageHeroTitle || pageName || '';

  // Retrieve powered image if available
  const retrievedPoweredImage =
    customPageHero &&
    retrievePageHeroImage(pathname, customPageHero, poweredImagesData);
  const cloudinaryId = retrievedPoweredImage?.cloudinaryId || null;

  return {
    pageTitle,
    seoPageTitle,
    pageDescription,
    customPageHero,
    hidePageHero,
    pageHeroTitle,
    visiblePageDescription,
    cloudinaryId,
  };
};

export const retrieveStaticPaths = async (fs, path) => {
  const contentDirectory = path.join(process.cwd(), 'content', 'routes');

  try {
    const fileNames = fs.readdirSync(contentDirectory);

    const paths = fileNames
      .filter(fileName => fileName.endsWith('.json'))
      .map(fileName => {
        const filePath = path.join(contentDirectory, fileName);
        const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        const { basicInfo, isDropdown } = fileContent;

        // Exclude pages where isDropdown is true
        if (
          basicInfo?.path?.includes('#') ||
          /https?:\/\//.test(basicInfo?.path) ||
          isDropdown === true
        ) {
          return null;
        }

        // Use the path if it exists, otherwise slugify the name
        let generatedPath = basicInfo?.path
          ? basicInfo.path.toLowerCase() // Use the path directly if it exists
          : slugifyLower(fileContent.name); // Otherwise, slugify the name

        // Skip if the generatedPath is the root path "/"
        if (generatedPath === '/') {
          return null;
        }

        return {
          params: {
            slug: generatedPath.split('/').filter(Boolean),
          },
        };
      })
      .filter(Boolean);

    return paths;
  } catch (error) {
    console.error(`Error retrieving static paths: ${error.message}`);
    return [];
  }
};
