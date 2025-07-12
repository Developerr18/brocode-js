/*
function showMessage(from, text = getTime()) {
    return `Good ${text} ${from}`;
}

function getTime() {
    const hour = new Date().getHours();
    if (hour < 10) return "Morning";
    else if (hour < 16) return "Afternoon";
    else return "Evening";
}

const msg1 = showMessage("Dinesh");
const msg2 = showMessage("Akash", "Evening");

console.log(msg1); // Good Afternoon Dinesh
console.log(msg2); // Good Evening Akash

////////////////////////////////////////////
function checkAge(age) {
    return age > 18 ? true : "Did parents allow you?";
}

console.log(checkAge(21));

function checkAge(age) {
    return age > 18 || "Did parents allow you?";
}

console.log(checkAge(11));

///////////////////////////////////////////////
function min(a, b) {
    // return Math.min(a, b);
    return a < b ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

///////////////////////////////////////////////
function pow(x, n) {
    return x ** n;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

////////////////////////////////////////////
let sayHi = function () {
    console.log("Hello world!");
};

let func = sayHi(); // Hello world!
let fn = console.log("Helllloooo"); // Helllloooo

///////////////////////////////////////////
function countReset() {
    let count = 0;
    count++;
    console.log(count);
}

countReset(); // 1
countReset(); // 1 again ❌ (because count resets)

///////////////////////////////////////////
// IIFE closure
const increaseCount = (function () {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
})();

increaseCount();
increaseCount();

//////////////////////////////////////////
// Closure
function createCounter() {
    let count = 10;

    return () => {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();

////////////////////////////////////////
// Callback

function askUser(cookiesAccess, yes, no) {
    if (confirm(cookiesAccess)) return yes();
    else return no();
}

function yes() {
    return "we use cookies";
}

function no() {
    return "No cookies, permission denied!";
}

const cookiesStatus = askUser("Agree to use of cookies?", yes, no);

console.log(cookiesStatus);

/////////////////////////////////////////
function askUser(cookiesAccess, yes, no) {
    if (confirm(cookiesAccess)) return yes();
    else return no();
}

const cookiesStatus = askUser(
    "Agree to use of cookies?",
    () => "We use cookies",
    () => "No cookies"
);

console.log(cookiesStatus);


////////////////////////////////////

// const age = prompt("What is your age?", 18);
const age = 25;

const welcome =
    age > 18 ? () => console.log("Greetings") : () => console.log("Hello");

welcome();

//////////////////////////////////////
function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();

// function.[[environment]] ➡️ lexical environment of outer fn
console.log(counter());
console.log(counter());
console.log(counter());
*/

/////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

/////////////////////////////////////////
/*
fn1(fn2);

function fn1(callback) {
    setTimeout(() => {
        console.log("fn1 executed");
        callback();
    }, 2000);
}

function fn2() {
    console.log("Data received! fn2 executed");
}
*/
