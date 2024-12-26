const Product = require('../../models/productModel');

class ProductService {
  async getAllProducts(queryParams) {
    // Initialize filter criteria
    const criteriaFilter = {
      deleted: false,
    };

    // Add status filter if provided in query parameters
    if (queryParams.status) {
      criteriaFilter.status = queryParams.status;
    }

    // Fetch filtered products from the database
    const updatedProducts = await Product.find(criteriaFilter);

    return {
      pageTitle: "Danh sách sản phẩm admin",
      products: updatedProducts,
    };

  }


}

module.exports = new ProductService();
