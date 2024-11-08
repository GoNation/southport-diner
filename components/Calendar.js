import React from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import {
  Calendar as CalendarComponent,
  dayjsLocalizer,
} from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomToolbar from 'components/calendar/CustomToolbar';
import useEvents from 'hooks/useEvents';
import { useRouter } from 'next/router';

const localizer = dayjsLocalizer(dayjs);

// todo remove businessData if not used.
export default function Calendar({ businessData }) {
  const router = useRouter();
  const { events } = useEvents();

  const calendarHeight = useBreakpointValue({
    base: { height: 600 },
    md: { height: 700 },
  });

  const { outerWrapper, innerWrapper } = styles;

  // todo: Have a events/{eventId} page that will render out the full event details. (or at the very least a modal or #anchor link to the event details)

  return (
    <Box {...outerWrapper}>
      <Box {...innerWrapper}>
        <CalendarComponent
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={calendarHeight}
          components={{
            toolbar: CustomToolbar,
          }}
          onSelectEvent={event => {
            const { _id } = event;
            router.push(`/event/${_id}`);
          }}
        />
      </Box>
    </Box>
  );
}

const styles = {
  outerWrapper: {
    p: [2, 4, 8],
  },
  innerWrapper: {
    maxW: 1200,
    mx: 'auto',
  },
  calendar: {
    height: 600,
  },
};
