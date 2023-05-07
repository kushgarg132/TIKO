import express from 'express';
import { getTicketByPnr } from '../controllers/tickets.js';

const router = express.Router();

router.get('/tickets/:pnr', getTicketByPnr);

export default router;
