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
var currentTime = 0
var gameTimerId = 0
