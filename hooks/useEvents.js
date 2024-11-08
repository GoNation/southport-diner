import { useEffect, useState } from 'react';
import config from 'content/config/config.json';
import { normalizeEvents } from 'helpers/eventNormalizer';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';

/**
 * Custom hook to fetch and normalize event data for a given business ID.
 * @param {string} bizId - The business ID for which events are to be fetched.
 * @returns {Object} An object containing the events array and the loading state.
 */
const useEvents = (bizId, includeRecurringInstances = false) => {
  // Fallback to config business ID if bizId is not provided
  const businessId = bizId || config?.businessId || '';

  // Early return if no business ID is provided
  if (!businessId) {
    return { events: [], isLoading: false };
  }

  const [clientFetchedEvents, setClientFetchedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to fetch events data
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const { eventsData } = await fetchGoNationData({
          events: true,
          useJSONP: true,
          menuPL: true,
          businessId,
        });

        if (eventsData.specialEventsData && eventsData.recurringEventsData) {
          const allEvents = [
            ...(eventsData.specialEventsData?.events || []),
            ...(eventsData.recurringEventsData?.events || []),
          ];
          const normalizedClientEvents = normalizeEvents(
            allEvents,
            includeRecurringInstances
          );
          if (includeRecurringInstances) {
            setClientFetchedEvents(normalizedClientEvents);
          } else {
            setClientFetchedEvents(
              normalizedClientEvents.filter(event => !event.isRecurring)
            );
          }
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        // Handle error state as needed
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [businessId]); // Dependency array includes businessId to refetch when it changes

  return {
    events: clientFetchedEvents,
    isLoading,
  };
};

export default useEvents;
