var express = require('express');
var app = express();
var dummyInsurance = require('./src/controllers/dummyInsurance');

const HOST = process.env.HOST || 'localhost';
const LISTEN_PORT = process.env.LISTEN_PORT || 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/public/index.html" );
});

app.get('/getDummyInsurance/:id', dummyInsurance.getDummyInsurance);

app.listen(LISTEN_PORT, function () {
    console.log(`Server running at http://${HOST}:${LISTEN_PORT}`);
});
