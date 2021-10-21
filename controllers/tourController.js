const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/tours-simple.json`)
);

exports.checkId = (req, res, next, value) => {
    if (req.params.id * 1 > tours.length) {
        // Send a response and return
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
};

exports.checkBody = (req, res, next) => {
    console.log(req.body.name);
    if (!req.body.name || !req.body.price) {
        // Send a response and return
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        });
    }
    next();
};

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours: tours
        }
    });
};

exports.createTour = (req, res) => { 
    // Creating a new id number
    const newId = tours[tours.length - 1].id + 1;
    // creating a new object by mergining
    const newTour = Object.assign({id: newId}, req.body);
    // adding a new element
    tours.push(newTour);
    // Writing to the json file
    fs.writeFile(`${__dirname}/dev-data/tours-simple.json`, JSON.stringify(tours), (err) => {
        console.log("saved");
        res.status(201).json({
            status: 'success',
            data: {
                tours: newTour
            }
        });
    });
};

exports.getTour = (req, res) => {
    // Extract and convert to a number
    const id = req.params.id * 1;
    // Return the element that matches id 
    const tour = tours.find(el => el.id === id);
    res.status(200).json({
        status: 'success',
        data: {
            tour: tour
        }
    });
};

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated Tour...>'
        }
    });
};

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
};