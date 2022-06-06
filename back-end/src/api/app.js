const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middleware/errorMiddleware');
const auth = require('../auth/validadeJWT');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(auth, express.static('public'));
app.use(routes);

app.use(errorMiddleware);

module.exports = app;
