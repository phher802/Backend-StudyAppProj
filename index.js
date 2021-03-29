//jshint esversion:6
const express = require('express');
const app = express();
const cors = require('cors');
const apiPort = 3000

app.use(express.urlendcoded())
app.use(cors)
app.use(express.json())

app.get('/', (req, res) => {
res.send("Hello World")
})

app.listen(apiPort, () => console.log('server running on port ${apiPort}')) 
