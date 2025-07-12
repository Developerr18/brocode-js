const fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach((fruit, index, arr) => {
    arr[index] = fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase();
});

console.log(fruits);

const fruitsMap = ["apple", "orange", "banana", "mango"];

const formatedArr = fruitsMap.map((fruit) => {
    return fruit.at(0).toUpperCase() + fruit.slice(1);
});

console.log(formatedArr);
