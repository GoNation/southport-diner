export const rowCalc = row => {
  switch (row) {
    case 1:
      return 'w-full';
    case 2:
      return 'w-1/2';
      break;
    case 3:
      return 'w-1/3';
      break;
    case 4:
      return 'w-1/4';
      break;
    case 5:
      return 'w-[20%]';
      break;
    default:
      'w-full';
  }
};
