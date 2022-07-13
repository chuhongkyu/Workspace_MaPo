let target = document.querySelector("#dynamic");
let Textbox = document.querySelector(".text_box");

function randomString() {
  let stringArr = [
    "Lear to HTML",
    "Lear to CSS",
    "Lear to JAVA",
    "Lear to Recycle",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");
  return selectStringArr;
}

function resetTyping() {
  target.textContent = "";
  dyamic(randomString());
}

function dyamic(randomArr) {
  // console.log(randomArr);
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dyamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dyamic(randomString());

function blink() {
  target.classList.toggle("active");
}

setInterval(blink, 500);

const rainbowCycle = document.querySelector(".material-icons");

function changeRGB() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  // 0~255값을 랜덤으로 뽑아내서 각각의 변수 r,g,b 에 들어간다.

  let random_color = "rgb(" + r + "," + g + "," + b + ")";
  // random_color = rgb(r,g,b)

  rainbowCycle.style.color = random_color;
  console.log(rainbowCycle.style.color);
}

setInterval(changeRGB, 800);

let NumberBox = document.querySelector("#mini_text");
let count = 0;

function NumberUP() {
  let counting = setInterval(function () {
    if (count == 1299) {
      console.log(count);
      Textbox.classList.add("Text_anim");
      clearInterval(counting);
      return false;
    }
    count += 1;
    NumberBox.innerHTML = new Intl.NumberFormat().format(count);
  }, 5);
}
NumberUP();
