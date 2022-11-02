const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');

let time = new Date();

let cookieClick = 0
function countClick() {
    cookieClick++
    let timeClick = new Date();
    let differenceTime = (timeClick - time)/1000;
    time = timeClick;
    console.log(differenceTime);
    clickerSpeed.textContent = (1 / differenceTime).toFixed(2);
    clickerCounter.textContent = cookieClick;
    if (cookieClick % 2 === 0) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
} 

cookie.onclick = countClick;