const express = require('express');
const app = express();

// Supermarkets endpoint
app.get('/api/supermarkets', (req, res) => {
  res.send('Supermarkets data goes here');
});

// Entertainment/Attractions endpoint
app.get('/api/entertainment', (req, res) => {
  res.send('Entertainment data goes here');
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
