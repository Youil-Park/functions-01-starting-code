const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;    // 게임을 시작하면 또 다른 게임을 못하게

// 2025. 01. 07
// 가위바위보 선택
const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();  // 대문자 변환
  if(
    selection !== ROCK && 
    selection !== PAPER &&
    selection !== SCISSORS
    ){  
      alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`); // 유효하지 않는 값은 (주먹)으로 
      return DEFAULT_USER_CHOICE;
    }
    
    return selection;
}

startGameBtn.addEventListener('click', function() {
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playersSelection = getPlayerChoice();
  console.log(playersSelection);
});