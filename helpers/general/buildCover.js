export default business =>
  business?.cover
    ? `${business.cover.imageBaseUrl}/${business.cover.imagePrefix}`
    : '';
