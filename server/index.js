const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/students', require('./routes/students'));
app.use('/teachers', require('./routes/teachers'));
app.use('/subjects', require('./routes/subjects'));

// Server
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
