// Get all the DOM elements and save it to variable
// user
const rockU = document.getElementById('rock-u');
const paperU = document.getElementById('paper-u');
const scissorU = document.getElementById('scissor-u');

const imageU = document.getElementById('user-choice');
const comRstU = document.getElementById('user-result');
const scoreU = document.getElementById('score-u');

// com
const rockC = document.getElementById('rock-c');
const paperC = document.getElementById('paper-c');
const scissorC = document.getElementById('scissor-c');

const imageC = document.getElementById('com-choice');
const comRstC = document.getElementById('com-result');
const scoreC = document.getElementById('score-c');

//common variable
const resultM = document.getElementById('in-rst');
const middle = document.getElementById('middle');
const resultR = document.getElementById('reset-rst');
const end = document.getElementById('re-start');
const footer = document.getElementById('footer');
const newPlayer = document.getElementById('new-player');

// ************************************************************************************ //

// First Part
// get the user name through prompt and store it in player variable
// and insert to the HTML
let player = document.getElementById('name-c');
var UserName = prompt("Enter Your name");
player.innerHTML = UserName;

//=================================================================//
//This is to impress, unnecessary
// this code will crash if the user 
//click cancel button on prompt box
function nameChecker()
{
	// if (UserName === undefined) {
	// 	let UserName = prompt("Enter Your name");
	// }
	// else{
		if (UserName.toUpperCase() == "NUJI" || UserName.toUpperCase() == "NUZA" ) {
			resultM.innerHTML = "I love you So much " + UserName + ", I am blessed to have you in my life";
		}
		else{
			resultM.innerHTML = "Welcome "+ UserName;
		}
	// }
}
//=================================================================//

// Alart When user clicked computer side
function comClick() {
	alert("Please select from your section");
}

// store the scores
let comScore = 0;
let userScore = 0;

// com Part
//computer selection
function comPlay() {
	// make computer selection[array]
	const choice = ['rock', 'paper', 'scissor'];
	// store the computer selection in result variable
	let result = choice[Math.floor(Math.random() * choice.length)];

	// check for result and display accordingly
	if (result == 'rock') {
		// insert image to HTML
		imageC.setAttribute("src" ,"image/Rock.png");
		//insert message to HTML
		comRstC.innerHTML = "Computer Selected Rock";
	} 
	else if (result == 'paper')
	{
		imageC.setAttribute("src" ,"image/Paper.png");
		comRstC.innerHTML = "Computer Selected Paper";
	} 
	else {
		imageC.setAttribute("src" ,"image/Scissor.png");
		comRstC.innerHTML = "Computer Selected Scissor";
	}
	return result;
}




// Comparision and result message
//Check the result and compaire the user and computers choice 
//and deliver the message
function playGround(userSelection, comSelection) {
	
	if (userSelection === comSelection) {

		resultM.innerHTML = "It's a tie";

	} 
	else if(userSelection == 'rock') {

		if (comSelection == 'scissor') {
			userScore++;
			resultM.innerHTML = "You Win! Rock beats scissors.";
			scoreU.innerHTML = userScore;
		} 
		else{
			comScore++
			resultM.innerHTML = "You Lose! Paper beats rock.";
			scoreC.innerHTML =comScore;
		}
	} 

	else if (userSelection == 'paper') {

		if (comSelection == 'rock') {
			userScore++;
			resultM.innerHTML = "You Win! Paper beats rock";
			scoreU.innerHTML = userScore;
		} 
		else{
			comScore++;
			resultM.innerHTML = "You Lose! Scissors beat paper.";
			scoreC.innerHTML = comScore;
		}
	} 

	else{
		if (comSelection == 'paper') {
			userScore++;
			resultM.innerHTML = "You Win! Scissors beat paper.";
			scoreU.innerHTML = userScore;
		} 
		else{
			comScore++;
			resultM.innerHTML = "You Lose! Rock beats scissors.";
			scoreC.innerHTML = comScore;
		}
	}

}



// Player selection
function game(userChoice) {
	let player = userChoice;

	//Check the User selection and insert to HTML
	if (player == 'rock') {
		//change the image accordingly to user selection
		imageU.setAttribute("src" ,"image/Rock.png");
		//change the message accordingly user selection
		comRstU.innerHTML = UserName + " Selected Rock";
	} 
	else if (player == 'paper')
	{
		imageU.setAttribute("src" ,"image/Paper.png");
		comRstU.innerHTML = UserName + " Selected Paper";
	} 
	else {
		imageU.setAttribute("src" ,"image/Scissor.png");
		comRstU.innerHTML = UserName + " Selected Scissor";
	}

	// runthe PlayGround function when game function triggered
	let comp = comPlay();
	playGround(player, comp);

	// compare the score and display the winner
	if (userScore == 5) {
		middle.style.display = "none";
		footer.style.display = "block";
		resultR.innerHTML = "You Defeated The Computer By " + (userScore - comScore);
	} else if (comScore == 5) {
		middle.style.display = "none";
		footer.style.display = "block";
		resultR.innerHTML = "The Computer Defeated You By " + (comScore - userScore);
	}

}

//===============//
//unnecessary code
nameChecker();
//===============//

// EventListener[accordingly user selection]
//Check the user click / when the user click run the game function
rockU.addEventListener("click", function() {
			game('rock');
		});
		
paperU.addEventListener("click", function() {
			game('paper');
		});
		
scissorU.addEventListener("click", function() {
			game('scissor');
		});


// When user clicked play again reset the game with user name
end.addEventListener('click', function(){
	comScore = 0;
	userScore = 0;
	scoreU.innerHTML = "0";
	scoreC.innerHTML = "0";
	imageU.setAttribute("src" ,"");
	comRstU.innerHTML = UserName + " Play Again";
	imageC.setAttribute("src" ,"");
	comRstC.innerHTML = "Let's Play Again";
	resultM.innerHTML = "Play Again";
	middle.style.display = "block";
	footer.style.display = "none";
})

//when the user click newPlayer refresh the page
newPlayer.addEventListener('click', function(){
	location.reload();
})