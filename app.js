const startGameBtn = document.getElementById('start-game-btn'); 

// 변수(상수)에 함수 저장하기
const start = function () { // 익명 함수
  console.log('Game is starting...');
};

// 2025. 01. 06
// 객체에 함수가 저장된 것을 메서드라고 한다.
// const person = {
//   greet : function greet () {
//     console.log('Hello there!');
//   }
// }

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', start);