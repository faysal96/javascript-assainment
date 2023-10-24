// problem 1: Write a function to calculate the area of a triangle.

// answer: 

function areaOfTreangle(base,hight){
    let area = (base*hight)/2;
    return area;
}
areaOfTreangle(120,180);


// ================================================ End =============================================================

// Problem 2: Write a function to convert degrees to radians.

function degreeTORadians(degrees){

    // we know 1 degree = 0.017453 radian

    let radians = degrees*.017453;
    return radians;

}
degreeTORadians(45);

// ================================================ End =============================================================

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial..

function factorials(number){
    if (number<0){
        return "It has no factorial";
    }
    else if (number === 0 || number === 1){
        return 1;
    }
    else{
        let factorialNumber = 1;
        for( i = 2; i <=number; i++){
            factorialNumber *=i;

        }
        return factorialNumber;
    }
 
    
}
factorials(6);

// ================================================ End =============================================================

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(num){

    if (num === 1){
        return false;
    }
    else if (num === 2){
        return true;
    }
    else if (num ===3){
        return true;
    }
    else if (num === 5){
        return true;
    }
    else if (num === 7){
        return true;
    }
    else if (num % 2 == 0){
        return false;
    }
    else if (num % 3 == 0){
        return false;
    }
    else if (num % 5 == 0){
        return false;
    }
    else if (num % 7 == 0){
        return false;
    }
    else {
        return true;
    }
}
isPrime(5);

// ================================================ End =============================================================


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
let firstArray = [1,2,5,9,8];
let secondArray = [10,15,68,47,20];

function mergeArrays(firstArray,secondArray){
    let nweArray = firstArray.concat(secondArray);
    return nweArray;

}
mergeArrays(firstArray,secondArray);

// ================================================ End =============================================================


// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year){
    if((year % 4 == 0 && year % 100 != 0 )|| year % 400 == 0){
        return "This is a leap year";
    }
    else{
        return "Not leap year";
    }

}
isLeapYear(2152);

// ================================================ End =============================================================


// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.


let anArray = [10,20,30,10,40,60,50,20];
function removeDuplicates(anArray){
     for (i =0, i<=anArray.length -1, i++){

        for (m = anarray[i], m)

     }

     


}
removeDuplicates(anArray);



// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(fahrenheit){
// we know 1 degree fahrenheit = 0.3777778 celsius;

    let Celsius = fahrenheit * 0.3777778;
    return Celsius;


}
convertToCelsius(100);

// ================================================ End =============================================================


// Problem 9: Write a function to find the maximum of five numbers.

let a = 5;
let b = 10;
let c = 25;
let d = 60;
let e =20;

function maximumNumber (a,b,c,d,e){
    if(a>b && a>c && a>d && a>e){
        return " a is maximum";

    }
    else if(b>c && b>d && b>e){
        return "b is maximum";
        }
    else if (c>d && c>e){
        return "c is maximum";
            
        }
    else if (d>e){
        return " d is maximum";
    }
    else{
        return "e is maximum";
    }
    

}
maximumNumber(a,b,c,d,e);
// ================================================ End =============================================================


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(string){
    let stringLength = string.length;
    if(stringLength % 2 === 0){
        return "even";
    }else{
        return "odd";
    }

}
evenOdd(faysal);

// ================================================ End =============================================================




/*

=> Answer any 4 questions.

1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

2. What is JavaScript, and what is its primary purpose in web development?

3. Explain the difference between var, let, and const when declaring variables in JavaScript.

4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

5. What is the difference between "null" and "undefined" in JavaScript?

*/
