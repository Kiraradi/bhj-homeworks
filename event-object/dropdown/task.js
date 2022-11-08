const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownValue.addEventListener('click', () => {
    if (dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
})

dropdownItem.forEach(element => {
    element.addEventListener('click', function(evt) {
        evt.preventDefault();
        dropdownValue.textContent = element.textContent;
    })
})

