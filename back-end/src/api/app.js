const express = require('express');
const errorMiddleware = require('../middleware/errorMiddleware');
const auth = require('../auth/validadeJWT');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(auth, express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(routes);

app.use(errorMiddleware);

module.exports = app;
