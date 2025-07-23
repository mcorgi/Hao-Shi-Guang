// pages/api/hello.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('sample_mflix'); //replace
  const collection = db.collection('movies'); //replace
  const data = await collection.find({}).limit(5).toArray();

  res.status(200).json({ data });
}
