// exercise 1
const name = "Dinesh";
const age = 25;
const favColor = "black";

function aboutMe(name, age, favColor, job = "unemployed") {
    return `My name is ${name}, age is ${age}, fav color is ${favColor} and job ${job}`;
}

const bio = aboutMe(name, age, favColor);

///////////////////////////////////////
// exercise 2 // Array Basics

const arr = [3, 7, 2, -7, 9, 1, 5];

const largestNum1 = (arr) => Math.max(...arr);
const max = largestNum1(arr);

const smallestNum1 = (arr) => Math.min(...arr);
const min = smallestNum1(arr);

////////////////////////////////////
function largestNum11(arr) {
    let maxNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) maxNum = arr[i];
    }

    return maxNum;
}

///////////////////////////////////
function largestNum12(arr) {
    let maxNum = arr[0];

    for (let num of arr) {
        if (num > maxNum) maxNum = num;
    }

    return maxNum;
}

////////////////////////////////////
const largestNum2 = arr.reduce((acc, nextVal) => {
    return nextVal > acc ? nextVal : acc;
});

const smallestNum2 = arr.reduce((acc, nextVal) => {
    return nextVal < acc ? nextVal : acc;
});

///////////////////////////////////
function sum(arr) {
    let maxNum = 0;

    for (let num of arr) {
        maxNum += num;
    }

    return maxNum;
}

///////////////////////////////////
const sumNumbers = arr.reduce((acc, nextVal) => acc + nextVal);
console.log(sumNumbers);

////////////////////////////////////
const arr11 = [3, 7, 2, -7, 9, 1, 5, 10, 14, -8, 13];

const evenNumbers = arr11.filter((num) => num % 2 === 0);

/////////////////////////////////////
// exercise 3 // String Manipulation

// reverse a string

const str = "My favourite color is BLACK";
const letter = "Dinesh";

function reverseString(str) {
    return str.split(" ").reverse().join(" ");
}

function reverseLetter(letter) {
    return letter.split("").reverse().join("");
}

const reversedStr = reverseString(str);
const reversedWord = reverseLetter(letter);

/////////////////////////////////////
// number of vowels in the string

function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// string with the first letter of each word capitalized
function capitalizedWord(str) {
    const capitalized = str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

    return capitalized;
}

///////////////////////////////////////////
// exercise 4 : basic conditionals

const numsArr1 = [2, 5, -6, 10, "choco", -2, -3, "salesman", 12];

function checkNum(arr) {
    let modifiedArr = [];

    for (let num of arr) {
        if (typeof num === "number") {
            if (num > 0) {
                modifiedArr.push("positive");
            } else if (num < 0) {
                modifiedArr.push("negative");
            }
        } else {
            modifiedArr.push("not a number");
        }
    }

    return modifiedArr;
}

//////////////////////////////////////////
// exercise 5: loop

function multiplication(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

/////////////////////////////////////////
// exercise 6 : object manipulation

const person = {
    fullname: "Dinesh Nikum",
    age: 25,
    hobbies: ["games", "cricket", "code"],
};

function addHobby(newHobby) {
    person.hobbies = [...person.hobbies, newHobby];
    person.hobbies.push(newHobby);
}

/////////////////////////////////////////
function removeHobby(hobbyName) {
    const updatedHobbies = person.hobbies.filter(
        (hobby) => hobby !== hobbyName
    );

    person.hobbies = updatedHobbies;
}

function displayInfo(person) {
    return `Person fullname is : ${person.fullname}, He is ${
        person.age
    } years old, his hobbies are ${person.hobbies.join(", ")}!`;
}

/////////////////////////////////////////
// exercise 7 : Array methods

const students = [
    { name: "John", grade: 75 },
    { name: "Jane", grade: 92 },
    { name: "Bob", grade: 81 },
];

const higherGrade = students.find((student) => student.grade > 90);

const averageGrade = students.reduce(
    (acc, next) => (acc.grade + next.grade) / students.length
);

const sortStudents = students.sort((a, b) => b.grade - a.grade);

/////////////////////////////////////////////
// exercise 8 : closure

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

const counter = makeCounter();
counter();

/////////////////////////////////////////
// exercise 9 : Error Handling
// const num1 = +prompt("Choose first number!");
// const num2 = +prompt("Choose second number!");

function divideNumbers(num1, num2) {
    try {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            throw new Error("please use numbers");
        }
        return num1 / num2;
    } catch (error) {
        console.error("Error occured:", error.message);
        return null;
    }
}

//////////////////////////////////////////
// exercise 10 : DOM

function changeText(newText) {
    document.getElementById("para").textContent = newText;
}

function addListItem(newEl, elText) {
    const listContainer = document.getElementById("unorder-list");

    const el = document.createElement(newEl);
    el.textContent = elText;

    listContainer.append(el);
}

addListItem("li", "Coconut");

//////////////////////////////////////
document.getElementById("toggle-btn").addEventListener("click", () => {
    const para = document.getElementById("para");
    para.classList.toggle("para");
});

//////////////////////////////////////////
// exercise 11 : Async Js

function wait2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Promise resolved after 2 seconds");
        }, 2000);
    });
}

async function handleAsync() {
    console.log("waiting for promise to resolve!");
    const output = await wait2Seconds();
    console.log(output);
}

/////////////////////////////////////////////
// exercise 12 : Array advanced

const numsArr = [1, 2, 2, 7, 2, 43, 22, 43, 5, 5, 22, 1, 4, 4];

function removeDuplicates(numsArr) {
    /*
    const updatedArr = [];

    for (let num of numsArr) {
        if (updatedArr.includes(num)) {
            continue;
        } else {
            updatedArr.push(num);
        }
    }

    return updatedArr.sort((a, b) => a - b);
    */

    ////////////////////
    const uniqueArr = [...new Set(numsArr)];
    return uniqueArr.sort((a, b) => a - b);
}

//////////////////////////////////////////
const numbers = [12, 45, 23, 18, 19, 25];

function findSecondLargest(numsArr) {
    const largestNum = Math.max(...numsArr);

    const filterList = numsArr.filter((num) => num !== largestNum);

    return Math.max(...filterList);
}

///////////////////////////////////////////
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function oddEven(numsArr) {
    const even = numsArr.filter((num) => num % 2 === 0);
    const odd = numsArr.filter((num) => num % 2 !== 0);

    return { even, odd };
}

////
function oddEven(numsArr) {
    const even = [];
    const odd = [];

    for (let num of numsArr) {
        num % 2 === 0 ? even.push(num) : odd.push(num);
    }

    return { even, odd };
}

//////////////////////////////////////
const nestedArr = [1, [2, 3], [4, [5, 6]]];

function flattenArr(arr) {
    return arr.flat(Infinity);
}

console.log(flattenArr(nestedArr));

//////////////////////////////////////
// exercise 13 : OOP

// Methods: deposit(), withdraw(), getBalance()
// Handle insufficient funds in withdraw()

class BankAccount {
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than 0");
            return;
        }
        this.balance += amount;
        console.log(`Deposit ${amount}, New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdraw amount must be greater than 0.");
            return;
        }

        if (this.balance < amount) {
            console.log(
                `❌ insufficient funds, Maximun withdrawal amount ${this.balance}`
            );
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew ${amount}, New balance: ${this.balance}`);
    }

    getBalance() {
        return this.balance;
    }
}

const user = new BankAccount("345288769", 4000, "Dinesh");

user.deposit(2000);
user.deposit(5000);
user.withdraw(1200);
console.log(user);
console.log(user.getBalance());

////////////////////////////////////////////
// exercise 14 : Higher order fn
function processArray(arr, callback) {
    return arr.map((item) => callback(item));
}

const numsArr11 = [10, 12, 34, 37, 50];
const double = (num) => num * 2;
const result = processArray(numsArr11, double);

//////////////
const strings = ["apple", "banana", "cherry"];
const toUpperCase = (str) => str.toUpperCase();
console.log(processArray(strings, toUpperCase));

/////////////
const getLength = (str) => str.length;
console.log(processArray(strings, getLength));

/////////////////////////////////////////////
// exercise 15

const sales = [
    { product: "mouse", price: 25, quantity: 10 },
    { product: "laptop", price: 1000, quantity: 2 },
    { product: "macbook", price: 1500, quantity: 1 },
    { product: "laptop", price: 1000, quantity: 1 },
    { product: "iPhone", price: 900, quantity: 3 },
];

function getTotalRevenue(items) {
    const total = items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    return total;
}

/////////
function groupItems(items) {
    return items.reduce((acc, item) => {
        if (acc[item.product]) {
            acc[item.product] += item.quantity;
        } else {
            acc[item.product] = item.quantity;
        }
        return acc;
    }, {});
}

console.log(groupItems(sales)); // {laptop: 3, mouse: 10}

/////////
function mostExpensive(items) {
    const expensiveItem = items.reduce((maxItem, currentItem) => {
        return currentItem.price > maxItem.price ? currentItem : maxItem;
    });

    return expensiveItem;
}

////////
// Convert to a summary object with product names as keys

function summarizeSales(items) {
    const summary = {};

    for (let item of items) {
        const { product, price, quantity } = item;

        if (!summary[product]) {
            summary[product] = {
                totalQuantity: 0,
                price,
                totalRevenue: 0,
            };
        }

        summary[product].totalQuantity += quantity;
        summary[product].totalRevenue += price * quantity;
    }

    return summary;
}

console.log(summarizeSales(sales));
