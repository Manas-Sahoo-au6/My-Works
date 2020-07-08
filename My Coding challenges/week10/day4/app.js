var express = require('express');
var router = require('./routes/routes');

var app = express();
app.listen(3000);

app.use(express.json());
app.use(router);