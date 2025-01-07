const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW'; // 비길때
const RESULT_PLAYER_WINS = 'PLAYER_WINS';     // 사용자가 이길때
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'; // 컴퓨터가 이길때

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
};

// 컴퓨터가 무엇을 낼지 선택
const getComputerChoice = function() {
  // 0 ~ 0.33 = ROCK
  // 0.34 ~ 0.67 = PAPER
  // 0.68 ~ 1 = SCISSORS
  
  const ramdomValue = Math.random();

  if(ramdomValue < 0.34) {
    return ROCK;
  } else if (ramdomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// 승자가 누구인지 확인
const getWinner = function(cChoice, pChoice) {
  // 비길때
  if(cChoice === pChoice){
    return RESULT_DRAW;
  } else if(  // 사용자가 이김
    cChoice === ROCK && pChoice === PAPER || 
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK
  ){
    return RESULT_PLAYER_WINS;
  } else {  // 컴퓨터가 이김
    return RESULT_COMPUTER_WINS;
  }
}

startGameBtn.addEventListener('click', function() {
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});