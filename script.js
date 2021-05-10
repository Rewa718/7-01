// Connect "Guess" button to "Random" function
document.getElementById('guess').addEventListener('click', randomizer)
let randomNumber = 0

function randomizer() {
  // get number typed in by user and convert to integer
  const guess = parseInt(document.getElementById('entnum').value)

  // generate random number between 1 and 6
  randomNumber = Math.random() * 6 + 1
  randomNumber = parseInt(randomNumber)
  // compare user's guess with random number
  if (guess === randomNumber) {
    document.getElementById('response').innerHTML = 'You Win!'
  } else {
    document.getElementById('response').innerHTML = 'Keep clicking guess till you win!'
  }
}
