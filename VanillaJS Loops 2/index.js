// Function to create multiplication table of a number
function multiplicationTable(number) {
    // Iterate from 1 to 10
    for (let i = 1; i <= 10; i++) {
        // Multiply the current number by the iterator and print the result
        console.log(number + " x " + i + " = " + (number * i));
    }
}

// Prompt the user to enter a number
let userInput = prompt("Enter a number:");

// Convert the user input to a number
let number = parseFloat(userInput);

// Check if the input is a valid number
if (!isNaN(number)) {
    // Call the multiplicationTable function with the entered number
    console.log("Multiplication table of " + number + ":");
    multiplicationTable(number);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
