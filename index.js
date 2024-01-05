require('dotenv').config();

const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const placesRoutes = require('./routes/places');

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'City Explorer API',
      description: 'API for the City Explorer app',
      contact: {
        name: 'Amador Cuenca',
        email: 'amador.cuenca@aurea.com'
      },
      servers: ['http://localhost:3000']
    }
  },
  apis: ['index.js', `${__dirname}/routes/*.js`]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

let feedback = [];

app.use('/api', placesRoutes);

/**
 * @swagger
 * /api/feedback:
 *  post:
 *    description: Takes an email and a comment and stores it in memory
 *    responses:
 *      '200':
 *        description: A successful response
 */
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
