//Task1
var parkIsOpen = false;

if (parkIsOpen){
	alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
}
else{
	alert("Sorry, the Badlands are particulary bad today. We're closed!");
}

//Task2
var age;
var isNumber = false;

do{
	var stringAge = prompt("What's your age, sr?");
	age = Number(stringAge);
	isNumber = !isNaN(age);

	if(!isNumber){
		console.log("I'm sorry sr, that's not an age. I'm expecting a number");
	}
	else{
		console.log("I could have never guess that you were " + age + " years old :O");
	}
}while(!isNumber);


//Task3
var userAge = prompt("Whats your age, user?");

var ageIsCorrect = confirm("You entered " + userAge + ". Is it correct?");
if (ageIsCorrect){
	console.log("Fineee, let's go on then");
}
else{
	console.log("I'm sorry to hear that :(");
}

//Task4
var userAge;
var ageIsCorrect;

do{
	userAge = prompt("Whats your age, user?");
	ageIsCorrect = confirm("You entered " + userAge + ". Is it correct?")

}while(!ageIsCorrect);

alert("Great, your age is logged as " + userAge + ".");
