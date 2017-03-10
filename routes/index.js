const express = require('express');
const parser = require('body-parser');
var urlParsed = parser.urlencoded({extended: false});

// router to connect index.js to the server listener
// on app.js
const router = express.Router();

// static routing
router.use(express.static('../public'));