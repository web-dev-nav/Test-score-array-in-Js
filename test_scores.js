"use strict";
const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

/* function is responsible for pushing data into array and validation */
function addScore(){
	var name= document.querySelector("#name").value;
	var score = document.querySelector("#score").value;

	if(name == '' ){
		document.querySelector("#name_msg").innerHTML = "Please enter a name";
	}else if(score == ''){
		document.querySelector("#score_msg").innerHTML = "Please enter a score";
	}else if(score < 0 || score > 100){
		document.querySelector("#score_msg").innerHTML = "Score must be between 0 and 100";
	}else if(isNaN(score)){
		document.querySelector("#score_msg").innerHTML = "Invalid Score!";
	}else{
		      
		names.push(document.querySelector("#name").value); //add name into array
		scores.push(document.querySelector("#score").value); //add score into array as a string
		// move focus
	    document.querySelector("#name").focus();
		cleartxt();//clearing errors
	}
  
} 

/* function is responsible displaying avg score and highest */
function displayResults(){

	//Getting highest score with name from array	
	var high = scores[0];
	for (var i = 0; i < scores.length; i++) {
		if (high < scores[i] ) {
			high = scores[i];
		}
		var nameofperson = names[scores.indexOf(high)];
	}

	//getting average score from array
	var total = 0;
	for (var j = 0; j < scores.length; j++) {
	total += parseInt(scores[j]);  //adding parstInt to convert string array to numbers
	}
    var average = total / scores.length; // average = sum of scores / number of scores
	 //appending into ID's
	document.querySelector("#results").innerHTML = "<h2>Result</h2> <p>Average score: "+ average.toFixed(0) +" <br>High Score = "+ nameofperson +" with a score of "+ high + "</p>";
}

/* function is responsible displaying arrays  */
function displayScores() {

  //appending into ID's
  var myList = '<ul>';
	for (var i = 0; i < names.length; i++) {
		myList += "<li>"+ names[i] + "&nbsp;&nbsp;-&nbsp;&nbsp;" + scores[i] + "</li>";
	}
	myList += '</ul>'; document.querySelector("#scores").innerHTML = "<h2>Scores</h2> <p>"+ myList +"</p>";
}


//clearing error fields
function cleartxt() {
	document.querySelector("#name_msg").innerHTML = "";
	document.querySelector("#score_msg").innerHTML = "";
}


// add event handlers
document.addEventListener("DOMContentLoaded", () => {

	document.querySelector("#add").addEventListener("click", addScore);
	document.querySelector("#display_results").addEventListener("click", displayResults);
	document.querySelector("#display_scores").addEventListener("click", displayScores);
	// move focus
	document.querySelector("#name").focus();
});