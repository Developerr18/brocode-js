const buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
    button.style.backgroundColor = "tomato";
});

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "lightblue";
    });
});
