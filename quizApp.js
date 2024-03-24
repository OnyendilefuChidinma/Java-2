
// USERNAME STARTS HERE

let username = ((prompt("Enter your Username") || "").trim()).toUpperCase();

// Keep asking the user for their username until it is provided
while (!username) {
    console.log("You entered no username")
    alert("You entered no username.\nPlease enter your username.")

    username = ((prompt("Enter your Username") || "").trim()).toUpperCase();
}

if (username) {
    
    const displayUsername = document.getElementById("username");
    displayUsername.innerHTML = username;

    // COHORT STARTS HERE

    // Prompt the user to enter their cohort and convert it to lowercase
    let cohort = (prompt("Enter your Cohort") || "").trim().toUpperCase();

    // Keep asking the user for their cohort until valid input is provided
    while (!cohort) {
        console.log("You entered no cohort");
        alert("You entered no cohort.\nPlease enter your cohort.");

        // Prompt the user again if the input is empty or canceled
        cohort = (prompt("Enter your cohort") || "").trim().toUpperCase();
    }

    let firstCohort = 11;
    let lastCohort = 31;

    // Extract the last two characters of the cohort string and attempt to convert them to a number
    let cohortNumber = parseInt(cohort.slice(-2));
    console.log(typeof cohortNumber);

    // Check if the cohort contains the word "cohort" and the last two characters are a valid number
    if (cohort.includes("COHORT") && !isNaN(cohortNumber) && (cohortNumber >= firstCohort) && (cohortNumber <= lastCohort)) {
        // If the data is correct, display the cohort on the webpage
        const displayCohort = document.getElementById("yourCohort");
        displayCohort.innerHTML = cohort;
    } else {
        // If the data is incorrect, alert the user and ask for the cohort again
        alert("You entered an incorrect cohort.\nPlease enter your correct cohort.");
        
        // Prompt the user again for the cohort
        cohort = (prompt("Enter your cohort") || "").trim().toUpperCase();
    }

    const displayCohort = document.getElementById("yourCohort");
    displayCohort.innerHTML = cohort;

    // COHORT ENDS HERE


    // PASSCODE STARTS HERE

    // Prompt the user to enter their passcode and convert it to uppercase
    let passcode = (prompt("Enter your Passcode (use this format : PASS-12345)") || "").trim().toUpperCase();

    // Keep asking the user for their passcode until valid input is provided
    while (!passcode) {
        console.log("You entered no passcode");
        alert("You entered no passcode.\nPlease enter your passcode.");

        // Prompt the user again if the input is empty or canceled
        passcode = (prompt("Enter your Passcode (use this format : PASS-12345)") || "").trim().toUpperCase();
    }


    // Extract the last characters in the passcode string and attempt to convert them to a number
    let passcodeNumber =  parseInt((passcode.split("-"))[1]);

    // Check if the passcode contains the word "PASS" and the last characters are a valid number
    if (passcode.includes("PASS") && !isNaN(passcodeNumber)) {
        // If the data is correct, display the passcode on the webpage
        const displayPasscode = document.getElementById("yourPasscode");
        displayPasscode.innerHTML = passcode;
    } else {
        // If the data is incorrect, alert the user and ask for the passcode again
        alert("You entered an incorrect passcode.\nPlease enter your correct passcode.");
        // Prompt the user again for the passcode
        passcode = (prompt("Enter your Passcode (use this format : PASS-12345)") || "").trim().toUpperCase();
    }

    const displayPasscode = document.getElementById("yourPasscode");
    displayPasscode.innerHTML = passcode;

    // PASSCODE ENDS HERE
}

// Define questions and answers
const questionsAndAnswers = [
    { question: "What is the birth year of Dr. Nnamdi Azikiwe?", answer: 1904 },
    { question: "What is the birth year of Gen. Yakubu Gowon?", answer: 1934 },
    { question: "What is the birth year of Gen. Olusegun Obasanjo?", answer: 1937 },
    { question: "What is the birth year of Alhaji Shehu Shagari?", answer: 1925 },
    { question: "What is the birth year of Gen. Muhammadu Buhari?", answer: 1942 },
    { question: "What is the birth year of Chief Ernest Shonekan", answer: 1936 },
    { question: "What is the birth year of Gen. Sani Abacha?", answer: 1943 },
    { question: "What is the birth year of Alhaji Umaru Yar'Adua?", answer: 1951 },
    { question: "What is the birth year of Dr. Goodluck Jonathan?", answer: 1957 },
    { question: "What is the birth year of Chief Bola Ahmed Tinubu?", answer: 1952 }
];

// This is to reference the "Start Quiz" button on the document
const quizButton = document.getElementById("btnQuiz");

// This is to add an Event listener to the "Start Quiz" button, so that when the button is clicked the underlisted function will be performed
quizButton.addEventListener("click", () => {

    // This initializes the "total score" to 0 
    let totalScore = 0;

        // This initializes the "wrong Answers" to an empty variable
        let wrongAnswers = [];

        // Loop through each question
        questionsAndAnswers.forEach((item, index) => {
            let userResponse = parseInt(prompt(item.question).trim());
            if (!userResponse || userResponse !== item.answer) {
                
                wrongAnswers.push({ question: item.question, correctAnswer: item.answer, userResponse });

            } else {
                totalScore += 10;
            }
        });

        // This is to reference the "display result" element on the document
        const displayResult = document.getElementById("displayResult");
        displayResult.innerHTML = `Your final score is <span style="font-size: 24px; font-weight: bold;">${totalScore}% out of 100 </span>`;

        // This is to reference the "display wrong answer" element on the document
        const displayWrongAnswer = document.getElementById("displayWrongAnswer");
        wrongAnswers.forEach((item, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `Question: ${item.question},  <br> Correct Answer: ${item.correctAnswer}, <br> Your Answer: ${item.userResponse}`;
            displayWrongAnswer.appendChild(listItem);

            const listHeading = document.getElementById("listHeading");
            listHeading.innerHTML = "List of Incorrect answered Question";
        });
});
