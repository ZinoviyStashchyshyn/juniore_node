const userService = require('../services/users.service');

module.exports = {
  checkIsUserPresent: (req, res, next) => {
    const { userId } = req.params;

    const userById = userService.findOneById(userId);

    if (!userById) {
      throw new Error('user is not found');
    }
    req.user = userById;
    next();
  }
};
