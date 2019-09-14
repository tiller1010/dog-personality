const express = require('express');
const axios = require('axios');
const path = require('path');
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
app.use(express.static(path.join(__dirname, 'public')));


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
					prominentTraits,
					mostMatched
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
			answer1Answer: questions[questionIndex].answer1.Answer,
			answer1Value: questions[questionIndex].answer1.Value,
			answer2Answer: questions[questionIndex].answer2.Answer,
			answer2Value: questions[questionIndex].answer2.Value,
			answer3Answer: questions[questionIndex].answer3.Answer,
			answer3Value: questions[questionIndex].answer3.Value,
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