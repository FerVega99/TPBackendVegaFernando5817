const Producto = require('../models/producto');
const productoCtrl = {}

productoCtrl.getProductos = async (req,res) => {
    var productos = await Producto.find();
    res.json(productos);
}

productoCtrl.createProducto = async (req,res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            'status': '1',
            'msg': 'Producto Agregado Exitosamente'
        })
    } 
    catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al agregar'
        })
    }
}

productoCtrl.deleteProducto = async (req,res) => {
    try {
        await Producto.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Producto Eliminado Exitosamente'
        })
    } 
    catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar'
        })
    }
}

productoCtrl.updateProducto = async (req,res) => {
    const vproducto = new Producto(req.body);
    try {
        await Producto.updateOne({_id: req.body._id}, vproducto);
        res.json({
            'status': '1',
            'msg': 'Producto Modificado Exitosamente'
        })
    }
    catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al modificar'
        })
    }

}

productoCtrl.getProducto = async (req, res) => { 
    try {
        const productosDestacados = await Producto.find({ destacado: true });
        res.json(productosDestacados);
    } 
    catch (error) {
        res.status(400).json({ 
            'status': '0',
            'msg': 'Error al obtener los productos destacados' 
        });
    }
}


module.exports = productoCtrl;