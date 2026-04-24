const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Notas Estudiantiles',
      version: '1.0.0',
      description: 'Microservicios para gestión de estudiantes y notas',
    },
    servers: [
      { url: 'https://backend-notas-jggh.onrender.com', description: 'Producción' },
      { url: 'http://localhost:3000', description: 'Local' },
    ],
  },
  apis: ['./src/routes/*.js'],
};

module.exports = swaggerJsdoc(options);