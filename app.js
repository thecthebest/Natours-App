const express = require('express');

const app = express();

const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/tours-simple.json`)
);

// Route for '/' url + method with route Handler function
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours: tours
        }
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});