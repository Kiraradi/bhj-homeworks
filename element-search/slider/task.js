const sliderArrow = Array.from(document.querySelectorAll('.slider__arrow'));
const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const slidersDots = Array.from(document.querySelectorAll('.slider__dot'))
slidersDots[0].classList.add('slider__dot_active');

function searchNumberSlide(nextSlide) {
    let numberSlide = sliderItem.findIndex(e => {
        return e.classList.contains('slider__item_active');
    } )
    sliderItem[numberSlide].classList.remove('slider__item_active');
    slidersDots[numberSlide].classList.remove('slider__dot_active');
     if(nextSlide < 0) {
        nextSlide = sliderItem.length - 1;
     } else if ( nextSlide > sliderItem.length - 1) {
        nextSlide = 0;
     }
      sliderItem[nextSlide].classList.add('slider__item_active');
      slidersDots[nextSlide].classList.add('slider__dot_active')
}


sliderArrow.forEach(element => {
    element.onclick = function() {
        if (element.classList.contains('slider__arrow_prev')) {
            let slide = (sliderItem.findIndex(e => {
                return e.classList.contains('slider__item_active');
            })) -1;
            searchNumberSlide(slide)
        }else if(element.classList.contains('slider__arrow_next')) {
            let slide = (sliderItem.findIndex(e => {
                return e.classList.contains('slider__item_active');
            })) + 1;
            searchNumberSlide(slide)
        }
    };
})

for (let i = 0; i < slidersDots.length; i++) {
    slidersDots[i].onclick = function() {
        searchNumberSlide(i);
    }
}





/*let numberSlide = 0;
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
        numberSlide = i;
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
}*/

