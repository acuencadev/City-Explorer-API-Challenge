const axios = require('axios');
const Location = require('../models/Location');

async function fetchData(category, rect, limit) {
  const url = `https://api.geoapify.com/v2/places?categories=${category}&filter=rect:${rect}&limit=${limit}&apiKey=${process.env.API_KEY}`;
  const response = await axios.get(url);
  
  const locations = response.data.features.map(feature => {
    const { properties } = feature;
    const name = properties.name;
    const address = properties.formatted;
    const lat = properties.lat;
    const lon = properties.lon;
    const categories = properties.categories;
    
    return new Location(name, address, lat, lon, categories);
  });
  
  return locations;
}

module.exports = fetchData;
