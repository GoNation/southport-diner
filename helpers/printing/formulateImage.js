export const formulateImage = ({
  imageBaseUrl = 'https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto',
  cloudinaryId,
}) => `${imageBaseUrl}/${cloudinaryId}`;
