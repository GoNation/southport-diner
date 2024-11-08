function normalizeEvents(events, includeRecurringInstances) {
  let normalizedEvents = [];

  events.forEach(event => {
    if (event.eventDays) {
      // Handle recurring event
      if (includeRecurringInstances) {
        normalizedEvents.push(...normalizeRecurringEvent(event));
      } else {
        normalizedEvents.push(normalizeOneTimeEvent(event));
      }
    } else {
      // Handle one-time event
      normalizedEvents.push(normalizeOneTimeEvent(event));
    }
  });

  return normalizedEvents;
}

function normalizeOneTimeEvent(event) {
  return {
    ...event,
    start: new Date(event.starts),
    end: new Date(event.ends),
    title: event.name,
  };
}

function normalizeRecurringEvent(event) {
  let occurrences = [];
  let startDate = new Date(event.starts);
  let endDate = new Date(event.ends);

  for (
    let day = new Date(startDate);
    day <= endDate;
    day.setDate(day.getDate() + 1)
  ) {
    let dayOfWeek = day
      .toLocaleDateString('en-US', { weekday: 'long' })
      .toLowerCase();
    if (event.eventDays[dayOfWeek]) {
      let startTime = event.eventDays[dayOfWeek].start.split(':');
      let endTime = event.eventDays[dayOfWeek].end.split(':');
      let startDateTime = new Date(day.setHours(...startTime));
      let endDateTime = new Date(day.setHours(...endTime));

      occurrences.push({
        ...event,
        start: new Date(startDateTime),
        end: new Date(endDateTime),
        title: event.name,
      });
    }
  }

  return occurrences;
}

export { normalizeEvents };
