const express = require('express');
const axios = require('axios');
const expressHandlebars  = require('express-handlebars');
const port = process.env.PORT || 3000;

const functions = require('./functions');

var questions = require('./sharedData.js').questions;

var app = express();
var hbs = expressHandlebars({
	extname: '.hbs',
	defaultLayout: false
});

app.engine('.hbs', hbs);
app.set('view engine', '.hbs');
app.use(express.urlencoded());


app.get('/:questionNumber?', (req, res) => {
	let questionNumber = Number(req.params.questionNumber) || 1;
	res.render('home', {questionNumber});
});

app.get('/quiz/question/:questionNumber', (req, res) => {
	var results = require('./sharedData.js').results;
	let questionNumber = Number(req.params.questionNumber);
	let questionIndex = questionNumber - 1;
	let nextQuestion = questionNumber + 1;
	let mostMatched = {};

	functions.handleSubmit(req.query.temper);

	if(questions[questionIndex] === undefined){
		let prominentTraits = functions.findProminentTraits(results.data);

		axios.get(`https://api.thedogapi.com/v1/breeds`)
			.then((response) => {
				mostMatched = functions.compareTemperamentData(response.data, prominentTraits);
				res.render('results', {
					results: JSON.stringify(results.data), 
					prominentTraits: JSON.stringify(prominentTraits),
					mostMatched: JSON.stringify(mostMatched)
				});
				results.reset();
			})
			.catch(() => {
				console.log('No doggies :(')
			});

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

app.get('/quiz/reset', (req, res) => {
	var results = require('./sharedData.js').results;
	results.reset();
	res.render('home', {questionNumber: 1});
});

app.listen(port);
