const express = require('express');
const router = express.Router();
const fetchData = require('../services/geoapifyService');

// Supermarkets endpoint
router.get('/supermarkets', async (req, res) => {
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
  router.get('/entertainment', async (req, res) => {
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
  router.get('/parks', async (req, res) => {
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
  router.get('/restaurants', async (req, res) => {
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

module.exports = router;