const express = require('express');
const axios = require('axios');
const expressHandlebars  = require('express-handlebars');
const port = process.env.PORT || 3000;

const functions = require('./functions');

var app = express();
var hbs = expressHandlebars({
	extname: '.hbs',
	defaultLayout: false
});

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
	res.render('home');
});

app.get('/quiz/:qstn', (req, res) => {
	let results = functions.handleSubmit(req.body.temper);
	res.render('quiz', {question: req.params.qstn, results: JSON.stringify(results)});
});

// app.post('/quiz/quiz-submission', (req, res) => {
// 	let results = functions.handleSubmit(req.body.temper);
// 	res.render('quiz', {results: JSON.stringify(results)});
// });


app.listen(port);
