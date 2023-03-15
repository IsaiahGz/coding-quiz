// Get elements
var highscoreListEl = document.querySelector('#highscore-list')
var clearHighscoreBtnEl = document.querySelector('#clear-highscore')
var hiddenMessageEl = document.querySelector('#hidden-display')

// Get localstorage
var highscoreLocalStorage = localStorage.getItem('highscores')

if (highscoreLocalStorage && highscoreLocalStorage !== '[]') {
	highscoreLocalStorage = JSON.parse(highscoreLocalStorage)
	// Sort the array
	highscoreLocalStorage.sort(function (a, b) {
		if (a.score > b.score) return -1
		else if (a.score < b.score) return 1
		return 0
	})
	// Iterate scores, create LIs and push to list
	for (let i = 0; i < highscoreLocalStorage.length; i++) {
		let newLi = document.createElement('li')
		newLi.textContent = `${i + 1}. ${highscoreLocalStorage[i].initials} - ${highscoreLocalStorage[i].score}`
		highscoreListEl.appendChild(newLi)
	}
} else {
	// There are no highscores in local storage, display message
	hiddenMessageEl.classList.remove('hidden')
}

// Event listener
clearHighscoreBtnEl.addEventListener('click', function () {
	// Clear local storage
	localStorage.setItem('highscores', '[]')
	// Clear list display
	highscoreListEl.textContent = ''
})
