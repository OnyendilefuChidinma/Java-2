// list the students using array
// using prompt, enter the ID No (Index No) of students to be deleted from the list 
// display the list of the remaining students


// Define the array of student names
const listOfStudents = ["Jane", "Isaac", "John", "Paul", "Patrick", "Mark", "Stella", "Angela", "Peter", "Titus"];

// Get a reference to the ordered list element from the HTML
const studentListElement = document.getElementById("listOfStudents");

// Loop through each student name in the array
for (let i = 0; i < listOfStudents.length; i++) {

  // Create a new list item element (<li>) for each student
  const listItem = document.createElement('li');

  // Set the text content of the list item to the current student name
  listItem.textContent = listOfStudents[i];

  // Add the list item as a child element to the ordered list
  studentListElement.appendChild(listItem);
}



// Function to render or display the luist of students
function renderStudentList() {
    studentListElement.innerHTML = ""; // Clear previous content
    
    // Loop through each student name in the array
    for (let i = 0; i < listOfStudents.length; i++) {
      // Create a new list item element for each student
      const listItem = document.createElement('li');
      
      // Set the text content of the list item to the current student name
      listItem.textContent = listOfStudents[i];
      
      // Add the list item as a child element to the unordered list
      studentListElement.appendChild(listItem);
    }
  }


  // Function to add a new student
  document.getElementById("addBtn").addEventListener("click", () => {
    const newStudentName = prompt("Enter the name of the new student");
    if (newStudentName) {
      listOfStudents.push(newStudentName);
      renderStudentList();
    }else{
        alert("You have entered no student name")
    }


    // NEWLY ADDED STUDENT LIST

    const headingAddedStudent = document.getElementById("headingAddedStudent").innerText = "List of Added Students";

    const newlyAddedStudentlist = [];
    newlyAddedStudentlist.push(newStudentName);


    // Get a reference to the ordered list element from the HTML
    const addedStudentListElement = document.getElementById("listOfAddedStudents");

    // Loop through each student name in the array
    for (let i = 0; i < newlyAddedStudentlist.length; i++) {

    // Create a new list item element (<li>) for each student
    const listItem = document.createElement('li');

    // Set the text content of the list item to the current student name
    listItem.textContent = newlyAddedStudentlist[i];

    // Add the list item as a child element to the ordered list
    addedStudentListElement.appendChild(listItem);
    }

  });

  // Function to delete a student
  document.getElementById("deleteBtn").addEventListener("click", () => {
    const studentIDNo = (parseInt(prompt("Enter the ID No of the student to delete")) - 1);
    if (!isNaN(studentIDNo) && studentIDNo >= 0 && studentIDNo < listOfStudents.length) {
      //   listOfStudents.splice(studentIDNo , 1);

        // Method to delete student
      const deletedStudent = listOfStudents.splice(studentIDNo , 1)[0] ;
      // console.log(deletedStudent);


        renderStudentList();


      // NEWLY DELETED STUDENT LIST

      const headingDeletedStudent = document.getElementById("headingDeletedStudent");

      headingDeletedStudent.innerText = "List of Deleted Students"

      const newlyDeletedStudentlist = [];
      newlyDeletedStudentlist.push(deletedStudent);


      // Get a reference to the ordered list element from the HTML
      const deletedStudentListElement = document.getElementById("listOfDeletedStudents");

      // Loop through each student name in the array
      for (let i = 0; i < newlyDeletedStudentlist.length; i++) {

      // Create a new list item element (<li>) for each deleted student
      const listItem = document.createElement('li');

      // Set the text content of the list item to the current deleted student name
      listItem.textContent = newlyDeletedStudentlist[i];

      // Add the list item as a child element to the ordered list
      deletedStudentListElement.appendChild(listItem);
      }
    } else {
      alert("Invalid input student ID No.");
    }

  });