/*
	Create a JavaScript function to validate an HTML form
	which contains two inputs - one for first name and
	a second for surname.
*/

function validateForm() {
	
	// Get references to the form elements
	var fname = document.getElementById('fname');
	var contactMessage = document.getElementById('contactMessage');
	//Starting by having no errors
	var ferror = 0;
	var cerror = 0;
	var fNameMessage;
	var cContactMessage;
	//start of the if statement
	if (fname.value.length == 0)//if statement incase of errors
	{
		fNameMessage = 'Please Enter your first name';
		ferror = 1;
	}//of of if fname
	else 
	{
		fNameMessage = 'You have filled in your first name';
		ferror = 0;
	}//end of first else fname
	
	if (contactMessage.value.length == 0)//if statement incase of errors
	{
		cContactMessage = 'Please Enter a message';
		cerror = 1;
	}// end of if 
	else 
	{
		cContactMessage = 'You have filled in a message';
		cerror = 0;
	}//end of second else 
	
	if ((ferror = 1) || (cerror = 1)) // || (double pipe) means 'or'
	{
		// \n = new line \t = new tab
		alert('form message: ' + '\n\t' + fNameMessage + '\n\t' + cContactMessage);
		return false; //stops button from working
	}//of of if errors
	else
	{
			return true //allows button to work
	}//end of if ferror
	document.getElementById('submit').onclick.alert('Please ensure all information is correct before continuing')	
		
} // End of the function definition

	function sendOff() {
    alert("Have you made sure that all information is correct?");
	}//end of function

function init() {
document.getElementById('submit').onclick = validateForm;

	
} // End of init function

// Assign an event handler to the window's load event.
window.onload = init;
	