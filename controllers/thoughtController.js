// controllers/thoughtController.js
const Thought = require('../models/Thought');
const User = require('../models/User');

const thoughtController = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then(thoughts => res.json(thoughts))
      .catch(err => {
        console.error("Error: ", err);
        res.status(500).json(err)
      });
  },

  // Get a single thought by ID
  getThoughtById(req, res) {
    Thought.findById(req.params.thoughtId)
      .then(thought => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this ID!' }))
      .catch(err => {
        console.error("Error: ", err);
        res.status(500).json(err)
      });
  },

  // Create a new thought and associate it with a user
  createThought(req, res) {
    Thought.create(req.body)
      .then(thought => {
        return User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }, { new: true });
      })
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err));
  },

  // Update a thought
  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true, runValidators: true })
      .then(thought => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this ID!' }))
      .catch(err => res.status(400).json(err));
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.thoughtId)
      .then(thought => thought ? res.json({ message: 'Thought successfully deleted' }) : res.status(404).json({ message: 'No thought found with this ID!' }))
      .catch(err => res.status(400).json(err));
  }
};

module.exports = thoughtController;
