const express = require('express');
const router = express.Router();
const controller = require('../controllers/estudiantesController');

/**
 * @swagger
 * tags:
 *   name: Estudiantes
 *   description: Gestión de estudiantes
 */

/**
 * @swagger
 * /api/estudiantes:
 *   get:
 *     summary: Obtener todos los estudiantes
 *     tags: [Estudiantes]
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /api/estudiantes/{cedula}:
 *   get:
 *     summary: Buscar estudiante por cédula
 *     tags: [Estudiantes]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Estudiante encontrado
 *       404:
 *         description: Estudiante no encontrado
 */
router.get('/:cedula', controller.getByCedula);

/**
 * @swagger
 * /api/estudiantes:
 *   post:
 *     summary: Registrar un estudiante
 *     tags: [Estudiantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cedula:
 *                 type: string
 *               nombre:
 *                 type: string
 *               correo:
 *                 type: string
 *               celular:
 *                 type: string
 *     responses:
 *       201:
 *         description: Estudiante registrado
 */
router.post('/', controller.create);

module.exports = router;