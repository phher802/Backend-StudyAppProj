//jshint esversion:6
const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();
const apiPort = 3000;

app.use(express.urlencoded({extended: false}));
app.use(cors);
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
res.send("Hello World");
})

app.listen(apiPort, () => console.log('server running on port ${apiPort}')) 
