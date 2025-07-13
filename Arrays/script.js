const fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach((fruit, index, arr) => {
    arr[index] = fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase();
});

console.log(fruits);

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
