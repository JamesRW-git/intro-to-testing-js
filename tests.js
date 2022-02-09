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
})

