const items = document.querySelector('#items');
const loader = document.querySelector('#loader');

const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        const currencyData = JSON.parse(xhr.responseText).response.Valute;
        for(let key in currencyData) {
            createHtmlElement(currencyData[key].CharCode, currencyData[key].Value)
        }
    }
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();


function createHtmlElement(code, value, isPageLoaded) {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.textContent = code;
    item.insertAdjacentElement('beforeend', itemCode)

    const itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemValue.textContent = value;
    item.insertAdjacentElement('beforeend', itemValue)

    const itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.textContent = 'руб';
    item.insertAdjacentElement('beforeend', itemCurrency);

    items.insertAdjacentElement('beforeend', item);  

}

