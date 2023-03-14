// Grab elements
var timerEl = document.getElementById('timer')
var startScreenEl = document.getElementById('start-screen')
var startQuizBtnEl = document.getElementById('start-quiz-button')
var questionScreenEl = document.getElementById('question-screen')
var questionTitleEl = document.getElementById('question-title')
var questionListEl = document.getElementById('question-list')
var endScreenEl = document.getElementById('end-screen')
var finalScoreNumberEl = document.getElementById('final-score')
var initialsInputEl = document.getElementById('initials')
var questionResponseEl = document.getElementById('question-response')

// Data
var maxTime = 75

// Changing Data
var currentTime = maxTime
var gameTimerId = 0

// Event listeners
startQuizBtnEl.addEventListener('click', function () {
	// Start the game
	gameTimerId = setInterval(gameTimerHandle, 100)
	// Switch from start-screen to question-screen
	startScreenEl.classList.add('hidden')
	questionScreenEl.classList.remove('hidden')
})

// Game timer (runs every 100 ms)
function gameTimerHandle() {
	// Reduce time
	currentTime -= 0.1
	if (currentTime <= 0) {
		// Time has run out
		currentTime = 0 // Don't allow negative time left
		endGame()
	}
	timerEl.textContent = Math.floor(currentTime)
}

// Functions
function endGame() {
	clearInterval(gameTimerId)
	// Switch from question screen to end screen
	questionScreenEl.classList.add('hidden')
	endScreenEl.classList.remove('hidden')
	// Set final score to time left
	finalScoreNumberEl.textContent = currentTime
}
