// Function to calculate the sum of values in an array
function sumArrayValues(array) {
    // Initialize a variable to store the sum
    let sum = 0;
    
    // Iterate through the array and add each element to the sum
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    // Return the sum
    return sum;
}

// Test Data
let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Calculate the sum of the sample array
let totalSum = sumArrayValues(sampleArray);

// Print the result
console.log("The sum is " + totalSum + ".");

