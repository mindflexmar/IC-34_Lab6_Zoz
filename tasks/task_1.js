let quantity = Number(prompt('Enter quantity of droids'));
let pricePerDroid = Number(prompt('Enter price per droid'));

if (isNaN(pricePerDroid) || isNaN(quantity)) {
    console.log('price or quantity is not a number');
} else {
    console.log(makeTransaction(quantity, pricePerDroid)); 
}

function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
