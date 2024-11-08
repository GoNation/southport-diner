import React from 'react';
import dayjs from 'dayjs';

export default function ShoutDate({ date }) {
  return <>{dayjs(date).format('MMM DD, h:mm A')}</>;
}