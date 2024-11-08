export default function parseCloudinaryImage({
  cloudinaryId,
  size = 800,
  imageBaseUrl = 'https://res.cloudinary.com/gonation/',
}) {
  return `${imageBaseUrl}/w_${size}/q_auto/f_auto/${cloudinaryId}`;
}
