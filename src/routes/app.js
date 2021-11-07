const express = require('express');
const app_controller = require('../controllers/app')
const app = express.Router();

app.get('/', app_controller.index);
app.get('/ver', app_controller.ver);

app.post('/insert', app_controller.insert);



module.exports = app;