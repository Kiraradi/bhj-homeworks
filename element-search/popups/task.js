const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const modalClouse = Array.from(document.getElementsByClassName('modal__close'));

modalMain.classList.add('modal_active');

modalClouse.forEach( element => {
    element.onclick = () => {
        if (!element.classList.contains('show-success')) {
            modalMain.classList.remove('modal_active');
            modalSuccess.classList.remove('modal_active');
    } else {
            modalMain.classList.remove('modal_active');
            modalSuccess.classList.add('modal_active'); 
    }
    }
})