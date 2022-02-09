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

describe('isFive', function(){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    })
    it('should be a boolean', function(){
        expect(typeof isFive()).toBe('boolean');
    })

})
