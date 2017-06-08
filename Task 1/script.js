//created "form" element

var form = document.createElement('form');
form.setAttribute('name', 'login');

//created input of Age

var inputAge = document.createElement('input');
inputAge.setAttribute('type', 'text');
inputAge.setAttribute('name', 'age');
inputAge.setAttribute('placeholder', 'Enter your age here');

//created input of User Name

var inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'username');
inputName.setAttribute('placeholder', 'Enter your user_name here');

//created input of Date

var inputDate = document.createElement('input');
inputDate.setAttribute('type', 'text');
inputDate.setAttribute('name', 'date');
inputDate.setAttribute('placeholder', 'Enter today date here');

//created input of Submit

var inputSubmit = document.createElement('input');
inputSubmit.setAttribute('type', 'submit');
inputSubmit.setAttribute('value', 'Validate Me');

//Added inputs' elements to form element

form.appendChild(inputAge);
form.appendChild(inputName);
form.appendChild(inputDate);
form.appendChild(inputSubmit);

//Added form element to body element

document.body.appendChild(form);

//Validated inputs

inputSubmit.addEventListener("click", validateForm);


   function validateForm(click) {
   click.preventDefault();
   	var age = inputAge.value,
    		name = inputName.value,
    		date = inputDate.value,
    		submit = inputSubmit.value;
  
    //validation age
	    if (isNaN(age) || age < 2 || age > 110) {
	        alert("You should enter you age in correct numbers or Daggett'll kill you!!!");
	        return false;
	    }
  
    //validation name
	    if (!(name.indexOf("user_") == 0)) {
	        alert("You should enter you name in 'user_' form or Daggett'll kill you!!!!");
	        return false;
	    } 

     //validation date
    var todayDate = new Date(),
        day= todayDate.getDate(),
	      month = todayDate.getMonth() + 1,
	      year = todayDate.getFullYear();
	    if (day < 10) {
	    	day = "0" + day;
	    }
	    if (month < 10) {
	    	month = "0" + month;
	    }
	  var fullDate = day + "/" + month + "/" + year;
	    if (date !== fullDate) {
	        alert("You should enter today's date in format: DD/MM/YYYY or Daggett'll kill you!!!");
	        return false;
	    }
	  alert("You entered a right date so Angry Beavers became Happy Beavers!!!")
	  happyBeavers();
}
  
  function happyBeavers() {
    document.body.style.backgroundImage = "url('http://orig14.deviantart.net/ef78/f/2011/077/8/f/norbert_and_daggett_by_fantasyfreak_fangirl-d3bxil0.png')";
  }




	 

		

