const userService = require('../services/users.service');

module.exports = {
  getAllUsers: (req, res) => {
    const users = userService.findAll();
    res.json(users);
  },
  createUser: (req, res) => {
    userService.insertUser(req.body);
    res.json('succes');
  },
  deleteUserById: (req, res) => {
    const { user } = req;
    res.status(204).json(user);
  },
  getUserByID: (req, res) => {
    const { user } = req;
    res.json(user);
  }
};
