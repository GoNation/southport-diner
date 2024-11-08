const findEventById = (id, events) => {
  if (!events) return null;
  const allEvents = events.recurringEventsData.events.concat(
    events.specialEventsData.events
  );
  return allEvents.find(event => event.id === id);
};

export default findEventById;
