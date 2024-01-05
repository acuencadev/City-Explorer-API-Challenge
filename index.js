const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.json());

let feedback = [];

async function fetchData(category, rect, limit) {
  const url = `https://api.geoapify.com/v2/places?categories=${category}&filter=rect:${rect}&limit=${limit}&apiKey=${process.env.API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}

// Supermarkets endpoint
app.get('/api/supermarkets', async (req, res) => {
  const { rect } = req.query;
  let { limit } = req.query;

  if (!rect) {
    return res.status(400).send('Missing required parameters: rect and limit');
  }

  limit = limit || 20;

  try {
    const data = await fetchData('commercial.supermarket', rect, limit);
    res.send(data);
  } catch (error) {
    console.error(error); // Log the error to the console
    res.status(500).send('An error occurred while fetching supermarkets data');
  }
});

// Entertainment/Attractions endpoint
app.get('/api/entertainment', async (req, res) => {
  const { rect } = req.query;
  let { limit } = req.query;

  if (!rect) {
    return res.status(400).send('Missing required parameters: rect and limit');
  }

  limit = limit || 20;

  try {
    const data = await fetchData('entertainment,tourism.attraction', rect, limit);
    res.send(data);
  } catch (error) {
    console.error(error); // Log the error to the console
    res.status(500).send('An error occurred while fetching entertainment data');
  }
});

// Parks endpoint
app.get('/api/parks', async (req, res) => {
  const { rect } = req.query;
  let { limit } = req.query;

  if (!rect) {
    return res.status(400).send('Missing required parameters: rect and limit');
  }

  limit = limit || 20;

  try {
    const data = await fetchData('national_park', rect, limit);
    res.send(data);
  } catch (error) {
    console.error(error); // Log the error to the console
    res.status(500).send('An error occurred while fetching parks data');
  }
});

// Restaurants endpoint
app.get('/api/restaurants', async (req, res) => {
  const { rect } = req.query;
  let { limit } = req.query;

  if (!rect) {
    return res.status(400).send('Missing required parameters: rect and limit');
  }

  limit = limit || 20;

  try {
    const data = await fetchData('catering.restaurant', rect, limit);
    res.send(data);
  } catch (error) {
    console.error(error); // Log the error to the console
    res.status(500).send('An error occurred while fetching restaurants data');
  }
});

// User Feedback endpoint
app.post('/api/feedback', (req, res) => {
  const { email, comment } = req.body;

  if (!email || !comment) {
    return res.status(400).send('Missing required parameters: email and comment');
  }

  // Store the feedback in memory
  feedback.push({ email, comment });

  res.send('Feedback received');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
