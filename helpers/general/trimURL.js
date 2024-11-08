const trimURL = url => {
  const domain = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  return domain;
};

export default trimURL;
