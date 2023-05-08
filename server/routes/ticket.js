import express from 'express';
import { getTicketByPnr,saveTicket } from '../controllers/tickets.js';

const router = express.Router();

router.post("/save",saveTicket);
router.get('/pnr/:id', getTicketByPnr);

export default router;
