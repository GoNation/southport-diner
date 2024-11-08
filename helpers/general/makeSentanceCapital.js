// A function that takes a string and makes the first letter of each word capital

const makeSentancesCapital = str => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default makeSentancesCapital;
