var express = require('express');
var router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/', categoriesController.index);
router.get('/:id', categoriesController.show);
router.post('/', categoriesController.create);
router.put('/:id', categoriesController.update);
router.delete('/:id', categoriesController.delete);
module.exports = router;