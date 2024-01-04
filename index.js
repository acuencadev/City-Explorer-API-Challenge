const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Supermarkets endpoint
app.get('/api/supermarkets', async (req, res) => {
  const { rect, limit } = req.query;

  if (!rect || !limit) {
    return res.status(400).send('Missing required parameters: rect and limit');
  }

  try {
    const url = `https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect:${rect}&limit=${limit}&apiKey=${process.env.API_KEY}`;
    const response = await axios.get(url);

    console.log(url);

    res.send(response.data);
  } catch (error) {
    console.error(error); // Log the error to the console
    res.status(500).send('An error occurred while fetching supermarkets data');
  }
});

// Entertainment/Attractions endpoint
app.get('/api/entertainment', async (req, res) => {
  const { rect, limit } = req.query;

  if (!rect || !limit) {
    return res.status(400).send('Missing required parameters: rect and limit');
  }

  try {
    const url = `https://api.geoapify.com/v2/places?categories=entertainment,tourism.attraction&filter=rect:${rect}&limit=${limit}&apiKey=${process.env.API_KEY}`;
    const response = await axios.get(url);

    console.log(url);

    res.send(response.data);
  } catch (error) {
    console.error(error); // Log the error to the console
    res.status(500).send('An error occurred while fetching entertainment data');
  }
});

// Parks endpoint
app.get('/api/parks', (req, res) => {
  res.send('Parks data goes here');
});

// Restaurants endpoint
app.get('/api/restaurants', (req, res) => {
  res.send('Restaurants data goes here');
});

// User Feedback endpoint
app.post('/api/feedback', (req, res) => {
  res.send('Feedback received');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
