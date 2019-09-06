const listAllProperties = (arr, property) => {
	arr.forEach((obj) => {
		console.log(property, obj[property]);		
	});
}
module.exports.listAllProperties = listAllProperties;

const randomDog = (arr) => {
	let dog = arr[Math.floor(Math.random() * (arr.length - 0)) + 0];
	for(prop in dog){
		console.log(dog[prop])
	}
}
module.exports.randomDog = randomDog;

const handleSubmit = (temper) => {
	var results = require('./sharedData').results.data;
	if(temper !== undefined){
		if(results[temper]){
			results[temper] = results[temper] + 1;
		}
		else{
			results[temper] = 1;
		}
		return results;
	}
}
module.exports.handleSubmit = handleSubmit;

const findProminentTraits = (data) => {
	let firstTrait, secondTrait, thirdTrait;

	let firstValue, secondValue, thirdValue;
	firstValue = secondValue = thirdValue = 0;

	for(trait in data){
		if(data[trait] > thirdValue){
			if(data[trait] > secondValue){
				if(data[trait] > firstValue){
					thirdTrait = secondTrait;
					thirdValue = secondValue;
					secondTrait = firstTrait;
					secondValue = firstValue;
					firstTrait = trait;
					firstValue = data[trait];
				}
				else{
					thirdTrait = secondTrait;
					thirdValue = secondValue;
					secondTrait = trait;
					secondValue = data[trait];
				}
			}
			else{
				thirdTrait = trait;
				thirdValue = data[trait];
			}
		}
	}

	return {firstTrait, secondTrait, thirdTrait}
}
module.exports.findProminentTraits = findProminentTraits;