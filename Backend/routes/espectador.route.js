const espectadorCtrl = require('./../controllers/espectador.controller');
const express = require('express'); 
const router = express.Router();

router.get('/', espectadorCtrl.getEspectadores); 
router.post('/', espectadorCtrl.createEspectador); 
router.get('/:id', espectadorCtrl.getEspectador);

module.exports = router;