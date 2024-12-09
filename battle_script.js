// JavaScript Battle Game Project

// Add an event handler to the button element 
document.getElementById("button").onclick = startBattle;

// Definition of the startBattle() function which begins the game
function startBattle() {
	// Clear any old messages in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent = "";

	// Initial prompt for the user input that gets stored in a variable
	let action = window.prompt("As you make your way through the woods, a troll suddenly blocks your path!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nWill you BRIBE the troll?\n\nSelect your response!").toUpperCase();

	// Swicth statement to handle the player's choice
	switch(action) {
		case "FIGHT": {
			fightBattle();
			break;
		}	// end of case FIGHT

		case "RUN": {
			runBattle();
			break;
		} // end of case RUN

		case "BRIBE": {
			brideBattle();
			break;
		} // end of case BRIBE

		default: {
			window.alert("You entered: " + action + ". That is not a valid choice! Please try again!");
			startBattle();
		} // end of default case 

	} // end of SWITCH statement 

} // end of startBattle()

// Definition of the fightBattle() function
function fightBattle() {
	// Start by collecting some user responses
	let skill = window.prompt("Are you skilled in combat? (YES or NO)").toUpperCase();
	let strong = window.prompt("Do you think you're stronger than a troll? (YES or NO)").toUpperCase();

	// Logic that analyzes the responses and creates the outcomes
	if(skill === "YES" || strong === "YES") {
		// The user said YES to at least one prompt
		document.getElementById("victory").innerHTML = "You have proven your strength and skill! <br/>You survived!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Try Again?";
	} else {
		// The user didn't answer YES to both questions 
		document.getElementById("defeat").innerHTML = "You have shown your skill issue<br/>You have been defeated!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
	}

} // end of fightBattle()

// Definition of the runBattle() function
function runBattle() {
	// Collect the user input, test it for NULL then turn it upper case
	let fast = window.prompt("Are you fast? (YES or NO)");

	if(fast != null) {
		fast = fast.toUpperCase();
		console.log(fast);
	} else {
		window.alert("Please type something!");
		runBattle();
		return;
	}

	// Now that we know we have somehting input, analyze the variable to determine the outcome
	if(fast === "YES") {
		document.getElementById("victory").innerHTML = "Your speed has saved you!<br/>But, can you outrun your fears and doubts?";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Try Again?";
	} else {
		document.getElementById("defeat").innerHTML = "You tried to run when you're not fast?<br/>You have lost!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
	}
} // end of runBattle()

// Definition of the bribeBattle() function
function bribeBattle() {
	// Variable to store the user input
	let money = window.prompt("You have the pay the troll-toll\nDo you have any money? (YES or NO)").toUpperCase();

	// Check the response of YES / NO
	if(money === "YES") {
		// User said they have money, now ask for the amount
		let amount = window.prompt("How much money do you have?\nPLease enter a NUMERIC VALUE!")
		// Nested if statement to check the amount 
		if(amount > 50) {
			// User has the correct amount of money 
			document.getElementById("victory").innerHTML = "Great job! The troll is pleased!<br/>You may pass!";
			document.getElementById("win").play();
			document.getElementById("button").text.Content = "Try Again?";
		} else {
			// User had money, just not enough of it 
			document.getElementById("defeat").innerHTML = "Sorry, the troll needs more than that!<br/>Time to pay the price!";
			document.getElementById("lose").play();
			document.getElementById("button").text.Content = "Try Again?";
		} // end of nested IF/ELSE
	} else {
		// User said they had no money
		document.getElementById("defeat").innerHTML = "No money? What were you trying to bribe with?<br/>You have lost!";
			document.getElementById("lose").play();
			document.getElementById("button").text.Content = "Try Again?";
	}
}