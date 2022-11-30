class Authorization{
    constructor(container) {
        this.container = container;
        this.authorizationForm = container.querySelector('#signin__form');
        this.loadPage();
        this.submitForm();
        this.logOut();
    }

    loadPage() {
        const acount = this.returnAcount();
        if(acount) {
            this.checkAuthorization(acount);
        }
    }

    submitForm() {
        this.authorizationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const xhr = new XMLHttpRequest;
            const formData = new FormData(this.authorizationForm);
            xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
            xhr.send(formData);
            xhr.addEventListener('readystatechange', () => {
                if(xhr.readyState === xhr.DONE) {
                    //console.log(JSON.parse(xhr.responseText) );
                    this.checkAuthorization(JSON.parse(xhr.responseText));
                }
            })
        });
    }

    checkAuthorization(object) {
        if(object.success) {
            console.log(object);
            this.authorizationForm.closest('#signin').classList.remove('signin_active');
            this.container.querySelector('#welcome').classList.add('welcome_active');
            this.container.querySelector('#user_id').textContent = object.user_id;
            this.saveAcount(object);
        }else {
            alert('Неверный логин или пароль');
            const inputsForm = Array.from(this.container.querySelectorAll('.control'));
            inputsForm.forEach(el => {
                el.value = '';
            })
        }
    }

    saveAcount(object) {
        localStorage.setItem('acount',JSON.stringify(object));
    }

    returnAcount() {
        const acountString = localStorage.getItem('acount');
        const acount = acountString ? JSON.parse(acountString) : '';
        return acount;
    }

    logOut() {
        const buttonLogOut = this.container.querySelector('.log__out');
        buttonLogOut.addEventListener('click', () => {
            this.container.querySelector('#welcome').classList.remove('welcome_active');
            this.authorizationForm.closest('#signin').classList.add('signin_active');
            localStorage.clear();
        })
    }
} 
new Authorization(document.querySelector('.content'));