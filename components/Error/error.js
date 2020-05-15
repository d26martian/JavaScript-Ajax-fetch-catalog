class Error {
    render() {
        let html = `
            <div class="error">
                <div class="error__content">
                    <h3>Нет доступа</h3>
                    <p>Попробуйте в другой раз!!!</p>
                </div>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();