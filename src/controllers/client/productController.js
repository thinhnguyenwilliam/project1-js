const productService = require('../../services/client/productService');

class ProductController {
  async getAllProducts(req, res) {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  }

  // async createUser(req, res) {
  //   try {
  //     const user = await userService.createUser(req.body);
  //     res.status(201).json(user);
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }



  // async getUserById(req, res) {
  //   try {
  //     const user = await userService.getUserById(req.params.id);
  //     if (!user) {
  //       return res.status(404).json({ error: 'User not found' });
  //     }
  //     res.status(200).json(user);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }

  // async updateUser(req, res) {
  //   try {
  //     const user = await userService.updateUser(req.params.id, req.body);
  //     if (!user) {
  //       return res.status(404).json({ error: 'User not found' });
  //     }
  //     res.status(200).json(user);
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // }

  // async deleteUser(req, res) {
  //   try {
  //     const user = await userService.deleteUser(req.params.id);
  //     if (!user) {
  //       return res.status(404).json({ error: 'User not found' });
  //     }
  //     res.status(204).send();
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }
}

module.exports = new ProductController();
