class Card {
    constructor(container) {
        this.container = container;
        this.editor = container.querySelector('#editor');
        this.loadPage();
        this.setInLocalStorage();
        this.reset();
    }

    loadPage() {
        const textLocalStorage = this.getTextFromLocalStorage();
        if(textLocalStorage){
            this.editor.value = textLocalStorage;
        }
    }

    setInLocalStorage() {
        this.editor.addEventListener('keydown', () => {
            //console.log(this.editor.value);
            this.setText(this.editor.value)
        })
    }

    setText(value) {
        localStorage.setItem('text', JSON.stringify(value));
    }

    getTextFromLocalStorage() {
        const textString = localStorage.getItem('text');
        const text = textString ? JSON.parse(textString) : '';
        return text;
    }

    reset() {
        const button = this.container.querySelector('.button_reset');
        button.addEventListener('click', () => {
            localStorage.clear();
            this.editor.value = '';
        })
    }
}



new Card(document.querySelector('.content'))