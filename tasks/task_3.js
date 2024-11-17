function filterArray(numbers, value) {
    const filteredNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            filteredNumbers.push(numbers[i]);
        }
    }
    return filteredNumbers;
}

function filterArrayFromPrompt() {
    const numbersInput = prompt("Введіть числа через кому (наприклад: 1, 5, 10, 15):");
    const valueInput = prompt("Введіть значення фільтрації (наприклад: 10):");

    if (numbersInput !== null && valueInput !== null) {
        const numbersArray = numbersInput.split(',').map(Number);
        const filterValue = Number(valueInput);

        const result = filterArray(numbersArray, filterValue);

        console.log(result.length > 0 
            ? 'Числа більше ніж ' + filterValue + ': ' + result.join(', ') 
            : 'Немає чисел більше ніж ' + filterValue);
    } else {
        console.log('Операція була скасована користувачем.');
    }
}

window.onload = function() {
    filterArrayFromPrompt();
};