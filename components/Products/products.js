class Products {
    constructor() {
        this.activeNameClass = 'products-element__btn--active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины'
    }

    handlerSetLocationStorage(element, id) {
        const { pushed, products } = localStorageUtil.putProducts(id);
        if(pushed) {
            element.classList.add( this.activeNameClass);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.activeNameClass);
            element.innerHTML = this.labelAdd;
        }
        headerPage.render(products.length);
    }

    render() {
        const productStore = localStorageUtil.getProducts();

        let htmlCatalog = '';
        CATALOG.forEach(({ id, name, img, price }) => {
            let activeClass = '';
            let activeText = '';

            if (productStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.activeNameClass;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img src="${img}" class="products-element__img" alt="">
                    <span class="products-element__price">🔥
                        ${price.toLocaleString()} RUS
                    </span>
                    <button 
                        class="sys_btn products-element__btn${activeClass}" 
                        onclick="productsPage.handlerSetLocationStorage(this, '${id}')"
                    >
                        ${activeText}
                    </button>
                </li>
            `
        });

        const list = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul> 
        `;

        ROOT_PRODUCTS.innerHTML = list;
    }
}

const productsPage = new Products();


// let btn = document.querySelector('.sys_btn');
// btn.addEventListener('click', productsPage.handlerSetLocationStorage)
// console.log(btn);