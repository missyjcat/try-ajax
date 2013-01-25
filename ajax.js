// Function that creates Ajax object (a new XMLHttpRequest() instance) and tests for browser support

function ajaxFunction(){ 
	var ajaxRequest;  
	
	try{
		ajaxRequest = new XMLHttpRequest(); // This will work for Opera 8.0+, Firefox, Safari
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}

	// Ajax stuff starts now!

	// Create function that processes response from server
	ajaxRequest.onreadystatechange = function() {

		// When readyState is 4, that means a response is complete. So we're going to check to see if readyState is 4 and when it is, we will do things:
		if(ajaxRequest.readyState == 4) {

			// These are the things we will do:
			
			// Set the "time" input field to the server's time
			document.myForm.time.value = ajaxRequest.responseText;
		}
	};

	// This statement sends a request by "opening" a connection to the server-side script file.
	// There are 3 arguments of the open method: the method (GET or POST), the URL of the server
	// side script, and whether async is true or false.
	ajaxRequest.open("GET", "get_time.php", true);

	// Send this request to the server; only argument is a string that is only used when POST is 
	// used in the request.
	ajaxRequest.send();

};