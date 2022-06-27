module.exports = function toReadable(number) {
    let result = "";
    const digit = number % 10;
    const belowHundred = Math.trunc(number / 10)
    const aboveHundred = Math.trunc(number / 100)
    const base = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const toHundred = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number === 0) {
        return result += 'zero' 
        // Если вводные данные равно ноль то вернуть ноль.
    }
    if (number < 20) {
        return result += base[number] 
        // У англ языка есть константы числам ниже 20
    };
    if (number < 100){
        return result += toHundred[belowHundred] + (digit ? " " + base[digit] : ""); 
        // Добавить результату элменет массива toHundred с индексом переменная belowHundred  конкатенация с digit если есть, то пробел + элемент массива base с индексом последнего числа.
    }
    else{
        return result += (base[aboveHundred] + " hundred" + (number % 100 == 0 ? "" : " " + toReadable(number % 100))); 
        // В противном случае добавить base с переменным aboveHundred (number / 100) конкатенация с hundred + number если делится на 100 с остатком 0 то ничего не добавлять в противном случае конкатенация с рекурсией прошлого условия.
    }
};
