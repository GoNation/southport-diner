import React from 'react';
import { useRouter } from 'next/router';

import useEvents from 'hooks/useEvents';
import useBusiness from 'hooks/useBusiness';
import { Button } from '@chakra-ui/react';
import ClientLayout from 'components/layout/ClientLayout';
import EventItemPage from 'components/EventItemPage';

const EventPage = () => {
  const { events } = useEvents();
  const { business } = useBusiness();
  const router = useRouter();
  const { eventId } = router.query;
  const foundEvent = events.find(event => event._id === eventId);

  // todo render event not found component.
  if (!foundEvent) {
    return (
      <div>Event not found. (todo render event not found component here).</div>
    );
  }

  // todo render the UI of the event.
  return (
    <ClientLayout business={business}>
      <EventItemPage foundEvent={foundEvent} business={business} />
    </ClientLayout>
  );
};

export default EventPage;
