let name = "Solomon"

let classes = [1,2,3,4,5,6]

let classic = ['web class', 'marketing class', 'economics class']

let manUtd = ["Pogba", "Lukaku", "van Nistelrooy", "Beckham", "Scholes", "Giggs"]
manUtd[4] = manUtd[3] + " " + "Rooney"

const car = [{
	name:"Mercedes-Benz",
	series: "7",
	mileage: 45000,
},
{
	name:"BMW",
	series: "C",
	mileage: 23000,
},
{
	name:"Chevrolet",
	series: "Camaro",
	mileage: 67000
}]

console.log(car[1]["mileage"])



function adder(number1, number2)
{
	let sum = number1 + number2;
	return sum;
}

const x = 2.56;
const y = 6.76;

let totalSum = adder(x, y);

console.log(totalSum)



function greater(number1, number2) {
	if (number1 > number2){
		console.log(number1, "is the larger number")
	}

	else if (number2 > number1) {
		console.log(number2, "is the larger number")
	}

	else {
		console.log("They are both the same")
	}
}

greater(x,y);

const students = ["John", "Jane", "Bastian"];

for (let i = 0; i < car.length; i++){
	console.log(car[i].name);
}

console.log(Math.sqrt(Math.PI));
console.log(Math.round(x));

let myName = ['S', 'o', 'l', 'o', 'm', 'o', 'n'];
myName.pop();
myName.push('x');
console.log(myName);

const newName = myName.join("");
console.log(newName);

let numbers = [1, 4, 9];
let doubles = numbers.map(function(num){
	return num * 2;
})

console.log(doubles);

triples = numbers.map(function(num){
	console.log(num * 3);
});


testNumbers = [1, 4, 6, 3, 8, 6, 9, 6, 3, 7];

let smallest = 10

for(let j = 0; j < testNumbers.length; j++){

	if (testNumbers[j] < smallest){
		smallest = testNumbers[j];
		console.log("The smallest number is ",smallest);
	}
}

let biggest = 0

for(let j = 0; j < testNumbers.length; j++){

	if (testNumbers[j] > biggest){
		biggest = testNumbers[j];
		console.log("The biggest number is ",biggest);
	}
}