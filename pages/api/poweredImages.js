// pages/api/poweredImages.js
import axios from 'axios';

export default async function handler(req, res) {
  const { businessId } = req.query;
  const baseUrl = process.env.NEXT_PUBLIC_DATA_GONATION_BASE_URL;

  try {
    const response = await axios.get(
      `${baseUrl}/poweredImages?profile_id=${businessId}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching powered images' });
  }
}
