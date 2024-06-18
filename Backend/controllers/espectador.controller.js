const Espectador = require('../models/espectador');
const espectadorCtrl = {}

espectadorCtrl.getEspectadores = async (req,res) => {
    var espectadores = await Espectador.find();
    res.json(espectadores);
}

espectadorCtrl.createEspectador = async (req,res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.json({
            'status': '1',
            'msg': 'Espectador Agregado Exitosamente'
        })
    } 
    catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al agregar'
        })
    }
}

espectadorCtrl.getEspectador = async (req,res) => {
    try {
        const espectador = await Espectador.findById(req.params.id);
        res.json(espectador);
    }
    catch (error) {
        res.status(400).json({ 
            'status': '0',
            'msg': 'Error al obtener los espectadores' 
        });
    }
}

module.exports = espectadorCtrl;