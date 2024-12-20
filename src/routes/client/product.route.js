const express = require('express');
const productController = require('../../controllers/client/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
// router.post('/', productController.createUser);
// router.get('/:id', productController.getUserById);
// router.put('/:id', productController.updateUser);
// router.delete('/:id', productController.deleteUser);

module.exports = router;
