import express from 'express';
import { createEvent } from '../controllers/eventController.js';
import authEvent from '../middlewares/authEvent.js';


import { getAllEvents, getEventById, updateEvent, deleteEvent, getEventsByOrganizer } from '../controllers/eventController.js';
const EventRouter = express.Router();

EventRouter.post('/',authEvent,createEvent);
EventRouter.get('/',authEvent,getAllEvents);
EventRouter.get('/:id',authEvent,getEventById);
EventRouter.put('/:id',authEvent,updateEvent);
EventRouter.delete('/:id',authEvent,deleteEvent);
EventRouter.get('/organizer/event',authEvent,getEventsByOrganizer);

export default EventRouter;
