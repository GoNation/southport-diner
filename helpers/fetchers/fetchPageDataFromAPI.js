// fetchers/fetchPageDataFromAPI.js
import graphQLClient from 'lib/graphql/client';
import { GET_PAGES_BY_BUSINESS_ID } from 'lib/graphql/queries';

const fetchPageDataFromAPI = async businessId => {
  try {
    const data = await graphQLClient.request(GET_PAGES_BY_BUSINESS_ID, {
      businessId,
    });

    // Extract the list of pages from the response
    const { listPagesByBusiness } = data;

    // Transform or process data as needed
    const pages = listPagesByBusiness.map(page => ({
      ...page,
      basicInfo: {
        path: page.path,
        seoPageTitle: page.seoPageTitle,
        pageDescription: page.pageDescription,
        hidePageHero: page.hidePageHero,
      },
      advancedSettings: {
        dataTypes: page.dataTypes,
        fetchingStrategy: page.fetchingStrategy,
      },
      components: page.pageComponents,
    }));

    return pages;
  } catch (error) {
    console.error(`Error fetching pages from API: ${error.message}`);
    return [];
  }
};

export default fetchPageDataFromAPI;
