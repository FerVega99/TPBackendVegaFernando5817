const productoCtrl = require('./../controllers/producto.controller');
const express = require('express'); 
const router = express.Router();

router.get('/', productoCtrl.getProductos); 
router.post('/', productoCtrl.createProducto); 
router.get('/:destacado', productoCtrl.getProducto); 
router.put('/:id', productoCtrl.updateProducto); 
router.delete('/:id', productoCtrl.deleteProducto);

module.exports = router;