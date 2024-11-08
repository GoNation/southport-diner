const getTarget = url => {
  const isExternalURL =
    url.toLowerCase().includes('.com') ||
    url.toLowerCase().includes('http') ||
    url.toLowerCase().includes('www');
  const target = isExternalURL ? '_blank' : '';

  return target;
};

module.exports = {
  getTarget,
};
