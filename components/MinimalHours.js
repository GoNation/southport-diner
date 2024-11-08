import React from 'react';
import { VStack, Text } from '@chakra-ui/react';

const convertTime12hr = timeString => {
  const [hours, minutes] = timeString.split(':');
  const hoursInt = parseInt(hours, 10);
  const suffix = hoursInt >= 12 ? 'PM' : 'AM';
  const hours12 = hoursInt % 12 || 12; // Converts "00" to "12"
  return `${hours12}:${minutes.substring(0, 2)}${suffix}`;
};

const formatHours = hours => {
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let defaultHoursRanges = [];
  let specialHoursList = [];

  // Initialize a map to track the days for each set of default hours
  let defaultHoursMap = new Map();

  // Iterate through each day to populate default hours and special hours
  dayNames.forEach(dayName => {
    const dayKey = dayName.toLowerCase().substring(0, 3);
    const daySlots = hours[dayKey];

    if (daySlots) {
      daySlots.forEach(slot => {
        const formattedTime = `${convertTime12hr(slot.open)}-${convertTime12hr(
          slot.close
        )}`;

        if (!slot.name) {
          // Collect default business hours
          if (!defaultHoursMap.has(formattedTime)) {
            defaultHoursMap.set(formattedTime, []);
          }
          defaultHoursMap.get(formattedTime).push(dayName);
        } else {
          // Collect special hours like Brunch
          specialHoursList.push({
            name: slot.name.trim(),
            time: formattedTime,
            day: dayName,
          });
        }
      });
    }
  });

  // Construct the default hours ranges
  defaultHoursMap.forEach((days, hours) => {
    if (days.length === 1) {
      defaultHoursRanges.push(`${days[0]}: ${hours}`);
    } else {
      defaultHoursRanges.push(`${days[0]}–${days[days.length - 1]}: ${hours}`);
    }
  });

  // Construct the special hours entries
  let specialHoursEntries = specialHoursList.map(
    ({ name, time, day }) => `${day} ${name}: ${time}`
  );

  // Combine default hours ranges with special hours entries
  let allHoursDisplay = defaultHoursRanges.concat(specialHoursEntries);

  return allHoursDisplay;
};

const MinimalHours = ({ hours }) => {
  const dayRanges = formatHours(hours);

  return (
    <VStack align="start">
      {dayRanges.map((entry, index) => (
        <Text key={index}>{entry}</Text>
      ))}
    </VStack>
  );
};

// Example usage:
// <MinimalHours hours={providedHoursObject} />

export default MinimalHours;
