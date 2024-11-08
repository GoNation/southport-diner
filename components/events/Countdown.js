import React, { useState, useEffect } from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import dayjs from 'dayjs';

function Countdown({ targetDate, onCompleteMessage }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      const totalSeconds = Math.floor(difference / 1000);
      timeLeft = {
        days: Math.floor(totalSeconds / (60 * 60 * 24)),
        hours: Math.floor((totalSeconds / (60 * 60)) % 24),
        minutes: Math.floor((totalSeconds / 60) % 60),
        seconds: Math.floor(totalSeconds % 60),
      };

      // Pad single-digit values with a leading zero
      Object.keys(timeLeft).forEach(key => {
        if (timeLeft[key] < 10) {
          timeLeft[key] = `0${timeLeft[key]}`;
        }
      });
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const countdownComplete =
    !timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds;

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dateText: {
      fontSize: ['xl', '2xl', '4xl'],
      color: 'primary',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 2,
      fontWeight: 'light',
      display: 'none',
    },
    countdownBox: {
      display: 'flex',
      fontSize: ['5xl', '3xl', '8xl'],
      color: 'primary',
      flexDirection: 'column',
      alignItems: 'center',
      fontWeight: 'light',
      mx: [0, 2],
      px: [1, 1, 3, 4],
      py: 3,
    },
    countdownText: {
      fontSize: ['5xl', '3xl', '4xl', '8xl'],
      color: 'white',
      lineHeight: '.8',
      fontFamily: 'accent',
    },
    label: {
      fontSize: ['sm', '', 'lg', 'xl'],
      color: 'white',
      fontWeight: 'normal',
      bg: 'transparent!important',
      fontFamily: 'heading',
      textTransform: 'uppercase',
    },
    hStack: {
      spacing: 4,
      align: 'center',
    },
  };

  const formattedTargetDate = dayjs(targetDate).format('dddd, MMMM D YYYY');

  return (
    <Box {...styles.container}>
      <Text {...styles.dateText}>{formattedTargetDate}</Text>
      <HStack {...styles.hStack}>
        {countdownComplete ? (
          <Text>{onCompleteMessage}</Text>
        ) : (
          isClient && (
            <>
              {Object.entries(timeLeft).map(([unit, value]) => (
                <Box key={unit} {...styles.countdownBox}>
                  <Text {...styles.countdownText}>{value}</Text>
                  <Text {...styles.label}>
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </Text>
                </Box>
              ))}
            </>
          )
        )}
      </HStack>
    </Box>
  );
}

export default Countdown;
