const express = require('express');
const { authenticate } = require('../../Users/middlewares/authMiddleware.js');
const { default: mailController } = require('../controllers/mailController.js');

const router = express.Router();

// Define routes for email-related operations
router.post('/send', authenticate ,mailController);

module.exports = router;