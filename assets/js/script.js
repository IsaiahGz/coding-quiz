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
var submitBtnEl = document.getElementById('submit-btn')

// Data
var maxTime = 75
var questionList = [
	{
		title: 'Arrays in JavaScript can be used to store _____.',
		choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
		correctChoiceIndex: 3,
	},
	{
		title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
		choices: ['JavaScript', 'terminal/bash', 'console.log()', 'for loops'],
		correctChoiceIndex: 2,
	},
	{
		title: 'Commonly used data types DO NOT include:',
		choices: ['strings', 'booleans', 'alerts', 'numbers'],
		correctChoiceIndex: 2,
	},
	{
		title: 'The condition in an if/else statement is enclosed in _____.',
		choices: ['quotes', 'parentheses', 'curly brackets', 'square brackets'],
		correctChoiceIndex: 1,
	},
]

// Changing Data
var currentTime = maxTime
var gameTimerId = 0
var currentQuestionIndex = -1

// Event listeners
startQuizBtnEl.addEventListener('click', function () {
	// Switch from start-screen to question-screen
	startScreenEl.classList.add('hidden')
	questionScreenEl.classList.remove('hidden')

	// Start the game
	gameTimerId = setInterval(gameTimerHandle, 100)
	getNextQuestionAndDisplay()
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
	updateTimerUi()
}

// Functions
function updateTimerUi() {
	timerEl.textContent = Math.floor(currentTime)
}

function endGame() {
	clearInterval(gameTimerId)
	// Switch from question screen to end screen
	questionScreenEl.classList.add('hidden')
	endScreenEl.classList.remove('hidden')
	// Set final score to time left
	updateTimerUi()
	finalScoreNumberEl.textContent = Math.floor(currentTime)
}

function getNextQuestionAndDisplay() {
	// Clear choices already on the screen
	questionListEl.textContent = ''
	currentQuestionIndex++
	if (currentQuestionIndex >= questionList.length) {
		// No more questions
		endGame()
		return
	}
	var question = questionList[currentQuestionIndex]
	// Set the title
	questionTitleEl.textContent = question.title
	// Create LIs for each choice
	for (let i = 0; i < question.choices.length; i++) {
		var newLi = document.createElement('li')
		newLi.classList.add('btn-purple')
		newLi.textContent = question.choices[i]
		// Add event listener
		newLi.addEventListener('click', function () {
			// Check if li isn't the correct choice. If so reduce time.
			if (i !== question.correctChoiceIndex) {
				currentTime -= 10
				wasAnswerCorrect(false)
			} else {
				wasAnswerCorrect(true)
			}
			getNextQuestionAndDisplay()
		})
		questionListEl.appendChild(newLi)
	}
}

// Functions that displays if the choice was answered correctly
function wasAnswerCorrect(correct) {
	if (correct) {
		questionResponseEl.textContent = 'Correct!'
	} else {
		questionResponseEl.textContent = 'Wrong!'
	}
	questionResponseEl.classList.remove('hidden')
	// Display this for .6 seconds
	setTimeout(function () {
		questionResponseEl.classList.add('hidden')
	}, 600)
}
