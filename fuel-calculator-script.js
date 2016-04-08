/*
	This is a script that I have made to calculate the cost of a journey depending on what fuel you are using. 
*/

function fuelCost() {
    
    // Below are the variables that I have implemented that will be calculated in the case statement below. 
    var numOfMiles = document.getElementById('miles').value;
    var typeOfFuel = document.getElementById('fuel').value;
    var petrol = 1.01;
	var diesel = 1.05;
	var cost;

    // Here is the switch/case statement that takes the price of the fuel and changes them into a float variable. 
    switch (typeOfFuel) {
		
		case('petrol'):
			cost = parseFloat(numOfMiles * petrol).toFixed("2");
			break;
			//toFixed 2 is the set the number by two decimal places. 
		
		case ('diesel'):
			cost = parseFloat(numOfMiles * diesel).toFixed("2");
			break;
			
		//default here incase something does go wrong with the code during the switch/case statement
		default:
			cost = "Please check the details that you have entered."
			break;
		
	} // End of switch statement
	
	//To display a £ symobl, use the code of \u00A3 inside speech marks.
	// \n is to set a new line within the text
	
	alert('The journey of' + numOfMiles + 'miles, using ' + '\n' + typeOfFuel + 'will cost' + '\n' + '\u00A3' + cost);
	// \u00A3 is the uni code to show the pound sign
	
} // End of fuelCost() function.

function init() {
		document.getElementById('calc').onclick = fuelCost;

} // End of init() function.

// loads up the init function of window open. 
window.onload = init;