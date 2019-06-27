var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoriesRouter = require('./routes/categories');
var placesRouter = require('./routes/handicapPlaces');
var examplesRouter = require('./routes/examples');
var facilitiesRouter = require('./routes/facilities');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/categories', categoriesRouter);
app.use('/api/v1/places', placesRouter);
app.use('/api/v1/examples', examplesRouter);
app.use('/api/v1/facilities', facilitiesRouter);

module.exports = app;
