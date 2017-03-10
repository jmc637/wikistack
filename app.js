const express = require('express');
const app = express();

const nunjucks = require('nunjucks');

const routes = require('./routes');
const morgan = require('morgan');

const models = require('./models');

//setting up middleware
app.use(morgan('dev'));
//app.use(bodyParser.json());

// Set up the database and make sure the server
// is listening to it 

models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    app.listen(3000, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);