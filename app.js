const startGameBtn = document.getElementById('start-game-btn'); 

function startGame() {
  console.log('Game is starting...');
}

// 2025. 01. 06
// 객체에 함수가 저장된 것을 메서드라고 한다.
// const person = {
//   greet : function greet () {
//     console.log('Hello there!');
//   }
// }

// person.greet();

startGameBtn.addEventListener('click', startGame);