// pages/api/menuInventory.js
import axios from 'axios';

export default async function handler(req, res) {
  const { businessId, menuInventory = 1 } = req.query;
  const baseUrl = process.env.NEXT_PUBLIC_DATA_PROD_GONATION_BASE_URL;

  const url = `${baseUrl}/pl/get?profile_id=${businessId}&powerlistId=powered-list-${menuInventory}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching menu inventory data' });
  }
}
