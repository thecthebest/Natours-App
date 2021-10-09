const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

// Route for '/'
router.route('/')
.get(userController.getAllUsers)
.post(userController.createUser)

// Route for '/:id'
router.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);

module.exports = router;