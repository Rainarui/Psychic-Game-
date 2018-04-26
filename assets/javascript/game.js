var win = 0;
var loss = 0;
var left = 9;
var guessLetters = "";
var char;
var guessChar;

function guessOneChar() {
	var keyCode = event.keyCode;
	if (keyCode > 64 && keyCode < 123) {
		guessChar = String.fromCharCode(keyCode);
		if (guessChar == char) {
			win++;
			nextChar();
		} else {
			left--;
			if (left > 0) {
				if (guessLetters != "") {
					guessLetters += ", ";
				}
				guessLetters += guessChar;
			} else {
				loss++;
				nextChar();
			}
			
			updateUI();
		}
	}
}

function setChar() {
	var n = Math.round(Math.random() * 25) + 97;
	char = String.fromCharCode(n);
}

function nextChar() {
	setChar();
	left = 9;
	guessLetters = "";
	
	updateUI();
}

function updateUI() {
	winsNum.innerHTML = win;
	lossesNum.innerHTML = loss;
	leftNum.innerHTML = left;
	guessSoFar.innerHTML = guessLetters;
	thinkletter.innerHTML = " (" + char + ")";
}

var isShowLetter = false;
function showLetter() {
	if (isShowLetter) {
		thinkletter.style.display="none";
		isShowLetter = false;
	} else {
		thinkletter.style.display="inline";
		isShowLetter = true;
	}
}

function startGame() {
	setChar();
	win = 0;
	loss = 0;
	left = 9;
	guessLetters = "";
	
	updateUI();
}
document.onkeypress = guessOneChar;