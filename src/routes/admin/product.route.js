const express = require('express');
const productController = require('../../controllers/admin/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.patch('/change-status', productController.changeStatus);
router.patch('/change-multi-status', productController.changeMultiStatus);
router.delete('/:id', productController.deleteProduct);
router.delete('/delete-multiple', productController.deleteMultipleProducts);
router.get('/recycle-bin', productController.getDeletedProducts);
router.patch('/restore/:id', productController.restoreProduct);



module.exports = router;
