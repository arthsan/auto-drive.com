require('dotenv').config();
require('./configs/passport');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

mongoose
  .connect(process.env.MONGODB_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();


// CORS
app.use(cors({
  // this could be multiple domains/origins, but we will allow just our React app
  credentials: true,
  origin: ['http://localhost:3000'],
}));

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true,
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// SESSIONS

app.use(session({
  secret: 'some secret goes here',
  resave: true,
  saveUninitialized: true,
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const auth = require('./routes/auth');
const index = require('./routes/index');
const newCar = require('./routes/upload');


// UPLOAD IMAGE
app.use('/', require('./routes/file-upload-image'));

app.use('/', index);
app.use('/auth', auth);
app.use('/', newCar);

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(`${__dirname}/public/index.html`);
});


module.exports = app;
