var express = require('express');
var router = express.Router();
const exemplesController = require('../controllers/exemplesController');

router.get('/', exemplesController.index);
router.post('/', exemplesController.create);
router.put('/:id', exemplesController.update);
router.delete('/:id', exemplesController.delete);
module.exports = router;