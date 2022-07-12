//root
const Root = document.getElementById("root");

//element
const Header = document.getElementById("header");
const Main = document.getElementById("main");
const Footer = document.getElementById("footer");

const headText = ["연습", "JavaScript", ""];
const navText = ["Ghost", "Home", "You"];

//header
const makeHeader = () => {
  for (let i = 0; i < 3; i++) {
    Header.innerHTML += `<div class="nav_${i + 1}">${headText[i]}</div>`;
  }
};

makeHeader();

const Nav3 = document.querySelector(".nav_3");
const MakeNav = () => {
  for (let i = 0; i < 3; i++) {
    Nav3.innerHTML += `<span class="nav_btn">${navText[i]}</span>`;
  }
};

MakeNav();

//main

//start Ghost
const setGhost = () => {
  Main.innerHTML = `
    <div class="ghost"><div class="ghost_body">
            <div class="face">
                <div class="eye">
                </div>
                <div class="eye">
                </div>
                <div class="mouth"></div>
            </div>
            <div class="hand_left"></div>
            <div class="hand_right"></div>
        </div>
        <div class="bottom">
            <div class="leg"></div>
            <div class="leg"></div>
            <div class="leg"></div>
            <div class="leg"></div>
            <div class="leg"></div>
        </div>
    </div>`;
  const Ghost = document.querySelector(".ghost");
  Main.style.background =
    "linear-gradient(to bottom, RGB(218, 92, 15), rgb(126, 47, 2))";
  document.body.addEventListener("mousemove", function (e) {
    Ghost.style.left = e.pageX + "px";
    Ghost.style.top = e.pageY + "px";
  });

  let appear = false;

  function hiddenGhost() {
    appear = true;
    Ghost.classList.add("hidden");
    console.log("type");
  }

  function appearGhost() {
    if ((appear = true)) {
      Ghost.classList.remove("hidden");
      appear = false;
    }
  }

  window.addEventListener("dblclick", hiddenGhost);
  window.addEventListener("click", appearGhost);

  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.marginLeft = randomPosition() + "%";
    Main.appendChild(star);
  }

  function randomPosition() {
    return Math.floor(Math.random() * 100);
  }

  for (let i = 0; i < 500; i++) {
    createStar();
  }
  Btn1.disabled = true;
  Btn1.classList("disabled");
};

//footer
const Btn1 = document.querySelector(".btn_1");
Btn1.innerHTML = "Ghost";
Btn1.addEventListener("click", setGhost);

const Btn2 = document.querySelector(".btn_2");
Btn2.innerHTML = "3DBox";
