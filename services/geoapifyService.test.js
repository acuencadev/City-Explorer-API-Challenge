const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const fetchData = require('./geoapifyService');
const Location = require('../models/Location');

test('fetchData returns an array of Location objects', async () => {
  const mock = new MockAdapter(axios);

  mock.onGet().reply(200, {
    features: [
      {
        properties: {
          name: 'Test Supermarket',
          formatted: 'Test Address',
          lat: 123,
          lon: 456,
          categories: ['commercial.supermarket'],
        },
      },
    ],
  });

  const data = await fetchData('commercial.supermarket', 'rect', 20);

  expect(Array.isArray(data)).toBe(true);

  expect(data[0]).toBeInstanceOf(Location);

  expect(data[0].name).toBe('Test Supermarket');
  expect(data[0].address).toBe('Test Address');
  expect(data[0].lat).toBe(123);
  expect(data[0].lon).toBe(456);
  expect(data[0].categories).toEqual(['commercial.supermarket']);
});
