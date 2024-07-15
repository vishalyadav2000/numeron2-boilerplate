// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const num3 = document.getElementById("number3");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mul = document.getElementById("mul");
const divide = document.getElementById("divide");
const modulus = document.getElementById("modulus");
const timer = document.getElementById("timer");

let total = 0;
let currentQuestion = 0;
let maxQuestions = 10;
let intervalId;

function random1() {
    if (currentQuestion >= maxQuestions) {
        // alert(`Game over! Your score is ${total}/${maxQuestions}`);
        window.location.href="gameover.html"
        clearInterval(intervalId);
        return;
    }

    currentQuestion++;
    let number1 = Math.floor(Math.random() * 101);
    let number2 = Math.floor(Math.random() * 101);
    const operators = ['+', '-', '*', '/'];
    let operatorIndex = Math.floor(Math.random() * operators.length);
    let operator = operators[operatorIndex];
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) number2 = 1; // Avoid division by zero
            result = Math.floor(number1 / number2); // Integer division
            break;
        default:
            break;
    }

    num1.innerHTML = number1;
    num2.innerHTML = number2;
    num3.innerHTML = result;

    startTimer();
}

function startTimer() {
    let timeLeft = 10;
    timer.innerHTML = timeLeft;

    clearInterval(intervalId);
    intervalId = setInterval(() => {
        timeLeft--;
        timer.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            random1();
        }
    }, 1000);
}

function checkAnswer(operator) {
    let number1 = parseInt(num1.innerHTML);
    let number2 = parseInt(num2.innerHTML);
    let result = parseInt(num3.innerHTML);
    let isCorrect = false;

    switch (operator) {
        case 'plus':
            isCorrect = (number1 + number2 === result);
            break;
        case 'minus':
            isCorrect = (number1 - number2 === result);
            break;
        case 'mul':
            isCorrect = (number1 * number2 === result);
            break;
        case 'divide':
            isCorrect = (Math.floor(number1 / number2) === result);
            break;
        case 'modulus':
            isCorrect = (number1 % number2 === result);
            break;
    }

    if (isCorrect) {
        total++;
        localStorage.setItem('total', total);
    }

    random1(); // Generate new numbers and expression
}

plus.onclick = function() { checkAnswer('plus'); };
minus.onclick = function() { checkAnswer('minus'); };
mul.onclick = function() { checkAnswer('mul'); };
divide.onclick = function() { checkAnswer('divide'); };
modulus.onclick = function() { checkAnswer('modulus'); };

random1(); // Initial call to set up the first question




const operatorButtons = document.querySelectorAll(".flex-centered");
