const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();

app.options('*', cors());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

app.use(express.json());

const estudiantesRoutes = require('./routes/estudiantes');
const materiasRoutes = require('./routes/materias');
const notasRoutes = require('./routes/notas');

app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/materias', materiasRoutes);
app.use('/api/notas', notasRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Notas funcionando ✓' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Swagger en http://localhost:${PORT}/api-docs`);
});