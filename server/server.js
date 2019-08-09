const express = require('express');
const axios = require('axios');
const expressHandlebars  = require('express-handlebars');
const port = process.env.PORT || 3000;

var app = express();
var hbs = expressHandlebars({extname: '.hbs'});

app.engine('.hbs', hbs);
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
	res.render('home', {layout: false});
});

app.listen(port);
