const express = require('express');
const router = express.Router();
const fetchData = require('../services/geoapifyService');

/**
 * @swagger
 * /api/supermarkets:
 *  get:
 *    description: Returns a list of supermarkets within the specified bounding box
 *    responses:
 *      '200':
 *        description: A list of supermarkets within the specified bounding box
 */
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
  
/**
 * @swagger
 * /api/entertainment:
 *  get:
 *    description: Returns a list of entertainment locations within the specified bounding box
 *    responses:
 *      '200':
 *        description: A list of entertainment locations within the specified bounding box
 */
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
  
/**
 * @swagger
 * /api/parks:
 *  get:
 *    description: Returns a list of parks within the specified bounding box
 *    responses:
 *      '200':
 *        description: A list of parks within the specified bounding box
 */
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
  
/**
 * @swagger
 * /api/restaurants:
 *  get:
 *    description: Returns a list of restaurants within the specified bounding box
 *    responses:
 *      '200':
 *        description: A list of restaurants within the specified bounding box
 */
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