class CheckList {
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
        this.checkboxes = Array.from(htmlElement.querySelectorAll('.interest__check'));
        this.getChecked()
    }

    getChecked() {
        this.checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change',() => {
                this.godown(checkbox);   
                this.goUp(checkbox);
            });
        });
    }

    godown(checkbox) {
        const childrenInterestsElement = checkbox.parentElement.nextElementSibling;
        if (childrenInterestsElement) {
             if (childrenInterestsElement.children) {
                Array.from(childrenInterestsElement.children).forEach(el => {
                    let nextInterestElement = el.querySelector('.interest__check');
                    nextInterestElement.checked = checkbox.checked;
                    nextInterestElement.indeterminate = false; 
                    this.godown(nextInterestElement);
                });
             }
         
        };

    }

    goUp(checkbox) {
        let parentInterestElement = checkbox.closest('.interests').previousElementSibling;

        if (parentInterestElement) {
            parentInterestElement = parentInterestElement.querySelector('.interest__check');
            const siblings = Array.from(checkbox.closest('.interests').querySelectorAll('.interest__check'));
            parentInterestElement.checked = siblings.every(el => el.checked);
            parentInterestElement.indeterminate = siblings.some(el => el.checked);
            this.goUp(parentInterestElement);
        }
    }
}

new CheckList(document.querySelector('.content'))