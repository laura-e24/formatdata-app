const express = require('express')
const { getFormattedFiles } = require('../controllers/filesControllers')
const router = express.Router()

/** 
 * @swagger 
 *   components: 
 *     schemas:
 *      File:
 *        type: object
 *        properties:
 *          file:
 *            type: string
 *          lines: 
 *            type: array
 *        example: 
 *          file: "test10.csv"
 *          lines: [{ "text": "ruHiwzcRKUhbY", "number": "56877", "hex": "711b9dc1p423b8f9afc17830ae81b789" }]
 */ 

/** 
 * @swagger 
 *   /files/data: 
 *     get:
 *      summary: Retrieves all available files in JSON format.
 *      tags: [Files data]
 *      responses:
 *        200:
 *          description: Files were retrieved and formatted successfully.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/File'
 */ 

router.get('/', getFormattedFiles)

module.exports = router