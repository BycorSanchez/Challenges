//Task1
var num = 10;
while (num > 0) {
    if (num % 2 === 0) console.log(num);
    num--;
}

//Task2
var parkIsOpen = true;
var message = parkIsOpen ? "Welcome to the Badlands National Park! Try to enjoy your stay." : "Sorry, the Badlands are particularly bad today. We're closed!"
console.log(message);

//Task3
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
	
	if (numSheep > 10000){
		numSheep /=2;
		console.log("Removing " + numSheep + " sheep from the population.");
	}

	numSheep *= 4;
	console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}


//Task4
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
	
	if (monthNumber % 4 === 0){
		var removedSheeps = numSheep * 0.75;
		numSheep -= removedSheeps;
		console.log("Removing " + removedSheeps + " sheep from the population.");
	}
	else if (numSheep > 10000){
		numSheep /=2;
		console.log("Removing " + numSheep + " sheep from the population.");
	}

	numSheep *= 4;
	console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

//Task5
var totalGen = 10;
var totalMW = 0;

var currentMW = 0;

for(var generator = 1; generator < 20; generator++){
	if (generator % 2 === 0){
		currentMW = (generator < 5)? 62 : 124;
		totalMW += currentMW;
		console.log("Generator #" + generator + " is on, adding " + currentMW + " MW, for a total of " + totalMW + " MW!");
	}
	else{
		console.log("Generator #" + generator + " is off");
	}
}