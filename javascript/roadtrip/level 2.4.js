//Task1
function multiplyTrio(op1, op2, op3){
	return op1*op2*op3;
}
multiplyTrio(3, 2, 4);

//Task2
multiplyTrio(8, 4, 10);

//Task3
function maxOfTwo(number1, number2){
	return (number1 > number2)? number1 : number2;
}

maxOfTwo(2, 5);

//Task4
function mystery(x, y){
	return (4 * x * y) + (3 * y + 5);
}

//Task5
function feedPerRanger(sheeps, rangers){
	var food = sheeps * 2;

	if (rangers > 0){
			var amountPerRanger = food/rangers;
		alert("Each Park ranger should load " + amountPerRanger + " lbs of feed today");
	}
	else{
		alert("There are no Park Rangers to feed the sheeps");
	}
}

feedPerRanger(20, 2);

//Task6
function changePowerTotal(totalPower, generatorID, status, currentPower){
	if(status === "on"){
		totalPower += currentPower;
		alert("Generator #" + generatorID + " is now on, adding " + currentPower + "MW, for a total of " + totalPower + "MW!");
	}
	else if (status === "off"){

		totalPower -= currentPower;
		if (totalPower < 0) totalPower = 0; //Avoid negative totalPower

		alert("Generator #" + generatorID + " is now off, adding " + currentPower + "MW, for a total of " + totalPower + "MW!");
	}
	return totalPower;
}