var express = require('express');
var router = express.Router();
const facilitiesController = require('../controllers/facilitiesController');

router.get('/', facilitiesController.index);
router.get('/:id', facilitiesController.show);
router.post('/', facilitiesController.create);
router.put('/:id', facilitiesController.update);
router.delete('/:id', facilitiesController.delete);
module.exports = router;