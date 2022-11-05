const menuSub = Array.from(document.querySelectorAll('.menu_sub'));

const menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach(element => {
    const menu = element.parentElement.querySelector('.menu');
    element.onclick = () => {
        if (menu) {
        menuSub.forEach(element => {
            element.classList.remove("menu_active");
        })
        if (!menu.classList.contains("menu_active")) {
            menu.classList.add('menu_active');
            return false
        }else {
            menu.classList.remove('menu_active');
            return false
        }
       }
    
    }
    
})

window.onclick = element => {
    console.log(element.target.className)
    if (element.target.className ==='menu__link') {
       return
    }else {
        menuSub.forEach(element => {
            element.classList.remove("menu_active");
        }) 
    }
}
 