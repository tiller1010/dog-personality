const express = require('express');
const axios = require('axios');
const expressHandlebars  = require('express-handlebars');
const port = process.env.PORT || 3000;

const functions = require('./functions.js');

var app = express();
var hbs = expressHandlebars({extname: '.hbs'});

app.engine('.hbs', hbs);
app.set('view engine', '.hbs');
app.use(express.urlencoded());

axios.get(`https://api.thedogapi.com/v1/breeds`)
	.then((response) => {
		// functions.listAllProperties(response.data, 'name');
		functions.randomDog(response.data);
	})
	.catch(() => {
		console.log('No doggies :(')
	});


app.get('/', (req, res) => {
	res.render('home', {layout: false});
});

app.get('/quiz', (req, res) => {
	res.render('quiz', {layout: false});
});

app.post('/quiz/quiz-submission', (req, res) => {
	res.send('You are ' + req.body.temper);
});


app.listen(port);
