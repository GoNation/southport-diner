// pages/api/events.js
import axios from 'axios';

export default async function handler(req, res) {
  const { businessId } = req.query;
  const baseUrl = process.env.NEXT_PUBLIC_DATA_PROD_GONATION_BASE_URL;

  const specialEventsUrl = `${baseUrl}/events?profile_id=${businessId}`;
  const recurringEventsUrl = `${baseUrl}/recurringevents?profile_id=${businessId}`;

  try {
    // Fetch both special events and recurring events in parallel
    const [specialEventsResponse, recurringEventsResponse] = await Promise.all([
      axios.get(specialEventsUrl),
      axios.get(recurringEventsUrl),
    ]);

    const specialEventsData = specialEventsResponse.data;
    const recurringEventsData = recurringEventsResponse.data;

    res.status(200).json({
      specialEventsData,
      recurringEventsData: recurringEventsData || {},
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching event data' });
  }
}
