// Get all the DOM elements and save it to variable
// user
const rockU = document.getElementById('rock-u');
const paperU = document.getElementById('paper-u');
const scissorU = document.getElementById('scissor-u');

const imageU = document.getElementById('user-choice');
const comRstU = document.getElementById('user-result');

// com
const rockC = document.getElementById('rock-c');
const paperC = document.getElementById('paper-c');
const scissorC = document.getElementById('scissor-c');

const imageC = document.getElementById('com-choice');
const comRstC = document.getElementById('com-result');

//common variable
const resultM = document.getElementById('in-rst');


// First Part
let player = document.getElementById('name-c');
let UserName = prompt("Enter Your name");
player.innerHTML = UserName;

// Second Part
function comClick() {
	alert("Please select from your section");
}
// com Part

const choice = ['rock', 'paper', 'scissor'];

function comPlay() {
	let result = choice[Math.floor(Math.random() * choice.length)];

	if (result == 'rock') {
		imageC.setAttribute("src" ,"image/Rock.png");
		comRstC.innerHTML = "Computer Selected Rock";
	} else if (result == 'paper')
	{
		imageC.setAttribute("src" ,"image/Paper.png");
		comRstC.innerHTML = "Computer Selected Paper";
	} else {
		imageC.setAttribute("src" ,"image/Scissor.png");
		comRstC.innerHTML = "Computer Selected Scissor";
	}
	return result;
}

// Result

function playGround(userSelection, comSelection) {
	
	if (userSelection === comSelection) {
		resultM.innerHTML = "It's a tie";
	} else if(userSelection == 'rock') {
		if (comSelection == 'scissor') {
			resultM.innerHTML = "You Win! Rock beats scissors.";
		} else{
			resultM.innerHTML = "You Lose! Paper beats rock.";
		}
	} else if (userSelection == 'paper') {
		if (comSelection == 'rock') {
			resultM.innerHTML = "You Win! Paper beats rock";
		} else{
			resultM.innerHTML = "You Lose! Scissors beat paper.";
		}
	} else{
		if (comSelection == 'paper') {
			resultM.innerHTML = "You Win! Scissors beat paper.";
		} else{
			resultM.innerHTML = "You Lose! Rock beats scissors.";
		}
	}

}

// function

function game(userChoice) {
	let player = userChoice;

	if (player == 'rock') {
		imageU.setAttribute("src" ,"image/Rock.png");
		comRstU.innerHTML = UserName + " Selected Rock";
	} else if (player == 'paper')
	{
		imageU.setAttribute("src" ,"image/Paper.png");
		comRstU.innerHTML = UserName + " Selected Paper";
	} else {
		imageU.setAttribute("src" ,"image/Scissor.png");
		comRstU.innerHTML = UserName + " Selected Scissor";
	}

	let comp = comPlay();
	playGround(player, comp);
}

// EventListener
rockU.addEventListener("click", function() {
			game('rock');
		});
		
paperU.addEventListener("click", function() {
			game('paper');
		});
		
scissorU.addEventListener("click", function() {
			game('scissor');
		});