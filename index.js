function render() {
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);

    productsPage.render();
}

spinnerPage.render();
let CATALOG = [];


fetch('server/catalog .json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        spinnerPage.clear();

        // setTimeout для исскуственной задержки получения данных
        setTimeout(function() {
            spinnerPage.clear();
            render();
        }, 1000);
    })
    .catch(error => {
        spinnerPage.clear();
        errorPage.render();
    });
