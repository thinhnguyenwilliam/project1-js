const productService = require('../../services/admin/productService');

class ProductController {
  async getAllProducts(req, res) {
    //{{API_PREFIX-1}}api/admin/products?status=active&keyword=iPhone X 
    const products = await productService.getAllProducts(req.query);
    res.status(200).json(products);
  }


  async changeStatus(req, res) {
    //{{API_PREFIX-1}}api/admin/products/change-status
    const { id, status } = req.body;
    const result = await productService.changeStatus(id, status);
    res.status(200).json(result);
  }



}
module.exports = new ProductController();
