// controllers/userController.js
const User = require('../models/User');

const userController = {
  // Get all users
  getAllUsers(req, res) {
    User.find({})
      .then(users => res.json(users))
      .catch(err => res.status(500).json(err));
  },

  // Get a single user by ID
  getUserById(req, res) {
    User.findById(req.params.userId)
      .populate('thoughts')
      .populate('friends')
      .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user found with this ID!' }))
      .catch(err => res.status(500).json(err));
  },

  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err));
  },

  // Update a user
  updateUser(req, res) {
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true, runValidators: true })
      .then(user => user ? res.json(user) : res.status(404).json({ message: 'No user found with this ID!' }))
      .catch(err => res.status(400).json(err));
  },

  // Delete a user
  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.userId)
      .then(user => user ? res.json({ message: 'User successfully deleted' }) : res.status(404).json({ message: 'No user found with this ID!' }))
      .catch(err => res.status(400).json(err));
  }
};

module.exports = userController;
