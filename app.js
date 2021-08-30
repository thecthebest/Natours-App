const express = require('express');

const app = express();

const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/tours-simple.json`)
);