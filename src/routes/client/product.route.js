const express = require('express');
const productController = require('../../controllers/client/userController');

const router = express.Router();

router.post('/', productController.createUser); // POST /api/users
router.get('/', productController.getAllUsers); // GET /api/users
router.get('/:id', productController.getUserById); // GET /api/users/:id
router.put('/:id', productController.updateUser); // PUT /api/users/:id
router.delete('/:id', productController.deleteUser); // DELETE /api/users/:id

module.exports = router;
