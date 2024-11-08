import findPoweredImage from 'helpers/general/findPoweredImage';
import slugifyLower from 'helpers/printing/slugifyLower';

const retrievePageHeroImage = (pathname, customPageHero, poweredImagesData) => {
  const pathNameWithoutSlash = pathname.replace('/', '');
  const foundImage = findPoweredImage(
    customPageHero || pathNameWithoutSlash,
    poweredImagesData
  );
  if (foundImage) {
    return foundImage;
  }
  return null;
};

// Helper function to filter stories by name
const filterStoriesByName = (stories, filterName) => {
  return stories?.general?.filter(
    story =>
      story.name?.toLowerCase()?.includes(filterName.toLowerCase()) &&
      story.media?.length
  );
};

// Helper function to sort stories by name's numeric part
const sortStoriesByNumericName = stories => {
  return stories?.sort((a, b) => {
    const numA = parseInt(a.name.match(/\d+/));
    const numB = parseInt(b.name.match(/\d+/));
    return numA - numB;
  });
};

// Combined function to filter and then sort
const filterAndSortStories = (stories, filterName) => {
  const filteredStories = filterStoriesByName(stories, filterName);
  return sortStoriesByNumericName(filteredStories);
};

function findPageData(routes, pathname) {
  for (let route of routes) {
    if (route.path === pathname) {
      return route;
    }
    if (route.children) {
      const foundRoute = findPageData(route.children, pathname);
      if (foundRoute) {
        return foundRoute;
      }
    }
  }
}
// A function that checks to see if a phone is formatted. a phone number like 2036554100 would be formatted to (203) 655-4100
const formatPhone = phone => {
  if (!phone) return null;
  if (phone.length === 10) {
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  } else {
    return phone;
  }
};

const convertTime12hr = timeString => {
  const [hours, minutes] = timeString.split(':');
  const hoursInt = parseInt(hours, 10);
  const suffix = hoursInt >= 12 ? 'PM' : 'AM';
  const hours12 = ((hoursInt + 11) % 12) + 1;
  return `${hours12}:${minutes.substring(0, 2)}${suffix}`;
};

const determineTarget = href =>
  href.includes('http') || href.includes('mailto') ? '_blank' : '_self';

const determineHref = route =>
  route?.basicInfo?.path || `/${slugifyLower(route.name)}` || '#';

const determineRel = target =>
  target === '_blank' ? 'noopener noreferrer' : null;

/**
 * 🌐 Handle Global Link
 * This function takes a URL/path and determines how it should be opened.
 *
 * @param {string} url - The URL/path to handle
 * @returns {object|null} - An object with href, target, and rel properties, or null if no URL is provided
 */
const handleGlobalLink = url => {
  // 🚫 If no URL is provided, return null
  if (!url) return null;

  // 🌍 If the URL includes 'http', it's an external link
  // Return the URL with target="_blank" and rel="noopener noreferrer" to open in a new tab
  if (url.includes('http')) {
    return {
      href: url,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  // 🌐 If the URL includes '.com' or 'www.', it's likely an external link without 'http'
  // Add 'https://' to the start of the URL and return with target="_blank" and rel="noopener noreferrer"
  if (url.includes('.com') || url.includes('www.')) {
    return {
      href: `https://${url}`,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  // 🏠 If the URL doesn't match any of the above conditions, it's likely an internal link
  // Return the URL with target="_self" to open in the same tab
  return {
    href: url,
    target: '_self',
  };
};

const sanitizeUrl = (url, socialType) => {
  if (!url) return '#';
  const socialLowercased = socialType.toLowerCase();
  if (url.startsWith('http')) return url;
  if (socialLowercased === 'facebook') return `https://www.facebook.com/${url}`;
  if (socialLowercased === 'instagram')
    return `https://www.instagram.com/${url}`;
  if (socialLowercased === 'twitter') return `https://www.twitter.com/${url}`;
  if (socialLowercased === 'youtube') return `https://www.youtube.com/${url}`;
  if (socialLowercased === 'linkedin') return `https://www.linkedin.com/${url}`;
  if (socialLowercased === 'pinterest')
    return `https://www.pinterest.com/${url}`;
  if (socialLowercased === 'tiktok') return `https://www.tiktok.com/${url}`;
  return `https://www.${url}`;
};

const convertMenuDataToTestimonials = (menuData, poweredListNumber) => {
  if (!menuData) return null;
  //   const testimonialsFromMenu = menuData.find(menu =>
  //     menu.name.includes(poweredListNumber.toString())
  //   );

  const testimonialsFormatted = menuData?.inventory?.map(({ item }) => {
    return {
      testimonial: item.desc,
      author: item.name,
    };
  });

  return testimonialsFormatted;
};

export {
  retrievePageHeroImage,
  filterAndSortStories,
  findPageData,
  formatPhone,
  convertTime12hr,
  determineTarget,
  determineHref,
  determineRel,
  handleGlobalLink,
  sanitizeUrl,
  convertMenuDataToTestimonials,
};
