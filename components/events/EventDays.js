import React from 'react';
import recurringEventDaysReducer from '../../helpers/events/recurringEventDaysReducer';
export default function EventDays({ eventDays }) {
  let typeOfEvent = recurringEventDaysReducer(eventDays);

  return (
    <div className="eventDaysContainer flex capitalize">
      <span>{typeOfEvent}</span>
    </div>
  );
}
