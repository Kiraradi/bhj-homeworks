class Shop {
    constructor(container) {
        this.container = container;
        this.cartProducts = container.querySelector('.cart__products');
        this.products = Array.from(container.querySelectorAll('.product'));
        this.trackStatusProducts();
    }

    trackStatusProducts() {
        this.products.forEach(product => {
           const productQuantityControl = Array.from(product.querySelectorAll('.product__quantity-control'));
           const productImage = product.querySelector('.product__image')
           let productQuantities = product.querySelector('.product__quantity-value');
           const productAddButton = product.querySelector('.product__add');
           productQuantityControl.forEach(button => {
            button.addEventListener('click', event => {
                this.changingProductQuantities(event.target, productQuantities)
            })
           })
           productAddButton.addEventListener('click',() => {
            this.addToCart(product.dataset.id, productImage.src,productQuantities.textContent )
           })

        })
    }

    changingProductQuantities(button, productQuantities) {
        if(button.classList.contains('product__quantity-control_inc')) {
            productQuantities.textContent = +productQuantities.textContent + 1;
        }else if(button.classList.contains('product__quantity-control_dec')) {
            if(+productQuantities.textContent > 1) {
                productQuantities.textContent = +productQuantities.textContent - 1;
            }
        }
        
    }

    addToCart(dataId,image,numberOfProducts) {
        const cardsProduct = Array.from(this.cartProducts.querySelectorAll('.cart__product'));
        const idcard = cardsProduct.findIndex(card => card.dataset.id == dataId);

        if(cardsProduct.length && idcard !== -1) {
            const cardProductQuantities = cardsProduct[idcard].querySelector('.cart__product-count');
            cardProductQuantities.textContent = +cardProductQuantities.textContent + +numberOfProducts;            
        }else {
            const cardProduct = document.createElement('div');
            cardProduct.classList.add('cart__product');
            cardProduct.dataset.id = dataId;

            const imageProduct = document.createElement('img');
            imageProduct.classList.add('cart__product-image');
            imageProduct.src = image;
            cardProduct.insertAdjacentElement('beforeend', imageProduct);

            const cartProductCount = document.createElement('div');
            cartProductCount.classList.add('cart__product-count');
            cartProductCount.textContent = numberOfProducts;
            cardProduct.insertAdjacentElement('beforeend', cartProductCount);

            this.cartProducts.insertAdjacentElement('beforeend', cardProduct); 
        }

        
    }
}

new Shop(document.querySelector('body'));