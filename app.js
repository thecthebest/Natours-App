const express = require('express');

const app = express();

const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/tours-simple.json`)
);

app.use(express.json());

// Route for '/' url + method with route Handler function
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours: tours
        }
    });
});

// Route for '/' url + method with route Handler function
app.post('/api/v1/tours', (req, res) => {
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
});

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});