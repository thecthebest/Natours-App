const express = require('express');

const router = express.Router();

const tourController = require('../controllers/tourController');


// Route for '/'
router.route('/')
.get(tourController.getAllTours)
.post(tourController.createTour)

// Route for '/:id'
router.route('/:id')
.get(tourController.getTour)
.patch(tourController.updateTour)
.delete(tourController.deleteTour);

module.exports = router;