function getCurrentTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");

    document.getElementById(
        "clock"
    ).textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
}

setInterval(getCurrentTime, 1000);

// Remainder : a should always greater than b, else return a
// console.log(15 % 4); // 3
// console.log(10 % 3); // 1
// console.log(9 % 3);  // 0
// console.log(4 % 12); // 4
