import Ticket from '../models/Ticket.js';

export const getTicketByPnr = async (req, res) => {
  const { pnr } = req.params;

  try {
    const ticket = await Ticket.findOne({ pnr });
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    return res.status(200).json(ticket);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const saveTicket = async (req, res) => {
  
};