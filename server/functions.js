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
	let results = {};
	if(results[temper]){
		results[temper] = results[temper] + 1;
	}
	else{
		results[temper] = 1;
	}
	return results;
}
module.exports.handleSubmit = handleSubmit;
