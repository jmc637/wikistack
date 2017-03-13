const express = require('express');
const parser = require('body-parser');
const models = require('../models');
var urlParsed = parser.urlencoded({extended: false});

const Page = models.Page;
const User = models.User; 

// router to connect index.js to the server listener
// on app.js
const wikiRouter = express.Router();
module.exports = wikiRouter;
// static routing
wikiRouter.use(express.static('../public'));

wikiRouter.get('/', function(req, res, next) {
  res.send('You are at home page.');
});

wikiRouter.post('/', function(req, res, next) {
    // STUDENT ASSIGNMENT:
    // add definitions for `title` and `content`
    var page = Page.build({
        title: req.body.title,
        content: req.body.page_content,
    });

    // STUDENT ASSIGNMENT:
    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise or it can take a callback.
    page.save().then(function(result){
        res.send(page);
    });
    // -> after save -> res.redirect('/');
});

wikiRouter.get('/add', function(req, res, next) {
  res.render( 'addpage', {} );
});