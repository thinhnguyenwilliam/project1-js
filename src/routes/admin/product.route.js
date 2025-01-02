const express = require('express');
const productController = require('../../controllers/admin/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.patch('/change-status', productController.changeStatus);

module.exports = router;
