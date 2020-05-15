class Spinner {

    render() {
        let html = `
            <div class="spinner">
                <img class="spinner__img" src="components/Spinner/img/spinner.svg" alt="">
            </div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }

    clear() {
        ROOT_SHOPPING.innerHTML = '';
    }
}

const spinnerPage = new Spinner();