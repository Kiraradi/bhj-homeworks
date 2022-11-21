class Hints {
    constructor(bodyElement) {
        this.bodyElement = bodyElement;
        this.links = Array.from(bodyElement.querySelectorAll('.has-tooltip'));
        this.includeTooltips();
        this.scroll();
    }

    includeTooltips() {
        this.bodyElement.addEventListener('click', event => {
            if (!event.target.classList.contains('has-tooltip')) {
                const tooltipElement = this.bodyElement.querySelector('.tooltip');

                if (tooltipElement) {
                    tooltipElement.classList.remove('tooltip_active');
                }
            }
        });

        this.links.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();           
                let tooltipElement = this.bodyElement.querySelector('.tooltip');

                if (!tooltipElement) {
                    tooltipElement = document.createElement('div');
                    tooltipElement.classList.add('tooltip');
                    this.bodyElement.appendChild(tooltipElement);
                }

                if (tooltipElement.classList.contains('tooltip_active')) {
                    tooltipElement.classList.remove('tooltip_active');
                } else {
                    tooltipElement.classList.add('tooltip_active');
                    tooltipElement.textContent = event.target.title;
                    const linkElementPosition = event.target.getBoundingClientRect();
                    const tooltipElementPosition = tooltipElement.getBoundingClientRect();
                    switch(event.target.dataset.position) {
                        case 'top':
                            tooltipElement.style.top = `${linkElementPosition.top - tooltipElementPosition.height}px`;
                            tooltipElement.style.left = `${linkElementPosition.left}px`;
                        break;
                        case 'left':
                            tooltipElement.style.top = `${linkElementPosition.top}px`
                            tooltipElement.style.left = `${linkElementPosition.left - tooltipElementPosition.width }px`
                        break;
                        case 'right':
                            tooltipElement.style.top = `${linkElementPosition.top}px`
                            tooltipElement.style.left = `${linkElementPosition.right }px`
                        break;
                        case 'bottom':
                            tooltipElement.style.top = `${linkElementPosition.bottom }px`
                            tooltipElement.style.left = `${linkElementPosition.left}px`;
                        break;
                    }
                }
                
            });
        })
    }

    scroll() {
       
        document.addEventListener('scroll',() => {
            const tooltipElementActive = this.bodyElement.querySelector('.tooltip_active');
            
            if(tooltipElementActive) {
                tooltipElementActive.classList.remove('tooltip_active')
            }
           /* if(tooltipElementActive) {
                const linkElementPosition = tooltipElementActive.previousElementSibling.getBoundingClientRect();
                const tooltipElementPosition = tooltipElementActive.getBoundingClientRect();
                console.log(tooltipElementActive)
                switch(tooltipElementActive.previousElementSibling.dataset.position) {
                    case 'top':
                        tooltipElement.style.top = `${linkElementPosition.top - tooltipElementPosition.height}px`;
                        tooltipElement.style.left = `${linkElementPosition.left}px`;
                    break;
                    case 'left':
                        console.log('winleft')
                        tooltipElement.style.top = `${linkElementPosition.top}px`
                        tooltipElement.style.left = `${linkElementPosition.left - tooltipElementPosition.width }px`
                    break;
                    case 'right':
                        console.log('winright')
                        tooltipElement.style.top = `${linkElementPosition.top}px`
                        tooltipElement.style.left = `${linkElementPosition.right }px`
                    break;
                    case 'bottom':
                        tooltipElement.style.top = `${linkElementPosition.bottom }px`
                        tooltipElement.style.left = `${linkElementPosition.left}px`;
                    break;
                } 
            }*/
        })
    }
}
new Hints(document.querySelector('body'))