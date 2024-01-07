const router = require('express').Router();
const userController = require('../../controllers/userController');
const friendController = require('../../controllers/friendController');

router.route('/').get(userController.getAllUsers).post(userController.createUser);

router.route('/:userId')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

// Friend routes as sub-routes of users
router.route('/:userId/friends/:friendId')
  .post(friendController.addFriend)
  .delete(friendController.removeFriend);

module.exports = router;
