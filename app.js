// 1. Write a JavaScript function to calculate the sum of two numbers.

function calculateSum(a, b) {
    let sum = a + b;
    return sum;
}

// 2. Write a JavaScript program to find the maximum number in an array.

const arr = [23, 41, 53, 37, 19];

function getMax(arr) {
    let greatest = arr[0];

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > greatest) {
            greatest = arr[i];
        }
    }

    return greatest;
}

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). -----> X

let string = "madam";

function checkPalindrome(string) {
    let j = string.length - 1;
    for(let i=0; i<string.length/2; i++) {
        if(string[i] !== string[j]) {
            return false;
        }
        j--;
    }

    return true;
}

// 4. Write a JavaScript program to reverse a given string.

let string2 = "abcd";

function reverseString(string) {
    // let reversedString = string.split('').reverse().join('');
    // return reversedString;

    let reversedString = "";

    for(let i=string.length-1; i>=0; i--) {
        reversedString += string[i];
    }

    return reversedString;
}

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

let arr2 = [2, 3, 4, 5, 6, 7];

function returnEven(arr) {
    let evenArr = [];

    for(let i=0; i<arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evenArr.push(arr[i]);
        }
    }

    return evenArr;
}

// 6. Write a JavaScript program to calculate the factorial of a given number.

let num = 5;

function getFactorial(num) {
    let fact = 1;

    for(let i=1; i<=num; i++) {
        fact *= i;
    }

    return fact;
}

// 7. Write a JavaScript function to check if a given number is prime.

let num2 = 11;

function checkPrime(num) {
    for(let i=2; i<num; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

// 8. Write a JavaScript program to find the largest element in a nested array.

let arr3 = [[1, 2, 3], [7, 8, 9], [4, 5, 6]];

function checkLargest(arr) {
    let largest = arr[0][0];

    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
    }

    return largest;
}

// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

let num3 = 10;

function getFibonacciSeries(num) {
    let num1 = 0, num2 = 1;
    let series = [];
    series.push(num1, num2);

    for(let i=2; i<=num; i++) {
        series.push(series[i-2] + series[i-1]);
    }

    return series;
}

// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). ---> XX