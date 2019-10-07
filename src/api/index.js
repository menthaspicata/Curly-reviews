'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorHandler');
const contactsController = require('./components/contacts/controller');
const config = require('./config');
const corsOptions = cors({
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(corsOptions);
app.use(errorHandler());

app.post('/review', contactsController.handleContactRequest);
app.get('/review', contactsController.getReviewsFromSite);
app.get('/review-ua', contactsController.getReviewsFromUAChat);
app.get('/review-rus', contactsController.getReviewsFromRUSChat);

app.listen(config.port, () => {
    console.info(`api [on] port: ${config.port}`);
});

