/*
const fruits2 = ["apple", "orange", "banana", "coconut"];

fruits2.forEach((fruit, index, arr) => {
    arr[index] = fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase();
});

console.log(fruits2);

////////////////////////////////////////////
const fruitsMap = ["apple", "orange", "banana", "mango"];

const formatedArr = fruitsMap.map((fruit) => {
    return fruit.at(0).toUpperCase() + fruit.slice(1);
});

console.log(formatedArr);

///////////////////////////////////////////
const dates = ["2025-07-13", "2025-03-12", "2025-01-17"];

const formatedDate = dates.map((date) => {
    const splitedDate = date.split("-");
    return `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;
});

console.log(formatedDate);

///////////////////////////////////////
// swap two value

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

////////////////////////////////////
const colors = ["red", "green", "white", "black"];

[colors[0], colors[colors.length - 1]] = [colors[colors.length - 1], colors[0]];

console.log(colors); // ['black', 'green', 'white', 'red']

///////////////////////////////////////
const fruits = ["apple", "banana", "coconut", "mango", "coconut"];

const [fruit1, fruit2, ...extraFruits] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(extraFruits);

///////////////////////////////////////
const person1 = {
    firstname: "John",
    lastname: "wick",
    age: 30,
    job: "Engineer",
};

const person2 = {
    firstname: "Jassy",
    lastname: "pinkman",
    age: 27,
};

// const { firstname, lastname, age, job = "unemployed" } = person2;

function displayPerson({ firstname, lastname, age, job = "unemployed" }) {
    console.log(
        `${firstname} ${lastname} is ${age} years old and he is ${job} `
    );
}

displayPerson(person2);

////////////////////////////////////////////
const person = {
    fullname: "Jassy pinkman",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "cooking-meth", "fight"],
    address: {
        street: "124, street 2 longway",
        city: "alberta",
        country: "usa",
    },
};

for (const property in person.address) {
    console.log(person.address[property]);
}
*/

///////////////////////////////////////////
/*
class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person(
    "Virat",
    36,
    "124 conch street road",
    "London",
    "England"
);

const person2 = new Person(
    "Rohit",
    38,
    "128 vltr street road",
    "paris",
    "France"
);

console.log(person1);
console.log(person2);
*/

////////////////////////////////////////
// sort ()

const fruits = ["apple", "banana", "mango", "coconut", "grapes"];

fruits.sort(); // ['apple', 'banana', 'coconut', 'grapes', 'mango']

//
const students = [
    { name: "Rohit", age: 39, gpa: 1.5, century: 50 },
    { name: "Virat", age: 37, gpa: 2.5, century: 85 },
    { name: "Mahi", age: 44, gpa: 4.0, century: 10 },
    { name: "Gill", age: 24, gpa: 3.4, century: 17 },
];

const byCentury = students.sort((a, b) => b.century - a.century);
const byAge = students.sort((a, b) => a.age - b.age);
const byGpa = students.sort((a, b) => a.gpa - b.gpa);
const byName = students.sort((a, b) => a.name.localeCompare(b.name));

console.log(students);

//
const names = ["birla", "tata", "ambani"];

names.sort((a, b) => a.localeCompare(b)); // ['ambani', 'birla', 'tata']
names.sort((a, b) => b.localeCompare(a)); // ['tata', 'birla', 'ambani']
