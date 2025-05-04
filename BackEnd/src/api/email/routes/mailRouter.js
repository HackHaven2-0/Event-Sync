const express = require('express');
const { authenticate } = require('../../Users/middlewares/authMiddleware.js');
const { default: mailController } = require('../controllers/mailController.js');

const EmailRouter = express.Router();

// Define routes for email-related operations
EmailRouter.post('/send', authenticate ,mailController);

module.exports = EmailRouter;