document.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  // keyCode에 가로줄 쳐있는 건 요즘 잘 사용하지 않는 property라는 설명임
  const heroLeft = getComputedStyle(heroElement).left;
  console.log("용사 위치 ->", heroLeft);

  const heroLeftWithoutPx = Number(heroLeft.split("px")[0]);
  console.log("heroLeftWithoutPx => ", heroLeftWithoutPx);
  if (e.keyCode === 37 && heroLeftWithoutPx < 5) {
    return;
  }
  if (e.keyCode === 39 && heroLeftWithoutPx > 760) {
    return;
  }
  if (e.keyCode === 37) {
    heroElement.style.left = heroLeftWithoutPx - 10 + "px";
    heroElement.className = "left";
    //Number()문자열 숫자타입으로 변환
    //너무 느려서 10px씩으로 변경함
    console.log("용사 왼쪽값 -1 ->", heroLeftWithoutPx - 10);
  } else if (e.keyCode === 39) {
    //heroElement.style.left = "765px";
    heroElement.className = "right";
    heroElement.style.left = heroLeftWithoutPx + 10 + "px";
    console.log("용사 왼쪽값 + 1->", heroLeftWithoutPx + 10);
  } else if (e.keyCode === 32) {
    //hero점프 (문제점: 점프 후 한쪽 방향으로 이동이 되긴 함 공중부양처럼)
    heroElement.style.bottom = "30px";
  }

  document.addEventListener("keyup", function () {
    heroElement.className = "stop";
    heroElement.style.bottom = "0px";
  });
  //heroElement.style.left = "0px";
});
