import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { prettyPrintDay, formatTime } from '../../helpers/hours';

const HoursDisplay = ({ hours, isContact, center = false }) => {
  if (!hours) return null;
  const days = Object.keys(hours);

  // Function that builds an array of all hour labels for business and filters out the duplicates
  const uniqueHourLabels = days
    .map(day => hours[day].map(hourBlock => hourBlock.name))
    .flat()
    .filter((label, idx, arr) => arr.indexOf(label) === idx);

  const buildHoursObject = uniqueHourLabels.reduce((acc, label) => {
    // If there is no label yet in the object, add it

    if (!acc[label]) {
      // Assign the object key to

      acc[label] = [];
    }

    // If there IS a label already inside of the acc, we must then begin populating it with respected hours

    if (acc[label]) {
      acc[label] = [
        ...days
          .map(day =>
            hours[day]
              .filter(hourBlock => hourBlock.name === label)
              .map(hourBlock => hourBlock)
              .flat()
              .map(el => ({
                ...el,
                day: prettyPrintDay[day],
              }))
          )
          .flat(),
      ];
    }
    return acc;
  }, {});

  const combineEqualHours = hours => {
    if (hours.length === 1) {
      return [
        {
          [hours[0].name]: {
            day: hours.map(({ day }) => day),
            open: hours[0].open,
            close: hours[0].close,
            name: hours[0].name,
          },
        },
      ];
    } else {
      return hours.reduce((acc, cur) => {
        if (!acc.length) {
          acc[0] = {
            [cur.name]: [
              {
                day: [cur.day],
                open: cur.open,
                close: cur.close,
                name: cur.name,
              },
            ],
          };
        } else {
          if (
            acc[0][cur.name].some(
              el => el.close === cur.close && el.open === cur.open
            )
          ) {
            const found = acc[0][cur.name].find(
              el => el.open === cur.open && el.close === cur.close
            );
            found.day.push(cur.day);
          } else {
            acc[0][cur.name].push({
              day: [cur.day],
              open: cur.open,
              close: cur.close,
              name: cur.name,
            });
          }
        }
        // return an array with the correct keys
        return acc;
      }, []);
    }
  };

  const combineSimilarHours = () => {
    const hourTypes = Object.keys(buildHoursObject);
    const hoursFromObject = hourTypes.map(label =>
      buildHoursObject[label].map(hours => hours)
    );

    return hoursFromObject.map(hourObj => combineEqualHours(hourObj)[0]);
  };
  const combinedHours = combineSimilarHours();
  const hourTypes = Object.keys(combinedHours);

  return (
    <Box
      textAlign={center ? 'center' : 'left'}
      mb={center ? '12' : '0'}
      display={'flex'}
      flexWrap="wrap"
      width={'100%'}
      justifyContent={'space-evenly'}
    >
      {hourTypes.length === 0 ? (
        <Text>closed</Text>
      ) : (
        hourTypes.map(label => {
          const hourWithLabel = combinedHours[label];
          const hourTitle = Object.keys(hourWithLabel)[0];
          const abc = hourWithLabel[hourTitle];

          return (
            <Box key={label} border={'2px solid white'} flex={1}>
              <Heading
                as="h4"
                size={['sm', 'xl']}
                color={'white'}
                fontFamily={'body'}
                textAlign={'center'}
              >
                {hourTitle === 'null' ? '' : hourTitle}
              </Heading>
              {Array.isArray(abc) && (
                <>
                  {abc.map((obj, idx) => (
                    <Box key={`${obj.day}-${idx}`} mb="3" textAlign={'center'}>
                      {obj.day.length === 7 ? (
                        <Text fontSize="sm" color={'white'}>
                          Every day
                        </Text>
                      ) : (
                        obj.day.map((day, idx) => (
                          <Text
                            fontSize="sm"
                            color={'white'}
                            as="span"
                            key={`${day}-${idx}-2`}
                          >
                            {day}
                            {obj.day.length - 1 === idx ? ':' : ', '}
                          </Text>
                        ))
                      )}
                      <Text fontSize="sm" color={'white'}>
                        <Text as="span">{formatTime(obj.open)} - </Text>
                        <Text as="span">{formatTime(obj.close)}</Text>
                      </Text>
                    </Box>
                  ))}
                </>
              )}
            </Box>
          );
        })
      )}
    </Box>
  );
};

export default HoursDisplay;
