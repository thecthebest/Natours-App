const express = require('express');

const app = express();

const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/tours-simple.json`)
);

app.use(express.json());

const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours: tours
        }
    });
};

const createTour = (req, res) => { 
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

getTour = (req, res) => {
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

const updateTour = (req, res) => {
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

const deleteTour = (req, res) => {
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

// Route for '/' url + method with route Handler function
app.get('/api/v1/tours', getAllTours);

// Route for '/' url + method with route Handler function
app.post('/api/v1/tours', createTour);

// Route for '/:id' url + method with route Handler function
app.get('/api/v1/tours/:id', getTour);

// Route for '/:id' url + method with route Handler function
app.patch('/api/v1/tours/:id', updateTour);

// Route for '/:id' url + method with route Handler function
app.delete('/api/v1/tours/:id', deleteTour);

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});