const sliderArrow = Array.from(document.querySelectorAll('.slider__arrow'));
const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const slidersDots = Array.from(document.querySelectorAll('.slider__dot'))
slidersDots[0].classList.add('slider__dot_active');
let numberSlide = 0;
sliderArrow.forEach(element => {
    element.onclick = function() {
        if (element.classList.contains('slider__arrow_prev')) {
            numberSlide <= 0 ? numberSlide = (sliderItem.length - 1) : numberSlide--;
            changeSlide(numberSlide);
            changeDots(numberSlide);
        }else if(element.classList.contains('slider__arrow_next')) {
            numberSlide === (sliderItem.length - 1) ? numberSlide = 0 : numberSlide++;
            changeSlide(numberSlide);
            changeDots(numberSlide);
        }
    };
})

for (let i = 0; i < slidersDots.length; i++) {
    slidersDots[i].onclick = function() {
        changeDots(i);
        changeSlide(i);
    }
}

function changeSlide(element) {
    sliderItem.forEach(e => {
        e.classList.remove('slider__item_active');
    })
    sliderItem[element].classList.add('slider__item_active');
}

function changeDots(element) {
    slidersDots.forEach(e => {
        e.classList.remove('slider__dot_active');
    })
    slidersDots[element].classList.add('slider__dot_active');
}

