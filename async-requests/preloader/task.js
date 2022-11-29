class ExchangeRate {
    constructor(container) {
        this.items = container.querySelector('#items');
        this.loader = document.querySelector('#loader');
        this.loadPage();
        this.getCourse();
    }

    loadPage() {
        const courses = this.newCourse();
        if (courses.length > 0) {
            courses.forEach(course => {
                this.createHtmlElement(course.code, course.value);
            });
        }
    }

    getCourse(){
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE) {
           this.clearHtml();
            this.loader.classList.remove('loader_active');
            const currencyData = JSON.parse(xhr.responseText).response.Valute;
            for(let key in currencyData) {
                this.createHtmlElement(currencyData[key].CharCode, currencyData[key].Value);
                this.setCourse(currencyData[key].CharCode, currencyData[key].Value );
            }
        }
        })

        xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
        xhr.send();
    }

    createHtmlElement(code, value) {
        const item = document.createElement('div');
        item.classList.add('item');

        const itemCode = document.createElement('div');
        itemCode.classList.add('item__code');
        itemCode.textContent = code;
        item.insertAdjacentElement('beforeend', itemCode);

        const itemValue = document.createElement('div');
        itemValue.classList.add('item__value');
        itemValue.textContent = value;
        item.insertAdjacentElement('beforeend', itemValue);

        const itemCurrency = document.createElement('div');
        itemCurrency.classList.add('item__currency');
        itemCurrency.textContent = 'руб';
        item.insertAdjacentElement('beforeend', itemCurrency);

        this.items.insertAdjacentElement('beforeend', item); 
    }

    setCourse(currencyCode, currencyvalue) {
        const coursesString = localStorage.getItem('courses');
        const courses = coursesString ? JSON.parse(coursesString) : [];
        courses.push({'code': currencyCode, 'value': currencyvalue});
        localStorage.setItem('courses', JSON.stringify(courses));
    }

    newCourse() {
        const coursesString = localStorage.getItem('courses');
        const courses = coursesString ? JSON.parse(coursesString) : [];
        return courses;
    }

    clearHtml() {
        this.items.textContent = '';
        localStorage.clear();
    }
}

new ExchangeRate(document.querySelector('.content'))
