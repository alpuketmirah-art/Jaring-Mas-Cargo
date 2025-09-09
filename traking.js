// api/tracking.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { tracking_number, carrier_code } = req.body;

  try {
    const response = await fetch("https://api.trackingmore.com/v3/trackings/realtime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.TRACKINGMORE_API_KEY, // API Key dari .env
      },
      body: JSON.stringify({ tracking_number, carrier_code })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Gagal menghubungi TrackingMore" });
  }
}
