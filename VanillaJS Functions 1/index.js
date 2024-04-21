// Function to show the content of an array
function showArrayContent(array) {
    // Print the content of the array
    console.log("The content of the array is:", array);
}

// Function to find the maximum value in an array
function findMaxValue(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return "Array is empty.";
    }

    // Initialize variable to store the maximum value
    let max = array[0];

    // Iterate through the array to find the maximum value
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    // Return the maximum value
    return max;
}

// Sample array
const sampleArray = [10, 2, 3, 4, 7];

// Call the function to show array content
showArrayContent(sampleArray);

// Call the function to find the maximum value
const maxValue = findMaxValue(sampleArray);

// Print the maximum value
console.log("The max value in the array is:", maxValue);
