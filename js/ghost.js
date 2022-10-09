start.addEventListener("dblclick", function () {
  // button을 클릭하면 실행
  let count = 0;
  function createGhost() {
    // clearInterval 조건은 맨 위에 사용 해야 할듯, 그리고 카운트를 직접 올리는 방식 말고 getElements로
    // span class = "sec"; 을 이용하도록 한다 지금은 여러가지 방법으로 인터벌을 종료하여 하였음;
    console.log("count : ", count++);
    if (count > 14) {
      clearInterval(tId);
    }
    const ghostElement = document.createElement("div");

    ghostElement.style.position = "absolute";
    ghostElement.style.top = "0px";

    let randomLeft = randomRange(0, BG_WIDTH - GHOST_WIDTH);
    ghostElement.style.left = randomLeft + "px";

    ghostElement.style.width = GHOST_WIDTH + "px";
    ghostElement.style.height = GHOST_HEIGHT + "px";
    ghostElement.style.opacity = 0.7;
    ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

    setInterval(function () {
      //1. 고스트 요소 접근
      //2. top
      let ghostTopNum = Number(ghostElement.style.top.split("px")[0]) + 10;
      let ghostLeft = Number(ghostElement.style.left.split("px")[0]);
      let heroLeft = Number(heroElement.style.left.split("px")[0]);
      //3. 2번에서 px뺀 숫자 접근 + 1 + 'px'
      if (ghostTopNum > BG_MYHEIGHT - GHOST_HEIGHT) {
        ghostElement.remove();
        return;
      }
      if (ghostTopNum > BG_MYHEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
        if (
          ghostLeft < heroLeft + HERO_WIDTH &&
          heroLeft < ghostLeft + GHOST_WIDTH
        ) {
          ghostElement.style.backgroundPosition = "-45px 0px";
          setTimeout(function () {
            ghostElement.remove();
          }, 100);
        }
      }
      ghostElement.style.top = ghostTopNum + "px";
      //4. 재할당
    }, 100);

    bgElement.appendChild(ghostElement);
  }
  const tId = setInterval(createGhost, 2000);
});
//멘토님꺼 보고 카피한 것
function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// 이건 내가 만든 것- 하드코딩이라 지양하는 것이 좋다고 함
// function randomNum() {
//   let rdmNumber = Math.floor(Math.random() * 755);

//   return rdmNumber;
// }
