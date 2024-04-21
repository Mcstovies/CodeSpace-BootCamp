// Function to check if a number is prime
function isPrime(number) {
    // Check if the number is less than 2, as primes start from 2
    if (number < 2) {
        return false;
    }

    // Loop through potential divisors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by any other number, it's not prime
        if (number % i === 0) {
            return false;
        }
    }

    // If no divisors were found, the number is prime
    return true;
}

// Test the function with an example
const num = 29;
const isPrimeResult = isPrime(num);

// Print the result
if (isPrimeResult) {
    console.log(`${num} is a prime number.`);
} else {
    console.log(`${num} is not a prime number.`);
}
