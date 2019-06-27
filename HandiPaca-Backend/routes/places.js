var express = require('express');
var router = express.Router();
const placesController = require('../controllers/placesController');

router.get('/', placesController.index);
router.get('/:id', placesController.show);
router.post('/', placesController.create);
router.put('/:id', placesController.update);
router.delete('/:id', placesController.delete);
module.exports = router;