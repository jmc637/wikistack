const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();

const nunjucks = require('nunjucks');

const wikiRouter = require('./routes/wiki.js');
const morgan = require('morgan');

const models = require('./models');

//setting up middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(urlencodedParser);

// Set up the database and make sure the server
// is listening to it 
app.use('/wiki/', wikiRouter);

// nunjucks
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});


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