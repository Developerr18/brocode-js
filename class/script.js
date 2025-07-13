// static : it's belong to class itself not to created object from class

class MathUtil {
    static PI = 3.14;

    static getDiameter(radius) {
        return radius * 2;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));

//////////////////////////////////////////

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online!`);
    }

    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Virat");
const user2 = new User("Rohit");
const user3 = new User("Gill");
const user4 = new User("Pant");

console.log(user1.userCount); // undefined : belong to class, not to obj
console.log(User.userCount); // 4

console.log(user1.username); // Virat

user1.sayHello(); // Hello, my username is Virat
User.getUserCount(); // There are 4 users online!

///////////////////////////////////////////
// Inheritance

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";

    run() {
        console.log(`${this.name} is running`);
    }
}

class Fish extends Animal {
    name = "fish";

    swim() {
        console.log(`${this.name} is swimming`);
    }
}

const rabbit = new Rabbit();
rabbit.sleep(); // This rabbit is sleeping
rabbit.eat(); // This rabbit is eating

const fish = new Fish();
fish.swim();

/////////////////////////////////////////
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} moves at a speed of ${speed} kph`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`${this.name} can run!`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`${this.name} can swim!`);
        super.move(this.swimSpeed);
    }
}

const rabbit = new Rabbit("rabbit", 2, 25);
const fish = new Fish("fish", 1, 15);

console.log(rabbit);
console.log(fish);

rabbit.run(30);
fish.swim(20);

////////////////////////////////////////
// Getters and Setters

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(40, 20);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

//////////////////////////////////////////
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newFirstname) {
        if (typeof newFirstname === "string" && newFirstname.length > 0) {
            this._firstname = newFirstname;
        } else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastname(newLastname) {
        if (typeof newLastname === "string" && newLastname.length > 0) {
            this._lastname = newLastname;
        } else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    get fullname() {
        return `${this._firstname} ${this._lastname}`;
    }

    get age() {
        return this._age;
    }
}

const person = new Person("Dinesh", "Nikum", 25);
console.log(person);
console.log(person.fullname);
console.log(person.age);
