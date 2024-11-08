export const weekends = ['saturday', 'sunday'];
export const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
export const everyday = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export default eventDays => {
  let typeOfEvent = null;

  if (
    Object.keys(eventDays).length === 2 &&
    Object.keys(eventDays).every((value, index) => value === weekends[index])
  ) {
    typeOfEvent = 'Every Weekend';
  } else if (
    Object.keys(eventDays).length === 5 &&
    Object.keys(eventDays).every((value, index) => {
      return value === weekdays[index];
    })
  ) {
    typeOfEvent = 'Every Weekday';
  } else if (
    Object.keys(eventDays).length === 7 &&
    Object.keys(eventDays).every((value, index) => {
      return value === everyday[index];
    })
  ) {
    typeOfEvent = 'Daily';
  } else {
    // if not accounted for return the days
    typeOfEvent = `Every ${Object.keys(eventDays).map(day => ` ${day}`)}`;
  }

  return typeOfEvent;
};
