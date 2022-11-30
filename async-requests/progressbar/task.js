class Loading {
    constructor(container) {
        this.form = container.querySelector('#form');
        this.progress = container.querySelector( '#progress' );
        this.file = container.querySelector('.file');
        this.inputWrapperDesc = container.querySelector('.input__wrapper-desc');
        this.uploadingFiles();
    }
    uploadingFiles() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault()
            //this.progress.value = 0.7;
            const formData = new FormData(this.form);
            const xhr = new XMLHttpRequest;
            xhr.open('POST','https://netology-slow-rest.herokuapp.com/upload.php')
            xhr.send(formData);
            xhr.addEventListener('readystatechange', () => {
                //console.log(xhr.readyState)
                switch(xhr.readyState) {
                    case 2:
                        this.progress.value = 0.3;
                    break;
                    case 3:
                        this.progress.value = 0.7;
                    break;
                    case 4:
                        this.progress.value = 1;
                    break;
                }
            })

        })
        
    }

}

new Loading(document.querySelector('.content'));
document.addEventListener