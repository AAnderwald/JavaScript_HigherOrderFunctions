console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

 function plus(number) {
    return function(plusNumber) {
        return plusNumber += number 
    };
 }

plus15 = plus(15)
console.log (plus15(10))