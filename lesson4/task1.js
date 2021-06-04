/**
 * Функция разбивает число по разрядам и возвращает объект с записанными разрядами числа.
 * @param {int} num Число в диапазоне [0, 999], которое разобьется на разряды.
 * @returns {Object} Объект с разрядами числа или пустой объект в случае ошибки.
 */
function getDigitsOfNumber(num) {
    num = Number(num);
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение аргумента должно быть целым числом в диапазоне [0 .. 999].');
        return {};
    }

    return {
        num,
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundereds: Math.floor(num / 100)
 
    };
}

console.log(getDigitsOfNumber(prompt("4islo")));