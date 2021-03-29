//jshint esversion:6

const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/studyDB', {useNewUrlParser: true})
    .catch(e => {console.error('Connection error', e.message)}
    );

const db = mongoose.connection;

module.exports = db;