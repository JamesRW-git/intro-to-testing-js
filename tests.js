// Unit tests for the helloWorld function
//Describe takes two parameters
//First parameter is the name of the series of tests
//Second parameter is callback 'function()' (anonymous, notice it has no name)

//describe('helloWorld', function() {
//    //checking if function EXISTS
//    //'it' takes two parameters
//    //First is a description of the test
//    //Second is callback 'function()'
//   it('should be a defined function', function() {
//     expect(typeof helloWorld).toBe('function');
//   });
//   //checking if string is returned
//    //notice it's helloworld() as it's checking what the function RETURNS
//    it('should return a string when called', function() {
//      expect(typeof helloWorld()).toBe("string");
//    });
//    //checking if the string actually returns 'Hello, World!' EXACTLY
//    it('should return the string "Hello, World!" when executed', function() {
//      expect(helloWorld()).toBe("Hello, World!");
//    });
//    //check that the function does not return UNDEFINED
//    //notice the not.toBe rather than toBe
//    it("should never return 'undefined' when called", function() {
//      expect(helloWorld()).not.toBe(undefined);
//    });
//});

//sayHello tests
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    })
    it('should return a string', function() {
        expect(typeof sayHello()).toBe('string');
    })
    it('should return "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })
    it('should return "Hello, Alex!"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it('should return "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it('should return "Hello, World!"', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    })
    it('should return "Hello, World!"', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    })
})

//isFive tests
describe('isFive', function(){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    })
    it('should be a boolean', function(){
        expect(typeof isFive()).toBe('boolean');
    })
    it('should return true when passed 5', function(){
        expect(isFive(5)).toBe(true);
    })
    it('should return true when passed "5"', function(){
        expect(isFive("5")).toBe(true);
    })
})

//isEven tests
describe('isEven', function(){
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    })
    it('should return a boolean no matter the input', function() {
        expect(typeof isEven()).toBe('boolean');
    })
    it('should return true when passed 2', function() {
        expect(isEven(2)).toBe(true);
    })
    it('should return true when passed -4', function() {
        expect(isEven(-4)).toBe(true);
    })
    it('should return false when passed 3', function() {
        expect(isEven(3)).toBe(false);
    })
    it('should return false when input is "banana"', function() {
        expect(isEven("banana")).toBe(false);
    })
    it('should return true when passed "8"', function() {
        expect(isEven("8")).toBe(true);
    })
    it('should return false when passed Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    })
    it('should return false when called with a boolean input', function() {
        expect(isEven(false)).toBe(false);
    })
    it('should return false when called without an argument', function() {
        expect(isEven()).toBe(false);
    })
})

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    })
    it('should always return a boolean', function() {
        expect(typeof isVowel()).toBe('boolean');
    })
    it('should always return true with an input of "a"', function() {
        expect(isVowel('a')).toBe(true);
    })
    it('should always return true with an input of "A"', function() {
        expect(isVowel('A')).toBe(true);
    })
    it('should always return false with an input of "y"', function() {
        expect(isVowel('y')).toBe(false);
    })
    it('should always return false with an input of 4', function() {
        expect(isVowel(4)).toBe(false);
    })
    it('should always return false with a boolean true as input', function() {
        expect(isVowel(true)).toBe(false);
    })
    it('should always return false with a boolean false as input', function() {
        expect(isVowel(false)).toBe(false);
    })
    it('should always return false with an input of "banana"', function () {
        expect(isVowel('banana')).toBe(false);
    })
    it('should always return false without an argument', function() {
        expect(isVowel()).toBe(false);
    })
    it('should always return true with an input of "e"', function() {
        expect(isVowel('e')).toBe(true);
    })
    it('should always return true with an input of "E"', function () {
        expect(isVowel('E')).toBe(true);
    })
    it('should always return true with an input of "i"', function() {
        expect(isVowel('i')).toBe(true);
    })
    it('should always return true with an input of "I"', function() {
        expect(isVowel('I')).toBe(true);
    })
    it('should always return true with an input of "o"', function() {
        expect(isVowel('o')).toBe(true);
    })
    it('should always return true with an input of "O"', function() {
        expect(isVowel('O')).toBe(true);
    })
    it('should always return true with an input of "u"', function() {
        expect(isVowel('u')).toBe(true);
    })
    it('should always return true with an input of "U"', function() {
        expect(isVowel('U')).toBe(true);
    })
})

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    })
    it('should return false if input does not contain a number', function() {
        expect(typeof add(1, 2)).toBe('number');
    })
    it('should return 5 with inputs of 2 and 3', function() {
        expect(add(2,3)).toBe(5) ;
    })
    it('should return -12 with inputs of -3 and -9', function() {
        expect(add(-3,-9)).toBe(-12);
    })
    it('should return 11 with inputs of "5" and 6', function() {
        expect(add('5', 6)).toBe(11);
    })
    it('should return 6 with inputs of "-4" and "10"', function() {
        expect(add('-4','10')).toBe(6);
    })
    })
