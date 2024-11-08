import fs from 'fs';
import path from 'path';
import slugifyLower from 'helpers/printing/slugifyLower';
import fetchGoNationData from './fetchers/fetchGoNationData';
import fetchPageDataFromAPI from './fetchers/fetchPageDataFromAPI';

const contentDirectory = path.join(process.cwd(), 'content', 'routes');

const fetchDataFromJson = filePath => {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading JSON file: ${error.message}`);
    return null;
  }
};

const fetchDataFlags = async (pageConfig, businessId, poweredId) => {
  if (!pageConfig) return null;

  let dataFlags = {};
  if (pageConfig.advancedSettings && pageConfig.advancedSettings.dataTypes) {
    Object.keys(pageConfig.advancedSettings.dataTypes).forEach(type => {
      dataFlags[type] = pageConfig.advancedSettings.dataTypes[type];
    });
  }

  // Fetch the actual page data based on the flags
  return fetchGoNationData({ ...dataFlags, menuPL: 1, businessId, poweredId });
};

const fetchPagesFromLocal = () => {
  // Load all route files from the routes directory
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.map(fileName => {
    const routeFilePath = path.join(contentDirectory, fileName);
    const routeData = fetchDataFromJson(routeFilePath);
    return {
      ...routeData,
      name: routeData.name,
      layout: routeData?.layout || null,
      isDropdown: routeData.isDropdown || false,
      basicInfo: { ...routeData.basicInfo },
      heroConfig: { ...routeData.heroConfig },
      navVisibility: { ...routeData.navVisibility },
      advancedSettings: { ...routeData.advancedSettings },
    };
  });
};

export const fetchPageData = async requestedPath => {
  try {
    // Load siteConfig from local JSON
    const siteConfigPath = path.join(
      process.cwd(),
      'content',
      'config',
      'config.json'
    );
    const siteConfig = await fetchDataFromJson(siteConfigPath);
    if (!siteConfig) throw new Error('Site configuration not found.');

    const { businessId, poweredId } = siteConfig;

    // Fetch pages from the local file system
    const localPages = fetchPagesFromLocal();

    // Fetch pages from the GraphQL API
    const apiPages = await fetchPageDataFromAPI(businessId);

    // This is used to normalize the api data to be shaped like the local data
    const updatedApiPages = apiPages.map(page => ({
      ...page,
      navVisibility: {
        hidden: page.navHidden,
        order: page.navOrder,
      },
    }));

    // Merge the pages from both sources
    const allPages = [...localPages, ...updatedApiPages];

    // Find the matching page
    const foundPage = allPages.find(route => {
      const routePath = route.basicInfo?.path || '';
      const routeName = route.name || '';
      const slugifiedRouteName = slugifyLower(routeName);

      return (
        routePath === requestedPath ||
        slugifiedRouteName === requestedPath ||
        `/${slugifiedRouteName}` === requestedPath
      );
    });

    let pageData = {};

    if (foundPage) {
      // Fetch the page data using the foundPage config
      pageData = await fetchDataFlags(foundPage, businessId, poweredId);
    }

    return {
      props: {
        pageData,
        pageConfig: foundPage || null,
        navigationRoutes: allPages, // Pass all pages for navigation
        siteConfig,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error(`Error fetching page data: ${error.message}`);
    return {
      props: {
        pageData: null,
        pageConfig: null,
        navigationRoutes: [],
        siteConfig: null,
      },
    };
  }
};
