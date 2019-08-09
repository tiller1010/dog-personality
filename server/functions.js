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