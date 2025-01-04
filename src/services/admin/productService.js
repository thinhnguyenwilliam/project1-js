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
  
  async changeMultiStatus(ids, status) {
    // Update all products matching the IDs in the array
    await Product.updateMany(
      { _id: { $in: ids } }, // Match products with IDs in the array
      { status: status }     // Update their status
    );
  
    return {
      message: "Status updated successfully for multiple products",
    };
  }
  
  // async deleteProduct(id) {
  //   await Product.deleteOne({ _id: id }); // Hard delete
  //   return {
  //     message: "Product deleted successfully (hard delete)",
  //   };
  // }
  

  async deleteProduct(id) {
    await Product.updateOne(
      { _id: id },
      { deleted: true } // Soft delete
    );
  
    return {
      message: "Product deleted successfully (soft delete)",
    };
  }

  async deleteMultipleProducts(ids) {
    // Soft delete: Mark products as deleted
    await Product.updateMany(
      { _id: { $in: ids } },
      { deleted: true }
    );
  
    return {
      message: `${ids.length} products marked as deleted.`,
    };
  }

  async getDeletedProducts() {
    const deletedProducts = await Product.find({ deleted: true });
    return {
      pageTitle: "Recycle Bin - Deleted Products",
      products: deletedProducts,
    };
  }

  async restoreProduct(id) {
    await Product.updateOne({ _id: id }, { deleted: false });
    return {
      message: "Product restored successfully",
    };
  }
  
  
}
module.exports = new ProductService();
