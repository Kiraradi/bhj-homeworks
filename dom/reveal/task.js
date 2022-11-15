const reveal = Array.from(document.querySelectorAll('.reveal'));
function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect();
    return !(bottom < 0 || top > window.innerHeight);
}

reveal.forEach(el => {
    document.addEventListener('scroll', () => {
        if (isVisible(el)) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    });
});