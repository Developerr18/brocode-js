/*
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
const arr = [3, 7, 2, -7, 9, 1, 5, 10, 14, -8, 13];

const evenNumbers = arr.filter((num) => num % 2 === 0);

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

const numsArr = [2, 5, -6, 10, "choco", -2, -3, "salesman", 12];

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
*/

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
