const Product = require('../../models/productModel');

class ProductService {
  async getAllProducts(queryParams) {
    // Initialize filter criteria
    const criteriaFilter = {
      deleted: false,
    };

    // Dynamically add filters based on query parameters
    for (const key in queryParams) {
      if (queryParams[key]) {
        if (key === "status") {
          criteriaFilter.status = queryParams[key];
        } else if (key === "keyword") {
          criteriaFilter.title = { $regex: queryParams[key], $options: "i" };
        }
      }
    }

    const page = parseInt(queryParams.page, 10) || 1;
    const limit = parseInt(queryParams.limit, 10) || 4;
    const skip = (page - 1) * limit;

    // Get total count of products matching the filter
    const totalProducts = await Product.countDocuments(criteriaFilter);

    // Fetch paginated and filtered products from the database
    const updatedProducts = await Product.find(criteriaFilter)
      .skip(skip)
      .limit(limit);

    return {
      pageTitle: "Danh sách sản phẩm admin",
      products: updatedProducts,
      totalProducts, // Total count of matching products
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
    };
  }

  async changeStatus(id, status) {
    await Product.updateOne(
      { _id: id },
      { status: status }
    );
    return {
      message: "Status updated successfully",
    };
  }
  

  
}
module.exports = new ProductService();
