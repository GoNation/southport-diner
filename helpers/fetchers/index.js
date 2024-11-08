import axios from 'axios';
import jsonAdapter from 'axios-jsonp';

const IS_DEV = false;

const GONATION_API_BASE_URL = IS_DEV
  ? 'https://maindiscovery.dev.gonation.com/businesses'
  : 'https://gonation.com/api/proxy/v2/businesses';
const DATA_GONATION_BASE_URL = IS_DEV
  ? 'https://maindiscovery.dev.gonation.com/profile'
  : 'https://data.gonation.com/profile';
const DATA_PROD_GONATION_BASE_URL = IS_DEV
  ? 'https://maindiscovery.dev.gonation.com/profile'
  : 'https://data.prod.gonation.com/profile';

const MENU_GONATION_BASE_URL = IS_DEV
  ? 'https://maindiscovery.dev.gonation.com'
  : 'https://data.prod.gonation.com';

const storiesFetch = async businessId => {
  const storiesResponse = await fetch(
    `${GONATION_API_BASE_URL}/${businessId}/aboutArticles`
  );
  const storiesData = await storiesResponse.json();
  return storiesData;
};

const poweredImagesFetch = async businessId => {
  const poweredImagesResponse = await fetch(
    `${DATA_GONATION_BASE_URL}/poweredImages?profile_id=${businessId}`
  );
  const poweredImagesData = await poweredImagesResponse.json();
  return poweredImagesData;
};

const aboutFetch = async (businessId, useJSONP) => {
  const url = `${DATA_GONATION_BASE_URL}/getname/?profile_id=${businessId}`;
  if (useJSONP) {
    const aboutResponse = await axios({
      url,
      adapter: jsonAdapter,
      callbackParamName: 'callback',
    });
    return aboutResponse?.data;
  } else {
    const aboutResponse = await fetch(url);
    const aboutData = await aboutResponse.json();
    return aboutData;
  }
};

const shoutFetch = async (businessId, useJSONP) => {
  const url = `${DATA_PROD_GONATION_BASE_URL}/shoutsnew/${businessId}`;
  if (useJSONP) {
    const shoutResponse = await axios({
      url,
      adapter: jsonAdapter,
      callbackParamName: 'callback',
    });
    return shoutResponse?.data;
  } else {
    const shoutResponse = await fetch(url);
    const shoutData = await shoutResponse.json();
    return shoutData;
  }
};

const eventFetch = async (businessId, useJSONP) => {
  const specialEventsUrl = `${DATA_PROD_GONATION_BASE_URL}/events?profile_id=${businessId}`;
  const recurringEventsUrl = `${DATA_PROD_GONATION_BASE_URL}/recurringevents?profile_id=${businessId}`;
  if (useJSONP) {
    const specialEventsResponse = await axios({
      url: specialEventsUrl,
      adapter: jsonAdapter,
      callbackParamName: 'callback',
    });
    const recurringEventsResponse = await axios({
      url: recurringEventsUrl,
      adapter: jsonAdapter,
      callbackParamName: 'callback',
    });
    return {
      recurringEventsData: recurringEventsResponse?.data || {},
      specialEventsData: specialEventsResponse?.data,
    };
  } else {
    const specialEventsResponse = await fetch(specialEventsUrl);
    const recurringEventsResponse = await fetch(recurringEventsUrl);
    const specialEventsData = await specialEventsResponse.json();
    const recurringEventsData = await recurringEventsResponse.json();
    return {
      recurringEventsData: recurringEventsData || {},
      specialEventsData,
    };
  }
};

const menuInventoryFetch = async (businessId, menuInventory = 1, useJSONP) => {
  const url = `${MENU_GONATION_BASE_URL}/pl/get?profile_id=${businessId}&powerlistId=powered-list-${menuInventory}`;
  if (useJSONP) {
    const menuInventoryResponse = await axios({
      url,
      adapter: jsonAdapter,
      callbackParamName: 'callback',
    });
    const menuInventoryData = await menuInventoryResponse?.data;
    return menuInventoryData;
  }
  const menuInventoryResponse = await fetch(url);
  const menuInventoryData = await menuInventoryResponse.json();
  return menuInventoryData;
};

const galleryFetch = async businessId => {
  const galleryResponse = await fetch(
    `${DATA_PROD_GONATION_BASE_URL}/gallery?profile_id=${businessId}`
  );
  const galleryData = await galleryResponse.json();
  return galleryData;
};

module.exports = {
  storiesFetch,
  poweredImagesFetch,
  aboutFetch,
  shoutFetch,
  eventFetch,
  menuInventoryFetch,
  galleryFetch,
};
