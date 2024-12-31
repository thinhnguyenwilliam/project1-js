const productService = require('../../services/admin/productService');

class ProductController {
  async getAllProducts(req, res) {
    //{{API_PREFIX-1}}api/admin/products?status=active&keyword=iPhone X

    
    const products = await productService.getAllProducts(req.query);
    res.status(200).json(products);
  }


}


module.exports = new ProductController();
