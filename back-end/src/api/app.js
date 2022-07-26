const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middleware/errorMiddleware');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(express.static('public'));
app.use(errorMiddleware);

module.exports = app;
