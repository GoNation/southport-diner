const prettyPrintDay = {
  sun: 'Sunday',
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
};

const formatTime = str => {
  var time = str.split(':');
  var amORpm = ' pm';

  if (time[0] < 12) amORpm = ' am';

  if (time[0] > 12) time[0] -= 12;
  else if (time[0] == 0) time[0] = 12;

  return time[0] + ':' + time[1] + amORpm;
};

module.exports = { prettyPrintDay, formatTime };
