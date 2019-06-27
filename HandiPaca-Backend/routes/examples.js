var express = require('express');
var router = express.Router();
const examplesController = require('../controllers/examplesController');

router.get('/', examplesController.index);
router.get('/:id', examplesController.show);
router.post('/', examplesController.create);
router.put('/:id', examplesController.update);
router.delete('/:id', examplesController.delete);
module.exports = router;