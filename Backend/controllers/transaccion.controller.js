const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req,res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async (req,res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion Agregada Exitosamente'
        })
    } 
    catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al agregar'
        })
    }
}

transaccionCtrl.getTransaccionEmail = async (req, res) => { 
    const { email } = req.params;
    try {
        const transaccionCliente = await Transaccion.find({ emailCliente: email });
        res.json(transaccionCliente);
    } 
    catch (error) {
        res.status(400).json({ 
            'status': '0',
            'msg': 'Error al obtener los productos destacados' 
        });
    }
}

transaccionCtrl.getTransaccionMonedas = async (req, res) => { 
    try {
        const transaccionMoneda = await Transaccion.find({ monedaOrigen: req.params.origen, monedaDestino: req.params.destino });
        res.json(transaccionMoneda);
    } 
    catch (error) {
        res.status(400).json({ 
            'status': '0',
            'msg': 'Error al obtener los productos destacados' 
        });
    }
}



// transaccionCtrl.deleteTransaccion = async (req,res) => {
//     try {
//         await transaccion.deleteOne({_id: req.params.id});
//         res.json({
//             'status': '1',
//             'msg': 'Transaccion Eliminada Exitosamente'
//         })
//     } 
//     catch (error) {
//         res.status(400).json({
//             'status': '0',
//             'msg': 'Error al eliminar'
//         })
//     }
// }





module.exports = transaccionCtrl;