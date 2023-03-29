const board = document.getElementById("board");
const startBtn = document.getElementById("start");
const countdownEl = document.getElementById("countdown");
const scoreEl = document.getElementById("score-num");
const levelEl = document.getElementById("level-num");

let score = 0;
let level = 1;
let timeLeft = 0;
let isPlaying = false;

const LEVEL_DURATION = 20000;
const BASE_FREQ = 1000;
const DIFFICULTY_FACTOR = 0.8;

let timeoutId = null;
let moleIntervalId = null;
let moles = [];
let holes = [];

// 获取所有地鼠和洞口的 DOM 元素
function getMolesAndHoles() {
    const moleEls = document.querySelectorAll(".mole");
    moles = Array.from(moleEls);
    const holeEls = document.querySelectorAll(".hole");
    holes = Array.from(holeEls);
}

// 初始化地鼠和洞口的点击事件
function initClickEvents() {
    moles.forEach((mole) => {
        mole.addEventListener("click", () => {
            if (mole.classList.contains("up")) {
                score++;
                scoreEl.textContent = score;
            }
            mole.classList.remove("up");
        });
    });
}

// 随机获取一个洞口的索引
function getRandomHoleIndex() {
    return Math.floor(Math.random() * holes.length);
}

// 随机获取一个未出现的洞口的索

