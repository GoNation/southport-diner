// pages/api/stories.js
import axios from 'axios';

export default async function handler(req, res) {
  const { businessId } = req.query;
  const baseUrl = process.env.NEXT_PUBLIC_GONATION_API_BASE_URL;

  try {
    const response = await axios.get(`${baseUrl}/${businessId}/aboutArticles`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stories' });
  }
}
