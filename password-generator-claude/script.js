let generatedPassword = "";

function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    // Validate inputs
    if (length < 4 || length > 128) {
        alert("Password length must be between 4 and 128 characters");
        return;
    }

    if (!uppercase && !lowercase && !numbers && !symbols) {
        alert("Please select at least one character type");
        return;
    }

    // Character sets
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charset = "";
    let requiredChars = "";

    // Build character set and ensure at least one of each selected type
    if (uppercase) {
        charset += uppercaseChars;
        requiredChars +=
            uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }
    if (lowercase) {
        charset += lowercaseChars;
        requiredChars +=
            lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    if (numbers) {
        charset += numberChars;
        requiredChars +=
            numberChars[Math.floor(Math.random() * numberChars.length)];
    }
    if (symbols) {
        charset += symbolChars;
        requiredChars +=
            symbolChars[Math.floor(Math.random() * symbolChars.length)];
    }

    // Generate password
    let password = requiredChars;
    for (let i = password.length; i < length; i++) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }

    // Shuffle the password to avoid predictable patterns
    password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");

    // Display password
    generatedPassword = password;
    const passwordDisplay = document.querySelector(".password-display");
    passwordDisplay.textContent = password;
    passwordDisplay.classList.remove("placeholder-text");

    // Enable copy button
    document.querySelector(".copy-btn").disabled = false;

    // Show and update strength meter
    updateStrengthMeter(password);
}

function copyPassword() {
    if (!generatedPassword) return;

    navigator.clipboard
        .writeText(generatedPassword)
        .then(() => {
            const copyBtn = document.querySelector(".copy-btn");
            const originalText = copyBtn.textContent;
            copyBtn.textContent = "Copied!";
            copyBtn.style.background = "#007bff";

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.background = "#28a745";
            }, 2000);
        })
        .catch((err) => {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = generatedPassword;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                document.execCommand("copy");
                alert("Password copied to clipboard!");
            } catch (err) {
                alert("Failed to copy password. Please copy manually.");
            }

            document.body.removeChild(textArea);
        });
}

function updateStrengthMeter(password) {
    const strengthMeter = document.getElementById("strengthMeter");
    const strengthText = document.getElementById("strengthText");
    const strengthFill = document.getElementById("strengthFill");

    let score = 0;
    let feedback = "";

    // Length scoring
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;

    // Character variety scoring
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    // Determine strength
    if (score <= 3) {
        feedback = "Weak";
        strengthFill.className = "strength-fill strength-weak";
        strengthFill.style.width = "33%";
    } else if (score <= 5) {
        feedback = "Medium";
        strengthFill.className = "strength-fill strength-medium";
        strengthFill.style.width = "66%";
    } else {
        feedback = "Strong";
        strengthFill.className = "strength-fill strength-strong";
        strengthFill.style.width = "100%";
    }

    strengthText.textContent = feedback;
    strengthMeter.style.display = "block";
}

// Generate a password on page load
window.addEventListener("load", () => {
    generatePassword();
});

// Allow Enter key to generate password
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generatePassword();
    }
});
