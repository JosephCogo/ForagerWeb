		var email = document.getElementById("email");

		email.addEventListener('blur', function(){
					if(email.value.length < 8){
			email.parentNode.classList.add("error");
			//validate = false;
		}else{
			email.parentNode.classList.remove("error");
		}

		});

function validateForm(){
	/*
		bool variable to signifiy if it is a valid form.
		if an element is not valid, set to false, and returns false to the
		onsubmit for the form
	*/
	var validate = true;


	/*
		email validation using a regex. Would be better to define
		a the input element as email, but apparently there are problems
		with IE
	*/
		


  
		console.log(email.value.match(emailregexp));



	/*
		simple password validation, checks for a length 
		less than 8 characters 
	*/
		var password = document.getElementById("password");

		if(password.value.length < 8){
			password.parentNode.classList.add("error");
			validate = false;
		}else{
			password.parentNode.classList.remove("error");
		}

	/*
		select box validation. If no value is selected, the value is
		"" so we just check that
	*/
		var colour = document.getElementById("colour");

		if(colour.value == ""){
			colour.parentNode.classList.add("error");
			validate = false;
		}else{
			colour.parentNode.classList.remove("error");
		}


		var animals = document.getElementsByName("animal");

		var boxesChecked = 0;

		for(var i = 0; i < animals.length; i++){
			if(animals[i].checked)
				boxesChecked++;
		}
		if(boxesChecked < 2){
			//animals[0].parentNode.classList.add("error");
			console.log(animals[0].parentNode);
			validate = false;
		}else{
			animals[0].parentNode.classList.remove("error");
		}

		if(document.getElementById("tiger").checked){
			//if()

		}

		return validate;
	}