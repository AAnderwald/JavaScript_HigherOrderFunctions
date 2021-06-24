
let numbers = [1, 2, 3, 4, 5];      //let is variable keyword; numbers is variable name; = is assignement operator; the numbers are variable values

function double (number) {  //function called double that takes in a number
    return number * 2;
}

    numbers.forEach(double);  //pass in the number not calling it yet just passing in the function itself. this will not return a new array
    console.log(numbers);       
    
    numbers.map(double);    //will return a new array
    console.log(numbers);

/*
    let newNumber = numbers.forEach(double);
    console.log(newNumbers);
    let newnUmbers2= numbers.map(double);
    console.log(newNumbers2);

  
    let numbers = [1, 2, 3, 4, 5];
    // for/of will iterate over the values of an object using for () we declare a variable examp i=?
    for (let value of numbers) {           // the value here is the first value of number is the first number each value fist iterate 1 secon iterateion 2 etc.  This will print 1 2 3 4 5
        console.log(value);
    }

*/
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


//example
var seasons = ["Spring", "Summer", "Fall", "Winter"];   // var declares a variable named seasons;

function printN(value) {                                // define outside of the parameter, varialbe printN; need to pass in the function and not call it because the forEach will call it        
        console.log(value);                                 //console.log is a function
} 

// Print each season to the console without pringint one by one; specifically pass on each value

seasons.forEach(printN);                    // forEach is a function
 /*

//example make all upper case
var seasons = ["Spring", "Summer", "Fall", "Winter"];   // var declares a variable named seasons;

function printN(value) {                                // define outside of the parameter, varialbe printN; need to pass in the function and not call it because the forEach will call it        
    let valueToUpper = value.toUpperCase();             // make all uppercase
    console.log(valueToUpper);                                 //console.log is a function
} 

// Print each season to the console without pringint one by one; specifically pass on each value

seasons.forEach(printN);                    // forEach is a function
*/


let jacket1 = {
    color: "blue",
    season: "Spring",
    size: "M",
};
let jacket2 = {
    color: "black",
    season: "Winter",
    size: "L",
};
let jacket3 = {
    color: "tan",
    season: "Summer",
    size: "XXL",
};
let jacket4 = {
    color: "red",
    season: "Summer",
    size: "M",
};
let jacket5 = {
    color: "black",
    season: "W\winter",
    size: "S",
};

const inventory = [];

//how to add to the invenory array above; add the jacket to the array, cause it to now NOT be an empty array

//inventory.push(jacket1);                   //push will push into the array inventory push is a method in the () are the value that you want to add to the array in this case jacket which is the object

//now push all three in the emptly inventory array can do the above three times OR it takes in as many items as want to push into the array

inventory.push(jacket1, jacket2, jacket3, jacket4, jacket5);    

console.log(inventory);

//an array method. now determine how many jackets are size mediums, so have a list of mutliple items reduce to single value
//use reduce method
let mediumJackets = inventory.reduce(function (acc, jacket) {       //acc = accumulated what is the value reducing to and other parameter is jacket
    if (jacket.size == "M") 
    {return acc + 1 } 
    else { return acc;}
}, 0);

console.log(mediumJackets);         //console will show 2


