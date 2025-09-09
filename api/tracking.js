import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metode tidak diizinkan" });
  }

  try {
    const { tracking_number, carrier_code } = req.body;

    const response = await fetch("https://api.trackingmore.com/v4/trackings/realtime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Tracking-Api-Key": process.env.TRACKINGMORE_API_KEY,
      },
      body: JSON.stringify({
        tracking_number,
        carrier_code,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Gagal koneksi ke server TrackingMore" });
  }
}
