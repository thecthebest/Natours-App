const express = require('express');

const app = express();

const morgan = require('morgan');

const toursRoute = require('./route/tourRoutes');
const usersRoute = require('./route/userRoutes');

// Middleware for logging hhtp requests
app.use(morgan('dev'));

app.use(express.json());


// middleware for routes
app.use('/api/v1/tours', toursRoute);
app.use('/api/v1/users', usersRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});