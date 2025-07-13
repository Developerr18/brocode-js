function generatePassword() {
    const pwLength = parseInt(document.getElementById("text-box").value) || 0;
    const isUppercaseAllowed =
        document.getElementById("uppercase_checkbox").checked;
    const isLowercaseAllowed =
        document.getElementById("lowercase_checkbox").checked;
    const isNumbersAllowed =
        document.getElementById("numbers_checkbox").checked;
    const isSymbolAllowed = document.getElementById("symbol_checkbox").checked;

    const selectedOptionsCount =
        Number(isUppercaseAllowed) +
        Number(isLowercaseAllowed) +
        Number(isNumbersAllowed) +
        Number(isSymbolAllowed);

    if (pwLength < 6) {
        document.getElementById("pw-strength").textContent =
            "Minimum length is 6";
        return;
    } else if (selectedOptionsCount < 2) {
        console.log("Please select at least 2 checkbox options");
        return;
    }

    let allowedChars = "";
    let passwordStr = "";

    if (isUppercaseAllowed) allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isLowercaseAllowed) allowedChars += "abcdefghijklmnopqrstuvwxyz";
    if (isNumbersAllowed) allowedChars += "0123456789";
    if (isSymbolAllowed) allowedChars += "!@#$%^&*_/+-";

    for (let i = 0; i < pwLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        passwordStr += allowedChars[randomIndex];
    }

    let pwStrength;
    if (selectedOptionsCount === 4 && pwLength >= 10) pwStrength = "Strong";
    else if (selectedOptionsCount >= 3 && pwLength >= 8) pwStrength = "Medium";
    else pwStrength = "Weak";

    document.getElementById("password-output").value = passwordStr;
    document.getElementById("pw-strength").textContent = pwStrength;
}
