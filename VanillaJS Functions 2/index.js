// Function to calculate the factorial of a number
function calculateFactorial(n) {
    // Check if the input is a non-negative integer
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return "Factorial is not defined for negative numbers or non-integer values.";
    }

    // Initialize the factorial value to 1
    let factorial = 1;

    // Calculate factorial using a loop
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    // Return the factorial value
    return factorial;
}

// Test the function with an example
const number = 6;
const factorialResult = calculateFactorial(number);

// Print the result
console.log(`The factorial of ${number}! is ${factorialResult}.`);
