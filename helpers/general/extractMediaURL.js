import { formulateImage } from '../printing/formulateImage';
export default media => {
  if (media.length) {
    return `${formulateImage({ ...media[0] })}`;
  }
  return '';
};
