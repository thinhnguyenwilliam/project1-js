//const userService = require('../services/userService');

class HomeController 
{
  async viewHomePage(req, res) 
  {
    //const users = await userService.getAllUsers();
    //res.status(200).json(users);
    res.status(200).json({
      state_baby: 'Home is coming',
      nhớ_em: 'Ngân, Giang,...'
    });
  }
}

module.exports = new HomeController();
