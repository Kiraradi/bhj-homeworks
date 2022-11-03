const hole = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let allDead = 0;
let allLost = 0;
let array = Array.from(hole);
array.forEach((element) => {
    element.onclick = () => {
        
        if (element.className === "hole") {
            allLost++;
            lost.textContent = allLost;
        } else if (element.className.includes('hole_has-mole')) {
            allDead++;
            dead.textContent = allDead;
        }

        if (allDead === 5) {
            resetResult('Ты выйграл');
        } else if (allLost === 5) {
            resetResult('Ты проиграл');
        }
    }
})

function resetResult (result) {
    allDead = 0;
    allLost = 0;
    alert(result)
    dead.textContent = allDead;
    lost.textContent = allLost;
}
