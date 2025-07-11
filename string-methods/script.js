const username = "Brocode";

console.log(username.at(0)); // B
console.log(username.charAt(0)); // B
console.log(username.indexOf("o")); // 2
console.log(username.lastIndexOf("o")); // 4
console.log(username.length); // 7
console.log(username.trim()); // Brocode
console.log(username.toUpperCase()); // BROCODE
console.log(username.toLowerCase()); // brocode
console.log(username.repeat(3)); // BrocodeBrocodeBrocode
console.log(username.startsWith("B")); // true
console.log(username.endsWith("w")); // false
console.log(username.includes(" ")); // false

const phoneNumber = "123-456-7890";

console.log(phoneNumber.replaceAll("-", "/")); // 123/456/7890
console.log(phoneNumber.padStart(15, "0")); // 000123-456-7890
console.log(phoneNumber.padEnd(15, "0")); // 123-456-7890000

///////////////////////////////////////////

const fullname = "Bro Code";

let firstname = fullname.slice(0, fullname.indexOf(" ")); // Bro
let lastname = fullname.slice(fullname.indexOf(" ") + 1); // Code

console.log(fullname.slice(0, 3)); // Bro
console.log(fullname.slice(4)); // Code
console.log(fullname.slice(0, 1)); // B
console.log(fullname.slice(-1)); // e

const email = "dineshnikum1@gmail.com";

const getUsername = email.slice(0, email.indexOf("@"));
console.log(getUsername); // dineshnikum1

const extension = email.slice(email.indexOf("@") + 1);
console.log(extension); // gmail.com

///////////////////////////////////////////////

const str = "apple,orange,banana";

console.log(str.split(",")); // ["apple", "orange", "banana"]
console.log("hello world".split(" ")); // ['hello', 'world']
console.log("abc".split("")); // ['a', 'b', 'c']

const arr = ["apple", "orange", "banana"];

console.log(arr.join(",")); // apple,orange,banana
console.log(["a", "b", "c"].join("-")); // a-b-c
console.log(["hello", "world"].join(" ")); // hello world

//////////////////////////////////////////////
// const userInput = prompt("Type your name!");
const userInput = "  dinEsH";

const user =
    userInput.trim().at(0).toUpperCase() +
    userInput.trim().slice(1).toLowerCase();
console.log(user);
