const myCheckbox = document.getElementById("myCheckbox");
const visaOption = document.getElementById("visa");
const mastercardOption = document.getElementById("mastercard");
const paypalOption = document.getElementById("paypal");
const submitBtn = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function () {
    if (myCheckbox.checked) {
        if (visaOption.checked) {
            paymentResult.textContent = "You're paying with Visa card!";
        } else if (mastercardOption.checked) {
            paymentResult.textContent = "You're paying with Master card!";
        } else if (paypalOption.checked) {
            paymentResult.textContent = "You're paying with Paypal card!";
        } else {
            paymentResult.textContent = "Please select any payment option!";
        }
    } else {
        paymentResult.textContent = "You're NOT Subscribed!";
    }
};
