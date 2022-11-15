const rotator = Array.from(document.querySelectorAll('.rotator'));

const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

function changeElements(arr) {
    let idElementArray = 0;
    const color = rotatorCase[idElementArray].dataset.color;
    rotatorCase[idElementArray].style.color = color;
    setSpeed(idElementArray);
}

changeElements(rotatorCase);

function setSpeed(elementId) {
    const speed = rotatorCase[elementId].dataset.speed;

    const timerId = setTimeout(() => {
        rotatorCase.forEach(e => e.classList.remove('rotator__case_active'));
        elementId++;
        if (elementId > rotatorCase.length - 1) {
            elementId = 0;
        } 
        rotatorCase[elementId].classList.add('rotator__case_active');
        const color = rotatorCase[elementId].dataset.color;
        rotatorCase[elementId].style.color = color;

        clearTimeout(timerId);
        setSpeed(elementId);
    }, speed);
}