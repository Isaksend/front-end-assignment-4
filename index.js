// task 5
console.log("Hello world!");

// task 6
let age = 20;
let myName = "Islambek";
console.log(`My name is ${myName}`);
console.log(`I'm ${age} years old`);
let adult = false;
if (age >= 18) {
    adult = true;
}
if (adult === true){
    console.log(`${myName} is adult`);
}else{
    console.log(`${myName} is child`);
}

function performArithmetic() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let operator = prompt("Enter an operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter the second number:"));
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById("result").innerText = `Result: ${result}`;
}

function showCurrentDate() {
    const currentDate = new Date();
    document.getElementById("date").innerText = `Today's Date: ${currentDate.toDateString()}`;
}
showCurrentDate();

// task 9
function checkLeapYear() {
    let year = parseInt(prompt("Enter a year:"));
    let isLeapYear = false;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    }
    document.getElementById("leapYearResult").innerText = isLeapYear
        ? `${year} is a leap year.`
        : `${year} is not a leap year.`;
}

// task 10
function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result2").innerText = num1 * num2;
}
function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result2").innerText = num2 !== 0 ? (num1 / num2) : "Cannot divide by zero";
}

// task 11
function convertFunc() {
    const celsiusInput = document.getElementById("id_c");
    const fahrenheitInput = document.getElementById("id_f");
    const celsiusValue = parseFloat(celsiusInput.value);

    if (isNaN(celsiusValue)) {
        fahrenheitInput.value = "Please enter valid number";
    } else {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
}

// task 12

function checkEvenOdd() {
    let num = parseInt(document.getElementById("evenOddNum").value);
    let result = (num % 2 === 0) ? "Even" : "Odd";
    document.getElementById("evenOddResult").innerText = `The number is ${result}`;
}
// task 13

function findLargestAndLeast() {
    let numA = parseFloat(document.getElementById("numA").value);
    let numB = parseFloat(document.getElementById("numB").value);
    let numC = parseFloat(document.getElementById("numC").value);
    let largest = Math.max(numA, numB, numC);
    let least = Math.min(numA, numB, numC);
    document.getElementById("largestAndLeastResult").innerText = `Largest: ${largest}, Least: ${least}`;
}

// task 14
function calculateTriangleArea() {
    let a = parseFloat(document.getElementById("sideA").value);
    let b = parseFloat(document.getElementById("sideB").value);
    let c = parseFloat(document.getElementById("sideC").value);
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(`The area of the triangle is: ${area}`);
    document.getElementById("triangleAreaResult").innerText = `The area of the triangle is: ${area}`;
}

// task 15
function calculateFactorial() {
    let num = parseInt(document.getElementById("factorialNum").value);
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    document.getElementById("factorialResult").innerText = `The factorial of ${num} is: ${factorial}`;
}

// task 16
function countVowelsAndConsonants() {
    let str = document.getElementById("inputString").value.toLowerCase();
    let vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }
    document.getElementById("vowelConsonantResult").innerText = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}
// task 17

function convertSeconds() {
    let seconds = parseFloat(document.getElementById("secondsInput").value);
    let minutes = seconds / 60;
    let hours = minutes / 60;
    document.getElementById("timeResult").innerText = `Minutes: ${minutes.toFixed(4)}, Hours: ${hours.toFixed(4)}`;
}

// task 18
function findMostFrequent() {
    let array = document.getElementById("arrayInput").value.split(',').map(Number);
    let frequency = {};
    let maxFreq = 0;
    let mostFrequent;

    for (let num of array) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mostFrequent = num;
        }
    }

    document.getElementById("mostFrequentResult").innerText = `Most Frequent Number: ${mostFrequent}`;
}
// task 19
function calculateFibonacci() {
    let n = parseInt(document.getElementById("fibonacciNum").value);
    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    document.getElementById("fibonacciResult").innerText = `Fibonacci(${n}): ${fib[n]}`;
}
// task 20
function daysUntilNewYear() {
    let today = new Date();
    let nextYear = today.getFullYear() + 1;
    let newYear = new Date(`January 1, ${nextYear}`);
    let diffTime = newYear - today;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("daysLeftResult").innerText = `Days left until New Year: ${diffDays}`;
}