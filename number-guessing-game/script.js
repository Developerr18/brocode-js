const minNumber = 1;
const maxNumber = 100;
const randomNumber = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = +prompt(`Guess a number between ${minNumber} and ${maxNumber}.`);

    if (guess > maxNumber || guess < minNumber) {
        alert(`Please choose number between ${minNumber} and ${maxNumber}.`);
    } else if (isNaN(guess)) {
        alert("Please choose valid number");
    } else {
        attempts++;
        if (guess > randomNumber) {
            alert("Too HIGH, Try again!");
        } else if (guess < randomNumber) {
            alert("Too LOW, Try again!");
        } else {
            alert(
                `Correct guess! Answer: ${randomNumber}, It took you ${attempts} attempts!`
            );
            running = false;
        }
    }
}
