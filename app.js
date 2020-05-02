let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var port = 8080;

app.use(bodyParser.urlencoded({
    extended: true
}))