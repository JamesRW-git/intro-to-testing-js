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
    if(num == 5) {
        return true
    } else {
        return false
    }
}

function isEven(num) {
    let x = num;
    if(typeof x != 'boolean' && x % 2 == 0) {
        return true
    } else {
        return false
    }
}

function isVowel(input) {
    if(typeof input != 'string') {
        return false
    } else if(input.toLowerCase() === 'a' || input.toLowerCase() === 'e' || input.toLowerCase() === 'i' || input.toLowerCase() === 'o') {
        return true
    } else {
        return false
    }
}