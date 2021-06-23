
let numbers = [1, 2, 3, 4, 5];

function double (number) {  //function called double that takes in a number
    return number * 2;
}

    numbers.forEach(double);  //pass in the number not calling it yet just passing in the function itself. this will not return a new array
    console.log(numbers);       
    
    numbers.map(double);    //will return a new array
    console.log(numbers);


    let newNumber = numbers.forEach(double);
    console.log(newNumbers);
    let newnUmbers2= numbers.map(double);
    console.log(newNumbers2);

  
    let numbers = [1, 2, 3, 4, 5];
    // for/of will iterate over the values of an object using for () we declare a variable examp i=?
    for (let value of numbers) {           // the value here is the first value of number is the first number each value fist iterate 1 secon iterateion 2 etc.  This will print 1 2 3 4 5
        console.log(value);
    }


    //what am I using: Value
    //where am i getting value from : numbers []
    // what is the first value of numbers: 1
    // value = 1
    // is there another value in the array: yes
    //what is the second value of numbers: 2
    // value = 2 

// for/in iterates over the properites of an object

for (let value in numbers) {
    console.log (value);
}

function lessThan(number) {
    return function (newNumber) {     
        if (number > newNumber) {
            return true;
        }   else {
            return false;
        }
    };
}

let lessThan100 = lessThan(100);
lessThan100(150) //false
lessThan100(50) //true

function scoreFactory(points) {
    return function (score) {
        return score + points
    };
}
let score = 0;
let pongScore = scoreFactory(1);
pongScore (score)

