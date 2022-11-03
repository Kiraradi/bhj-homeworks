const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');

let time = new Date();

let cookieClick = 0
function countClick() {
    cookie.width = ++cookieClick % 2 === 0 ? 250 : 200;
    let timeClick = new Date();
    let differenceTime = (timeClick - time)/1000;
    time = timeClick;
    console.log(differenceTime);
    clickerSpeed.textContent = (1 / differenceTime).toFixed(2);
    clickerCounter.textContent = cookieClick;
 
} 

cookie.onclick = countClick;