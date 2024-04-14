//Test Data
let x = 1524
let y = 2345
let z = 3321

// Function to check if numbers are in increasing order
function isInIncreasingOrder(x, y, z){
    return x < y && y < z;
}
// Function to check if numbers are in decreasing order
function isInDecreasingOrder(x, y, z){
    return x > y && y > z;
}
// Function to determine the order based on the numbers
function determineOrder(x, y, z){
    if (isInIncreasingOrder(x, y, z)){
        return "increasing";
    } else if (isInDecreasingOrder(x, y, z)){
        return "decreasing"
    } else {
        return "Neither increasing nor decreasing order";
    }
}
// Prints the order of test data
let order = determineOrder(x, y, z);
console.log(order);
