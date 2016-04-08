/* 
	Create a JavaScript function to validate an HTML form
	which contains five inputs;
	these are first for user personal detail and then for company details.
*/

function validateForm() {
    
    // Get references to the form elements:
    var fname = document.getElementById('fname');
    var sname = document.getElementById('sname');
	var pass = document.getElementById('pass');

	
    // Validate the text inputs
    if ( (fname.value.length > 0) && (sname.value.length > 0) && (pass.value.length > 0) ) {
        return true; // If OK process the form
    }//end of if
	
	else {
        alert('Please complete the form!');
        return false; // If not OK do not process the form
    }//end of else
      
} // End of validateForm() function.

function validateCo() {
	var comp = document.getElementById('comp'); //setting comp variable
	var compCo = document.getElementById('compCo');//setting compCo variable
	
	if ((comp.value.length > 0) && (compCo.value.length > 0))
	{
		return true;
	}//end of if
	
	else
	{
		alert('Please enter the details required for the Company');
		return false;
	}//end of else
}//end of validateCo() function

// Create a function to attach actions to events (buttons)
function init() {
		loginForm = document.getElementById('loginForm').onsubmit = validateForm;
		loginForm = document.getElementById('loginForm').onsubmit = validateCo;

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;