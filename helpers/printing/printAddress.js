export default ({ city, state, street, zip }, includeZip = true) => {
  return includeZip
    ? `${street}, ${city} ${state}, ${zip}`
    : `${street}, ${city} ${state}`;
};
