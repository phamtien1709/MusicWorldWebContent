const express = require('express');
const config = require('./config.json');

const app = express();

app.use(express.static(__dirname + '/'));

const port = process.env.PORT || config.port;

app.listen(port, () => {
    console.log("Your server is online at " + port);
});