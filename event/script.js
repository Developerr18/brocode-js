const containerEl = document.querySelector(".container");

containerEl.addEventListener("click", (e) => {
    const selectedEl = e.target;

    if (!selectedEl.classList.contains("box")) return;

    if (selectedEl.classList.contains("selected")) {
        selectedEl.classList.remove("selected");
        return;
    }

    const prevSelected = containerEl.querySelector(".selected");
    if (prevSelected) {
        prevSelected.classList.remove("selected");
    }

    selectedEl.classList.add("selected");
});
