// querySelector 사용해서 요소를 가져와봅니다.
const button = document.querySelector(".btn");

let min;
let sec;

// setInterval의 id를 담을 변수입니다. setInterval의 id를 알아야 멈출 수 있습니다.
// 아직 setInterval이 실행되지 않았다는 의미로 null을 대입해 봅시다.
// 참고: 아무것도 대입하지 않아도 undefined가 대입되기 때문에 변수 선언만 하고 null을 대입하지 않아도 괜찮습니다.
let intervalId = null;

// button 클릭 이벤트 감지(listen)
button.addEventListener("click", function () {
  // button을 클릭하면 실행
  resetCount();
});

// 3:00부터 카운트를 새롭게 시작하게 하는 함수
function resetCount() {
  // 3분에서 시작
  min = "3";
  // 00초에서 시작
  sec = "00";
  // 위의 분, 초 를 Number 타입이 아닌 String 타입으로 관리하는 이유가 무엇일까요?
  // 화면에서 00초 일 때, 두자리의 0으로 표현하고 싶기 때문입니다.
  // Number 타입으로 00 을 대입(const StartSec = 00)하고 console.log로 확인해보세요!
  // 00이 아닌, 0으로 표시됩니다.
  // 그렇기 때문에 문자열인 '00'으로 사용해야 두자리의 0으로 온전히 표현할 수 있습니다.

  // ---

  // 만약 intervalId가 존재하면
  // = 이전에 이미 버튼을 클릭해서 setInterval이 실행되고 있다는 뜻입니다.
  // -> 이전 setInterval은 멈추고, 3:00 부터 새롭게 시작해주어야 합니다.
  if (intervalId) {
    // 이전의 setInterval 함수를 멈추고 제거합니다.
    clearInterval(intervalId);
  }

  // 1초에 한 번씩 setCount 함수를 실행합니다.
  setInterval(function () {
    setCount();
  }, 1000);
}

// 카운트를 1씩 감소해서 화면의 텍스트를 변경하는 함수
function setCount() {
  document.querySelector(".min").innerText = min;
  document.querySelector(".sec").innerText = sec;

  // 1초씩, 1분씩 감소시켜야 하기 때문에 다시 문자열에서 숫자형으로 변경합니다.
  const numMin = Number(min);
  const numSec = Number(sec);

  // 분, 초 모두 0에 도달하면 이제 setInterval을 멈춰야 합니다.
  if (numMin === 0 && numSec === 0) {
    clearInterval(intervalId);
  } else {
    // sec이 0에 도달하면, 1분 감소 시키고, 초는 59초에서 시작하게 합니다.
    // ex) 2:00 -> 1초 뒤 1:59
    if (numSec === 0) {
      const newMin = numMin - 1;
      const newSec = 59;

      // min과 sec 변수는 원래 문자열을 저장하고 있으므로 다시 문자열로 바꿔줍니다.
      min = newMin.toString();
      sec = newSec.toString();
    } else {
      const newSec = numSec - 1;

      // 0~9초 일 때는 한자리의 숫자로 표현 되므로, 01, 02, 03 등의 두자리로 표현되기 위하여 문자열 0을 붙여줍니다.
      if (newSec < 10) {
        sec = "0" + newSec.toString();
      } else {
        sec = newSec.toString();
      }
    }
  }
}
