const express = require('express');

const app = express();

const morgan = require('morgan');

const toursRoute = require('./route/tourRoutes');
const usersRoute = require('./route/userRoutes');

if (process.env.NODE_ENV === 'development') {
    // Middleware for logging hhtp requests
    app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

// middleware for routes
app.use('/api/v1/tours', toursRoute);
app.use('/api/v1/users', usersRoute);

module.exports = app;