
// USERNAME STARTS HERE

let username = ((prompt("Enter your Username") || "").trim()).toUpperCase();

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


const testBtn = document.getElementById("testBtn");
const firstInputResult = document.getElementById("firstInputResult");


testBtn.addEventListener("click", () => {
    const inputValue = prompt("Enter any value (text or number)");

    const testValue =parseInt (inputValue);

    if (isNaN(testValue)){

        firstInputResult.innerHTML = `The Data you entered is "<span style = "font-weight: bold;">${inputValue}"</span>.\n <br>Your Data Type is <b> String.</b>`;
    }else{

        firstInputResult.innerHTML = `The Data you entered is "<span style = "font-weight: bold;">${inputValue}"</span>.\n <br>Your Data Type is <b> Number.</b>`;
    }

});
