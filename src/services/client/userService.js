const User = require('../../models/userModel');

class UserService {
  async createUser(userData) {
    return await User.create(userData);
  }

  async getAllUsers() 
  {
    return await User.find();
  }

  async getUserById(userId) {
    return await User.findById(userId);
  }

  async updateUser(userId, updatedData) {
    return await User.findByIdAndUpdate(userId, updatedData, { new: true });
  }

  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }
}

module.exports = new UserService();
