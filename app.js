let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let routes = require('./asgn-router');

var port = 8080;

app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost/asgn-api', {
    useNewUrlParser: true
});
var db = mongoose.connection;

if (!db) {
    console.log("Error connecting to database")
} else {
    console.log("Database connected successfully")
}

app.use('/asgn-api', routes);

app.get('/', (req, res) => res.send('Welcome to asgn-api'));

app.listen(port, function () {
    console.log("Running asgn-api on port " + port);
});