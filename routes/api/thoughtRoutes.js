const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');
const reactionController = require('../../controllers/reactionController');

router.route('/')
    .get(thoughtController.getAllThoughts)
    .post(thoughtController.createThought);

router.route('/:thoughtId')
    .get(thoughtController.getThoughtById)
    .put(thoughtController.updateThought)
    .delete(thoughtController.deleteThought);

// Reaction routes as sub-routes of thoughts
router.route('/:thoughtId/reactions').post(reactionController.addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(reactionController.removeReaction);

module.exports = router;
