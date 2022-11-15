const linkButton = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');
const color = Array.from(document.querySelectorAll('.color'));
const bookControlColor = document.querySelector('.book__control_color');
const bookControlBackground = document.querySelector('.book__control_background');



linkButton.forEach((e) => {
    e.addEventListener('click', function(evt) {
        evt.preventDefault()
        linkButton.forEach(e => e.classList.remove('font-size_active'));
        evt.target.classList.toggle('font-size_active')
        if(evt.target.classList.contains('font-size_small')) {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if(evt.target.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        }else {
            book.className = 'book';
        }

    })
})
const colorText = Array.from(bookControlColor.querySelectorAll('.color'));

colorText.forEach(e => {
    e.addEventListener('click', function(event) {
        event.preventDefault();
        colorText.forEach(e => e.classList.remove('color_active'));
        event.target.classList.add('color_active');
        book.classList.remove('book_color-gray','book_color-whitesmoke','book_color-black')
        book.classList.add(`book_color-${event.target.dataset.textColor}`)    })
})

const backgroundColor = Array.from(bookControlBackground.querySelectorAll('.color'));

backgroundColor.forEach(e => {
    e.addEventListener('click',function(event) {
        event.preventDefault();
        backgroundColor.forEach(e => e.classList.remove('color_active'));
        event.target.classList.add('color_active');
        book.classList.remove('book_bg-gray','book_bg-black','book_bg-white');
        book.classList.add(`book_bg-${event.target.dataset.bgColor}`);
    })
})

