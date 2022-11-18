const rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach(rotator => {
    rotator.firstElementChild.style.color = rotator.firstElementChild.dataset.color;
    setSpeed(rotator);
});
    
function setSpeed(rotator) {
    let element = rotator.querySelector('.rotator__case_active');

    if (element) {
        const speed = element.dataset.speed;

        const timerId = setTimeout(() => {
            element.classList.remove('rotator__case_active');
            if (element.nextElementSibling) {
                element.nextElementSibling.classList.add('rotator__case_active');
                element = element.nextElementSibling;
            }
            else {
                rotator.firstElementChild.classList.add('rotator__case_active');
                element = rotator.firstElementChild;
            }
            element.style.color = element.dataset.color;

            clearTimeout(timerId);
            setSpeed(rotator);
        }, speed);    
    } 
}