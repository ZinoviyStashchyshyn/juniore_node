const router = require('express').Router();

const { userControler } = require('../controllers');
const { userMiddleware } = require('../middlewares');

router.get('/', userControler.getAllUsers);

router.post('/', userControler.createUser);

router.delete('/:userId', userControler.deleteUserById);

router.get('/:userId', userMiddleware.checkIsUserPresent, userControler.getUserByID);

module.exports = router;

console.log('route');
