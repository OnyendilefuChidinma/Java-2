
// This references the "Click to Guess" button on the document.
const btnGuess = document.getElementById("btnGuess");

btnGuess.addEventListener("click", () => {

    // Generate a random secret number between 20 and 40
    const secretNumber = Math.floor(Math.random() * ((40 - 20) + 1)) + 20;

    // Set the maximum number of attempts
    const maxAttempts = 4;

    // Initialize the number of attempts
    let attempts = 0;

    // Loop until the user guesses the correct number or reaches maximum attempts
    while (attempts < maxAttempts) {
        // Prompt the user for their guess
        let guess = parseInt(prompt("Guess the secret number (between 20 and 40):"));

        // Check if the guess is correct
        if (guess === secretNumber) {
            alert("Congratulations! You guessed the correct number.");
            break; // Exit the loop since the guess is correct
        } else {
            // Increment the number of attempts
            attempts++;

            // Provide feedback to the user
            if (attempts < maxAttempts) {
                alert("Incorrect guess. Try again.");
            } else {
                alert("Sorry, you've used all your attempts. The correct number was " + secretNumber + ".");
            }
        }
    }

    // Update the display after the loop ends
    const displayResult = document.getElementById("displayResult");
    if (attempts === maxAttempts) {
        displayResult.innerHTML = `<span style="margin: 32px auto; padding: 64px; box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); border-radius: 24px; font-size: 24px; display: inline-block;">Sorry, you've used all your attempts. The correct number was <span style= " color: red; font-size: 32px; font-weight: 600;">${secretNumber} </span>.</span>`

    } else {
        displayResult.innerHTML = `<span style="margin: 32px auto; padding: 64px; box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); border-radius: 24px; font-size: 24px; display: inline-block;"> <span style= " color: green; font-size: 32px; font-weight: 600;">Congratulations! </span> You guessed the correct number  <span style= " color: green; font-size: 32px; font-weight: 600;">${secretNumber} </span>.</span>`
    }

});
