let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = '?';
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const check = document.querySelector('.check');
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage("DON'T TRY TO BE SMART.");
    // document.querySelector('.message').textContent = "DON'T TRY TO BE SMART.";
  } else if (guess === secretNumber) {
    displayMessage('🎉 Hurray! Correct Number!...');
    // document.querySelector('.message').textContent =
    //   '🎉 Hurray! Correct Number!...';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '😡 Too High!' : '😠 Too Low!';
      displayMessage(guess > secretNumber ? '😡 Too High!' : '😠 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👿 You lost. You suck big time!');
      // document.querySelector('.message').textContent = '👿 You lost, you suck!';
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
});
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '😡 Too High!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '👿 You lost, you suck!';
//     score--;
//     document.querySelector('.score').textContent = 0;
//   }
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '😠 Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '👿 You lost, you suck!';
//     score--;
//     document.querySelector('.score').textContent = 0;
//   }
// }
// });

const again = document.querySelector('.again');
again.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
});
