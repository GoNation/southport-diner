import extractStory from 'helpers/extractStory';
import {
  storiesFetch,
  aboutFetch,
  poweredImagesFetch,
  shoutFetch,
  eventFetch,
  menuInventoryFetch,
  galleryFetch,
} from '.';
const fetchGoNationData = async params => {
  const {
    about,
    stories,
    events,
    menuInventory,
    shout,
    gallery,
    poweredImages,
    menuPL,
    multiBusiness,
    businessId,
    poweredId,
    useJSONP,
  } = params;

  let aboutData = {},
    storiesData = {},
    eventsData = {},
    menuInventoryData = {},
    shoutData = {},
    galleryData = {},
    poweredImagesData = {},
    multiBusinessData = {},
    storyPageHeroData = {};

  if (stories) {
    try {
      storiesData = await storiesFetch(businessId);
    } catch (e) {
      storiesData = {
        error: 'Error fetching stories',
      };
    }
  }

  if (poweredImages) {
    try {
      poweredImagesData = await poweredImagesFetch(poweredId || businessId);
    } catch (e) {
      poweredImagesData = {
        error: 'Error fetching powered images',
      };
    }
  }

  if (about) {
    try {
      aboutData = await aboutFetch(poweredId || businessId, useJSONP);
    } catch (e) {
      console.log('e: ', e);
      aboutData = {
        error: 'Error fetching about data',
      };
    }
  }

  if (shout) {
    try {
      shoutData = await shoutFetch(businessId, useJSONP);
    } catch (e) {
      shoutData = {
        error: 'Error fetching shout data',
      };
    }
  }

  if (events) {
    try {
      eventsData = await eventFetch(poweredId || businessId, useJSONP);
    } catch (e) {
      eventsData = {
        error: 'Error fetching events data',
      };
    }
  }

  if (menuInventory) {
    try {
      menuInventoryData = await menuInventoryFetch(
        poweredId || businessId,
        menuPL,
        useJSONP
      );
    } catch (e) {
      menuInventoryData = {
        error: 'Error fetching menu inventory data',
      };
    }
  }

  if (gallery) {
    try {
      galleryData = await galleryFetch(poweredId || businessId);
    } catch (e) {
      galleryData = {
        error: 'Error fetching gallery data',
      };
    }
  }

  if (multiBusiness) {
    try {
      const requests = multiBusiness.map(id => aboutFetch(id));
      multiBusinessData = await Promise.all(requests);
    } catch (e) {
      multiBusinessData = {
        error: 'Error fetching multi-business data',
      };
    }
  }

  // We are going to fetch for stories (no matter the flags). We will then filter out all stories with the ones with names.includes('pagehero')
  try {
    storyPageHeroData = await storiesFetch(businessId);
  } catch (e) {
    storyPageHeroData = {
      error: 'Error fetching story page hero data',
    };
  }

  return {
    storiesData,
    poweredImagesData,
    aboutData: {
      ...aboutData,
      businessId: businessId,
    },
    shoutData,
    eventsData,
    menuInventoryData,
    galleryData,
    multiBusinessData,
    storyPageHeroData:
      storyPageHeroData.general
        ?.filter(story => {
          return story.name.includes('pagehero');
        })
        .map(story => {
          const extractedStoryHero = extractStory(story);
          return {
            id: story?.id,
            firstImage: extractedStoryHero?.firstImage || '',
            images: extractedStoryHero?.images || [],
            title: story?.title || '',
            subtitle: extractedStoryHero?.subtitle || '',
            body: extractedStoryHero?.body || '',
            name: story?.name || '',
          };
        }) || [],
  };
};

export default fetchGoNationData;
