// pages/api/reserve.js

import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, partySize, date, time, phone } = req.body;

  if (!name || !partySize || !date || !time || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // ✅ MOCK Toast API call instead of real one:
    // const toastResponse = await fetch('https://api.toasttab.com/your-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.TOAST_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     name,
    //     partySize,
    //     date,
    //     time,
    //     phone
    //   }),
    // });

    // if (!toastResponse.ok) {
    //   console.error(await toastResponse.text());
    //   return res.status(500).json({ error: 'Toast API call failed' });
    // }

    // const toastData = await toastResponse.json();

    // ✅ Fake success response instead:
    const toastData = {
      id: 'mock-toast-id-12345',
      status: 'confirmed'
    };

    // ✅ Save to MongoDB
    const client = await clientPromise;
    const db = client.db('haoshiguang'); // your DB name
    const reservations = db.collection('reservations');

    const mongoResult = await reservations.insertOne({
      name,
      partySize,
      date,
      time,
      phone,
      toastId: toastData.id, // from the fake mock
      createdAt: new Date()
    });

    console.log('Inserted reservation:', mongoResult.insertedId);

    return res.status(200).json({ success: true, toastId: toastData.id });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}
