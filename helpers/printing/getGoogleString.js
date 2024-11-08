export default ({ city, state, street, zip, name }) =>
  `https://www.google.com/maps/dir/?api=1&destination=${convertString(
    name
  )}+${convertString(street)}+${convertString(city)}+${convertString(
    state
  )}+${convertString(zip)}`;

const getGoogleString = ({ city, state, street, zip, name }) =>
  `https://www.google.com/maps/dir/?api=1&destination=${convertString(
    name
  )}+${convertString(street)}+${convertString(city)}+${convertString(
    state
  )}+${convertString(zip)}`;

const convertString = str => (str ? str.split(' ').join('+') : '');

export const getAppleMapsString = ({ city, state, street, zip, name }) => {
  return `http://maps.apple.com/?address=${convertString(
    street
  )}+${convertString(city)}+${convertString(state)}+${convertString(
    zip
  )}&q=${convertString(name)}`;
};
const isIOS = () => {
  if (typeof window === 'undefined') return false;
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

const mapString = isIOS() ? 'apple' : 'google';

export const decideMapString = business => {
  if (mapString === 'apple') {
    return getAppleMapsString(business);
  }
  return getGoogleString(business);
};
