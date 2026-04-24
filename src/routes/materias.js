const express = require('express');
const router = express.Router();
const controller = require('../controllers/materiasController');

/**
 * @swagger
 * tags:
 *   name: Materias
 *   description: Gestión de materias
 */

/**
 * @swagger
 * /api/materias:
 *   get:
 *     summary: Obtener todas las materias
 *     tags: [Materias]
 *     responses:
 *       200:
 *         description: Lista de materias
 */
router.get('/', controller.getAll);

module.exports = router;