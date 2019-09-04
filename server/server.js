const express = require('express');
const axios = require('axios');
const expressHandlebars  = require('express-handlebars');
const port = process.env.PORT || 3000;

const functions = require('./functions');

var results = require('./sharedData.js').results;
var questions = require('./sharedData.js').questions;

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

app.get('/quiz/:questionNumber', (req, res) => {

	let questionNumber = Number(req.params.questionNumber);
	let questionIndex = questionNumber - 1;
	let nextQuestion = questionNumber + 1;

	functions.handleSubmit(req.query.temper);

	if(questions[questionIndex] === undefined){
		res.send('Yay the results are in');
	}
	else{
		var questionData = {
			question: questions[questionIndex].question,
			answer1: questions[questionIndex].answer1,
			answer2: questions[questionIndex].answer2,
			answer3: questions[questionIndex].answer3,
			questionNumber,
			nextQuestion,
			results: JSON.stringify(results.data)
		}

		res.render('quiz', questionData);
	}
});

app.get('/reset', (req, res) => {
	results.reset();
	res.render('home');
});

app.get('/quiz/result-screen', (req, res) => {
	res.send('Yay the results page');
});

app.listen(port);
