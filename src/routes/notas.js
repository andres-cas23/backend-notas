const express = require('express');
const router = express.Router();
const controller = require('../controllers/notasController');

/**
 * @swagger
 * tags:
 *   name: Notas
 *   description: Gestión de notas
 */

/**
 * @swagger
 * /api/notas/{cedula}:
 *   get:
 *     summary: Consultar notas de un estudiante por cédula
 *     tags: [Notas]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notas del estudiante
 *       404:
 *         description: No se encontraron notas
 */
router.get('/:cedula', controller.getByCedula);

/**
 * @swagger
 * /api/notas:
 *   post:
 *     summary: Registrar notas de un estudiante
 *     tags: [Notas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cedula:
 *                 type: string
 *               materia_id:
 *                 type: integer
 *               nota1:
 *                 type: number
 *               nota2:
 *                 type: number
 *               nota3:
 *                 type: number
 *               nota4:
 *                 type: number
 *     responses:
 *       201:
 *         description: Notas registradas
 */
router.post('/', controller.create);

module.exports = router;