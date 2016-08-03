var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

var options = {
    root: __dirname + '/',
    dotfiles: 'deny',
};

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.post('/', function (req, res) {
    res.sendFile('public/index.html', options);
});

app.get('*', function (req, res) {
    res.status(404).send('404 not found');
});

var port = process.env.PORT || 3000;
var url = 'http://localhost:' + port;
app.listen(port, function () {
    console.log('Simple server listening on port %s! Open %s in your browser to see the result.', port, url);
});
