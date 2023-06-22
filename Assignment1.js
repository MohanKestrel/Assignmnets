
// Function to check if a password is strong
function isPasswordStrong(password) {
    const minLength = 6;
    const maxLength = 20;

    // Check length of password
    if (password.length < minLength || password.length > maxLength) {
        return false;
    }

    // Check for at least one lowercase letter, one uppercase letter, and one digit
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        return false;
    }

    // Check for three repeating characters in a row
    for (let i = 0; i < password.length - 2; i++) {
        if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
            return false;
        }
    }

    return true;
}

// Function to calculate the minimum number of steps required to make a password strong
function calculatePasswordStrengthSteps(password) {
    const minLength = 6;
    const maxLength = 20;
    // Check if the password is already strong
    if (isPasswordStrong(password)) {
        return 0;
    }
    let steps = 0;
    // Check length of password
    if (password.length < minLength) {
        steps += minLength - password.length;
    } else if (password.length > maxLength) {
        steps -= password.length - maxLength;
    } else {
        Step2check()
    }
    // Check for missing character types
    function Step2check() {
        if (!/[a-z]/.test(password)) {
            steps++;
        }
        if (!/[A-Z]/.test(password)) {
            steps++;
        }
        if (!/[0-9]/.test(password)) {
            steps++;
        }
    }
    // Check for three repeating characters in a row
    for (let i = 0; i < password.length - 2; i++) {
        if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
            steps++;
            break;
        }
    }

    return steps;
}

// Unit tests
console.log(calculatePasswordStrengthSteps("a")); // Expected output: 5 (Missing minimum length 5 more)
console.log(calculatePasswordStrengthSteps("aA1")); // Expected output: 3 (missing minimum length require 3 more)
console.log(calculatePasswordStrengthSteps("1337C0d3")); // Expected output: 0 

//Additional test case
console.log(calculatePasswordStrengthSteps("Abcdefghijklmnopqrstuvwxyz")); // Expected output: -6 (Reduce 6 characters)
