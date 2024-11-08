import React from 'react';
import dayjs from 'dayjs';
export default function EventDate({ date, variantName }) {
  return (
    <div className="eventDateContainer flex text-2xl md:text-2xl l">
      <span className="eventDate mr-1">{`${dayjs(date).format('DD')}`} </span>
      <span className="eventMonth"> {`${dayjs(date).format('MMM')}`}</span>
    </div>
  );
}
