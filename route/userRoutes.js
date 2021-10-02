const express = require('express');

const router = express.Router();

const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This route is not yet defined'
    });
};

const createUser = (req, res) => { 
    res.status(500).json({
        status: 'err',
        message: 'This route is not yet defined'
    });
};

getUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This route is not yet defined'
    });
};

const updateUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This route is not yet defined'
    });
};

const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This route is not yet defined'
    });
};

// Route for '/'
router.route('/')
.get(getAllUsers)
.post(createUser)

// Route for '/:id'
router.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser);

module.exports = router;