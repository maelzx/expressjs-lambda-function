'use strict'
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();

app.use(bodyParser.json());

app.get('/test', function (req, res) {

	//just a default message to test it is responding
	res.send(process.env.TEST_MESSAGE);
});

module.exports = app
