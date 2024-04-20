// Function to calculate the average value of an array
function calculateAverage(array) {
    // Initialize variables for sum and average
    let sum = 0;
    let average = 0;

    // Calculate the sum of all elements in the array
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    // Calculate the average by dividing the sum by the number of elements
    if (array.length > 0) {
        average = sum / array.length;
    }

    // Return the average
    return average;
}

// Test Data
let sampleArray = [20, 30, 25, 35, -16, 60, -100];

// Calculate the average value of the sample array
let avg = calculateAverage(sampleArray);

// Print the result
console.log("Average value of the array elements is : " + avg.toFixed(1) + ".");
