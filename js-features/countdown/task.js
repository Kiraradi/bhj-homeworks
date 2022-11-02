//task 1
const timer = document.getElementById('timer');

let time = timer.textContent.split(':');
let second = (Number(time[0]) * 3600) + (Number(time[1]) * 60) + Number(time[2]);

function decreaseTime() {

let hh = Math.floor(second / 3600) < 10 ? "0" + Math.floor(second / 3600) : Math.floor(second / 3600) ;
let mm = Math.floor((second % 3600) / 60) < 10 ? "0" + Math.floor((second % 3600) / 60) : Math.floor((second % 3600) / 60) ;
let ss = Math.floor(((second % 3600) % 60)) < 10 ? "0"+ Math.floor(((second % 3600) % 60)) : Math.floor(((second % 3600) % 60));
    if (second === 0) {
        //alert('Вы победили'); 
        window.location ='https://netology.ru';
    }
     else {
        second--; 
        timer.textContent = `${hh}:${mm}:${ss}`;
    }
}

setInterval(decreaseTime,1000)


