// Define an array containing the possible choices
const choices = ["rock", "paper", "scissors"];

// Function to generate a random choice for the computer
const computerChoice = () => choices[Math.floor(Math.random() * 3)];

// Function to determine the result of the game
const getResult = (user, computer) => {
  // Check for a tie
  if (user === computer) return "It's a tie!";
  
  // Check for user win conditions
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    // If it's not a tie and user doesn't win, computer wins
    return "Computer wins!";
  }
};

// Function to update the result message in the HTML
const updateResult = (result) => {
  document.getElementById("result").innerText = result;
};

// Function to add click event listeners to the choice buttons
const addClickListener = (id) => {
  // Add a click event listener to the button with the given id
  document.getElementById(id).addEventListener("click", () => {
    // When the button is clicked, get the user's choice
    const userChoice = id;
    // Generate a random choice for the computer
    const computer = computerChoice();
    // Determine the result of the game based on user's and computer's choices
    const result = getResult(userChoice, computer);
    // Update the result message displayed in the HTML
    updateResult(result);
  });
};

// Loop through each choice button and add a click event listener to it
["rock", "paper", "scissors"].forEach((id) => {
  addClickListener(id);
});
