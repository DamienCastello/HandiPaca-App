var express = require('express');
var router = express.Router();
const handicapPlacesController = require('../controllers/handicapPlacesController');

router.get('/', handicapPlacesController.index);
router.post('/', handicapPlacesController.create);
router.put('/:id', handicapPlacesController.update);
router.delete('/:id', handicapPlacesController.delete);
module.exports = router;