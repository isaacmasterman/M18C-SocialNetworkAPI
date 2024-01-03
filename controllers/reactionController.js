// controllers/reactionController.js
const Thought = require('../models/Thought');

const reactionController = {
  // Add a reaction to a thought
  addReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    )
    .then(thought => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this ID!' }))
    .catch(err => res.status(400).json(err));
  },

  // Remove a reaction from a thought
  removeReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
    .then(thought => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this ID!' }))
    .catch(err => res.status(400).json(err));
  }
};

module.exports = reactionController;
