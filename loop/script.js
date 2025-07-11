let usernameX = "x";

while (usernameX === "" || usernameX === null) {
    usernameX = prompt("Enter your name!");
}

console.log(usernameX);

//////////////////////////////////////////
let loggedIn = true;
let username;
let password;

while (!loggedIn) {
    username = prompt("enter your username!");
    password = prompt("enter your password");

    if (username === "dinesh18" && password === "myPassword") {
        loggedIn = true;
        console.log("You successfully logged in!");
    } else if (!username && !password) {
        console.log("enter details for log in!");
    } else {
        console.log("Incorrect input! Try again!");
    }
}

////////////////////////////////////////////

let sum = 0;

while (true) {
    let value = +prompt("enter a number!");

    if (!value) break;

    sum += value;
}

console.log("sum: " + sum);

///////////////////////////////////////////

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}

////////////////////////////////////////
// nested loops

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, "");

        if (!input) break outer;
    }
}

alert("Done");

//////////////////////////////////////////

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[i], arr[j]);
    }
}

////////////////////////////////////////
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        console.log(matrix[i][j]);
    }
}

console.log([10, 20, 30][1]); // 20
