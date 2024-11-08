// this function takes a string of comma separated values and converts it into an array of strings
// input: string
// output: array of strings
export const convertStringToArray = string => {
  return string.split(',').map(item => item.trim());
};
