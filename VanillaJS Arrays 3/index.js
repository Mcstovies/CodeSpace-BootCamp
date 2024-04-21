// Function to find the maximum and minimum values of an array
function findMaxMin(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return "Array is empty.";
    }
    
    // Initialize variables to store maximum and minimum values
    let max = array[0];
    let min = array[0];
    
    // Iterate through the array to find the maximum and minimum values
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    
    // Return an object containing the maximum and minimum values
    return {
        max: max,
        min: min
    };
}

// Sample array
const sampleArray = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];

// Find maximum and minimum values
const result = findMaxMin(sampleArray);

// Print original array
console.log("Original Array:", sampleArray);

// Print maximum and minimum values
console.log("Maximum value for the above array =", result.max);
console.log("Minimum value for the above array =", result.min);
