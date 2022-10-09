const BG_WIDTH = 800;
const BG_HEIGHT = 500;
const BG_MYHEIGHT = 450;

const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

const HERO_WIDTH = 35;
const HERO_HEIGHT = 54;
////

const heroElement = document.getElementById("hero");
const bgElement = document.getElementById("bg");

const start = document.querySelector(".start");
let sec;
let intervalId = null;

start.addEventListener("dblclick", function () {
  // button을 클릭하면 실행
  resetCount();
});

function resetCount() {
  sec = "30";
  // 만약 intervalId가 존재하면
  // = 이전에 이미 버튼을 클릭해서 setInterval이 실행되고 있다는 뜻입니다.
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
  document.querySelector(".sec").innerText = sec;

  // 1초씩, 1분씩 감소시켜야 하기 때문에 다시 문자열에서 숫자형으로 변경합니다.
  const numSec = Number(sec);

  if (numSec === 0) {
    // 제
    clearInterval(intervalId);
  } else {
    const newSec = numSec - 1;
    sec = newSec.toString();
  }
  // 분, 초 모두 0에 도달하면 이제 setInterval을 멈춰야 합니다.
}
