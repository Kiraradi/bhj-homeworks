const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach((e) => {
    e.addEventListener('click', function() {
        tab.forEach(e => {
            e.classList.remove('tab_active')
        })
        e.classList.add('tab_active');
        switchTabContent();
    })
})

function switchTabContent() {
    tabContent.forEach(e => {
        e.classList.remove('tab__content_active')
    })
    let index = tab.findIndex(e => {
        return e.classList.contains('tab_active')
    });
    console.log(index)
    tabContent[index].classList.add('tab__content_active');
}