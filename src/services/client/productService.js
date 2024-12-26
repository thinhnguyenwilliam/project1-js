const Product = require('../../models/productModel');

class ProductService {
  async getAllProducts() {
    const products = await Product.find({ deleted: false });

    // Add new calculated field for each product
    const updatedProducts = products.map((product) => {
      const priceNew = (product.price * (100 - product.discountPercentage) / 100).toFixed(0);
      return { ...product._doc, priceNew }; // Spread to ensure immutability
    });

    return {
      pageTitle: "Danh Sach san pham",
      products: updatedProducts,
    };
  }

  // async createUser(userData) {
  //   return await User.create(userData);
  // }

  // async getUserById(userId) {
  //   return await User.findById(userId);
  // }

  // async updateUser(userId, updatedData) {
  //   return await User.findByIdAndUpdate(userId, updatedData, { new: true });
  // }

  // async deleteUser(userId) {
  //   return await User.findByIdAndDelete(userId);
  // }
}

module.exports = new ProductService();
