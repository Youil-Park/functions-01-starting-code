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
const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();  // 대문자 변환
  if(
    selection !== ROCK && 
    selection !== PAPER &&
    selection !== SCISSORS
    ){  
      alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`); // 유효하지 않는 값은 (주먹)으로 
      return;
    }
    
    return selection;
};

// 컴퓨터가 무엇을 낼지 선택
const getComputerChoice = () => {
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
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => // 화살표 함수
  cChoice === pChoice
    ? RESULT_DRAW 
    : (cChoice === ROCK && pChoice === PAPER) || 
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK) 
      ? RESULT_PLAYER_WINS 
      : RESULT_COMPUTER_WINS;

  // 비길때
  // if(cChoice === pChoice){
  //   return RESULT_DRAW;
  // } else if(  // 사용자가 이김
  //   cChoice === ROCK && pChoice === PAPER || 
  //   cChoice === PAPER && pChoice === SCISSORS ||
  //   cChoice === SCISSORS && pChoice === ROCK
  // ){
  //   return RESULT_PLAYER_WINS;
  // } else {  // 컴퓨터가 이김
  //   return RESULT_COMPUTER_WINS;
  // }


startGameBtn.addEventListener('click', () => {  // 콜백 함수
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  
  if(playerChoice){
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice, undefined); // 기본인자 테스트
                                                    // 0, null, undefined
  }

  // 결과보기
  let messsage = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice} therefore you `; 
  if (winner === RESULT_DRAW) {
    messsage = messsage + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    messsage = messsage + 'won.';
  } else {
    messsage = messsage + 'lost.';
  }
  alert(messsage);

  gameIsRunning = false;  // 게임이 끝났을경우 false 설정
});


// 2025. 1. 15
// not related to game 게임과 연관 없음
// Rest 파라미터
const sumUp = (resultHandler,...numbers) => {
  
  // 함수 안에 함수
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  
  let sum = 0;
  for (const num of numbers){
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const subtractUp = function() {
  let sum = 0;
  for (const num of arguments){
    sum -= num;
  }
  return sum;
};

const showResult = (result) => {
  alert('The result after adding all numbers is: ' + result);
};

sumUp(showResult, 1, 5, 'fasd', -3, 6, 10);
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);

console.log(subtractUp(1, 10, 15, 20));