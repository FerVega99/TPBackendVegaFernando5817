const ticketCtrl = require('./../controllers/ticket.controller');
const express = require('express'); 
const router = express.Router();

router.get('/', ticketCtrl.getTickets); 
router.post('/', ticketCtrl.createTicket); 
router.get('/:categoria', ticketCtrl.getTicketEspectador); 
router.put('/:id', ticketCtrl.updateTicket); 
router.delete('/:id', ticketCtrl.deleteTicket);

module.exports = router;