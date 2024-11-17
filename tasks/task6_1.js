function createProduct(obj, callback) {
    const product = { ...obj, id: Date.now() };
    callback(product);
}

function logProduct(product) {
    console.log("Продукт:", product);
    alert(`Продукт створено:\nНазва: ${product.name}\nЦіна: ${product.price}\nКількість: ${product.quantity}\nID: ${product.id}`);
}

function logTotalPrice(product) {
    const totalPrice = product.price * product.quantity;
    console.log(`Загальна вартість товару "${product.name}": ${totalPrice}`);
    alert(`Загальна вартість товару "${product.name}": ${totalPrice}`);
}

function createProductFromPrompt() {
    const name = prompt("Введіть назву товару:");
    const priceInput = prompt("Введіть ціну товару:");
    const quantityInput = prompt("Введіть кількість товару:");

    if (name !== null && priceInput !== null && quantityInput !== null) {
        const price = parseFloat(priceInput);
        const quantity = parseInt(quantityInput, 10);

        if (isNaN(price) || isNaN(quantity)) {
            alert("Будь ласка, введіть коректні числові значення для ціни та кількості.");
            console.log("Помилка: некоректні числові дані.");
            return;
        }

        const newProduct = { name, price, quantity };
        createProduct(newProduct, logProduct);
        createProduct(newProduct, logTotalPrice);
    } else {
        console.log("Операція була скасована користувачем.");
        alert("Операція була скасована користувачем.");
    }
}

window.onload = function () {
    createProductFromPrompt();
};
