const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/tours-simple.json`)
);

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
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: tour
        }
    });
};

exports.updateTour = (req, res) => {
    // Extract and convert to a number
    const id = req.params.id * 1;
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated Tour...>'
        }
    });
};

exports.deleteTour = (req, res) => {
    // Extract and convert to a number
    const id = req.params.id * 1;
    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    res.status(204).json({
        status: 'success',
        data: null
    });
};