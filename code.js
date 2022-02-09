// helloWorld function 
//function helloWorld() {
//    return "Hello, World!";
//}

function sayHello(input) {
    if (input === true){
        return 'Hello, World!';
    } else if (input === false){
        return 'Hello, World!';
    } else {
        return 'Hello, ' + input + '!';
    }
}

function isFive(num) {
    if(num == 5 || num === 'five' || num ==='FIVE' || num !== undefined || num !== null) {
        return true
    } else {
        return false
    }
}

function isEven(num) {
    if(typeof num != 'boolean' && num % 2 == 0) {
        return true
    } else {
        return false
    }
}

function isVowel(input) {
    if(typeof input != 'string') {
        return false
    } else if(input.toLowerCase() === 'a' || input.toLowerCase() === 'e' || input.toLowerCase() === 'i' || input.toLowerCase() === 'o' || input.toLowerCase() === 'u') {
        return true
    } else {
        return false
    }
}

function add(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
    return isNaN();
    } else {
        return parseFloat(num1) + parseFloat(num2);
    }
}

console.log(add('banana', 'split'));
