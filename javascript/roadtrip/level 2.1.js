//Task1
var num = 10; 
while(num > 0){
	console.log(num);
	num--;
}

//Task2
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while(monthNumber <= monthsToPrint){
	numSheep *= 4;
	console.log("There will be " + numSheep + " after " + monthNumber + " month(s)!");
	monthNumber++;
}

//Task3
for(var i = 10; i > 0; i--){
	console.log(i);
}

//Task4
var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <13; monthNumber++){
	numSheep *= 4;
	console.log("There will be " + numSheep + " after " + monthNumber + " month(s)!");
}

//Task5
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while(currentGen < 5){
	totalMW += 62;
	console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW);
	currentGen++;
}

for(;currentGen <= totalGen; currentGen++){
	totalMW +=124;
	console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW);
}
