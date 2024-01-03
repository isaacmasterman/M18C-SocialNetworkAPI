// controllers/friendController.js
const User = require('../models/User');

const friendController = {
  // Add a new friend to a user's friend list
  addFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { friends: req.params.friendId } },
      { new: true, runValidators: true }
    )
    .populate('friends')
    .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user found with this ID!' }))
    .catch(err => res.status(400).json(err));
  },

  // Remove a friend from a user's friend list
  removeFriend(req, res) {
    User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
    .populate('friends')
    .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user found with this ID!' }))
    .catch(err => res.status(400).json(err));
  }
};

module.exports = friendController;
