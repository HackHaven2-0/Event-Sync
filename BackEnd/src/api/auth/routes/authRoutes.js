import express from 'express';
import sendOtpController from '../controllers/sendOtpController.js';
import verifyOtpController from '../controllers/verifyOtpController.js';
import { signup } from '../../user/controllers/userController.js';



const authRouter = express.Router();

authRouter.post('/otp',sendOtpController);
authRouter.post('/verify',verifyOtpController,signup);



export default authRouter;