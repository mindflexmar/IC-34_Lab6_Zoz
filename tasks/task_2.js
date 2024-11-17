function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
        return true;
    }
    return false;
}

function checkMessageForSpam() {
    const messageInput = prompt("Введіть повідомлення для перевірки на спам:");

    if (messageInput !== null) {
        const isSpam = checkForSpam(messageInput);

        console.log(isSpam
            ? "Повідомлення містить спам."
            : "Повідомлення не містить спам.");
    } else {
        console.log('Операція була скасована користувачем.');
    }
}

window.onload = function() {
    checkMessageForSpam();
};