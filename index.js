require('dotenv').config();

const express = require('express');
const placesRoutes = require('./routes/places');

const app = express();

app.use(express.json());

let feedback = [];

app.use('/api', placesRoutes);

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
