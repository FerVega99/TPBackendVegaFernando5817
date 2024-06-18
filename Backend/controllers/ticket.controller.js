const Ticket = require('../models/ticket');
const ticketCtrl = {}

ticketCtrl.getTickets = async (req,res) => {
    var tickets = await Ticket.find().populate("espectador");
    res.json(tickets);
}

ticketCtrl.createTicket = async (req,res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.json({
            'status': '1',
            'msg': 'Ticket Agregado Exitosamente'
        })
    } 
    catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al agregar'
        })
    }
}

ticketCtrl.deleteTicket = async (req,res) => {
    try {
        await Ticket.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Ticket Eliminado Exitosamente'
        })
    } 
    catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar'
        })
    }
}

ticketCtrl.updateTicket = async (req,res) => {
    const vticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({_id: req.body._id}, vticket);
        res.json({
            'status': '1',
            'msg': 'Ticket Modificado Exitosamente'
        })
    }
    catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al modificar'
        })
    }

}

ticketCtrl.getTicketEspectador = async (req, res) => { 
    try {
        const ticketsEspectador = await Ticket.find({ categoriaEspectador: req.params.categoria }).populate('espectador');
        res.json(ticketsEspectador);
    } 
    catch (error) {
        res.status(400).json({ 
            'status': '0',
            'msg': 'Error al obtener los tickets' 
        });
    }
}


module.exports = ticketCtrl;